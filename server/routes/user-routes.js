const Router = require("express").Router;
const UserController = require("../controllers/user-controllers");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth-middleware");

//Регистрация
router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 5, max: 32 }),
  UserController.registration
);

//Логирование
router.post("/login", UserController.login);

//Разлогирование
router.post("/logout", UserController.logout);

//Активация почтовой ссылки
router.get("/activate/:link", UserController.activate);

//Обновление refresh токена
router.get("/refresh", UserController.refresh);

//!!!!!!Получение списка пользователь(ДЛЯ DEBUG)!!!!!!!!!!
router.get("/getUsers", authMiddleware, UserController.getUsers);

router.patch("/useToken", authMiddleware, UserController.useToken);


module.exports = router;
