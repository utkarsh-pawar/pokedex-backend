import express from "express";
import * as pokemonController from "../controllers/pokemon.js";
import auth from "../middlewares/authUser.js";

const router = express.Router();

router.post("/:name", auth, pokemonController.addToFavourites);

export default router;
