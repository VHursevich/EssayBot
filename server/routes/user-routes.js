const Router = require("express").Router;
const UserController = require("../controllers/user-controllers");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth-middleware");

//Регистрация
router.post(
  "/registration",
  body("username").isLength({ min: 3, max: 20 }),
  body("password").isLength({ min: 5, max: 32 }),
  UserController.registration
);

//Логирование
router.post("/login", UserController.login);

//Разлогирование
router.post("/logout", UserController.logout);

//Обноваление refresh токена
router.get("/refresh", UserController.refresh);

router.get("/getUsers", authMiddleware, UserController.getUsers);

router.patch("/useToken", authMiddleware, UserController.useToken);
//!!!!!!Получение списка пользователь(ДЛЯ DEBUG)!!!!!!!!!!
//router.get("/getUsers", UserController.getUsers);

module.exports = router;
