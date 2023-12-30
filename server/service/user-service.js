const UserModel = require("../models/user-model.js");
const bcrypt = require("bcryptjs");
const TokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
const uuid = require("uuid")
const MailService = require("./mail-service")

class UserService {
  async registrationService(email, password) {
    const candidate = await UserModel.findOne({ email });

    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({
      email,
      password: hashPassword,
      credit: 5,
      activationLink,
    });

    await MailService.sendActivationMail(email, `${process.env.process.API_URL}/api/activate/${activationLink}`);
    const userDto = new UserDto(user); //хранить _id из базы, что мы будем хранить в токене

    const tokens = TokenService.generateTokens({ ...userDto });

    await TokenService.saveToken(userDto.id, tokens.refreshToken); //Кидает в БД(Токен ветку) токены

    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest("Пользователь с таким логином не найден");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Неверный пароль");
    }

    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken); //Кидает в БД(Токен ветку) токены

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await TokenService.removeToken(refreshToken);
    return token;
  }

  async activate(activationLink){
    const user = await UserModel.findOne({activationLink});
    if(!user){
      throw new Error('Неккоректная ссылка активации');
    }
    user.date = new Date();
    await user.save();
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await TokenService.findToken(refreshToken);
    console.log(userData);
    console.log(tokenFromDB);

    if (!userData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });

    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }

  //ОПТИМИЗИРОВАТЬ КАК СНЯТИЕ ОПРЕДЕЛЁННОГО КОЛИЧЕСТВА ТОКЕНОВ
  async useToken(email){
    const UserDto = await UserModel.findOne({email});
    const {credit} = UserDto;
    if(credit == 0){
      throw ApiError.CreditsShortageError();
    }
    const credits = await UserModel.findOneAndUpdate({email}, {credit: credit - 1}, { new:true }); //new для возращения обноваленного документа
    console.log(credits);
    return credits.credit;
  }
}

module.exports = new UserService();
