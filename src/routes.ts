import express from "express";
import { authController } from "./controllers/authController";
import { categoriesCcntroller } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { favoriteController } from "./controllers/favoritesController";
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth";
const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/categories", ensureAuth, categoriesCcntroller.index);
router.get("/categories/:id", ensureAuth, categoriesCcntroller.show);

router.get("/courses/featured", ensureAuth, coursesController.featured);
router.get("/courses/search", ensureAuth, coursesController.search);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/:id", ensureAuth, coursesController.show);
router.get("/episodes/stream", ensureAuthViaQuery, episodesController.stream);
router.get("/favorites", ensureAuth, favoriteController.index);
router.post("/favorites", ensureAuth, favoriteController.save);
export { router };
