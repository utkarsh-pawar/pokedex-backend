import express from "express";
import cors from "cors";
import { OAuth2Client } from "google-auth-library";
import config from "./src/configs/config.js";
import db from "./src/database/db.js";
import userRoute from "./src/routes/user.routes.js";
import pokemonRoute from "./src/routes/pokemon.routes.js";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

db();

app.get("/", (req, res) => {
  res.send("Hello!! Welcome to Pokedex!!!1");
});

//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/pokemon", pokemonRoute);

app.listen(config.PORT, () => {
  console.log(`app is listening on port ${config.PORT}`);
});
