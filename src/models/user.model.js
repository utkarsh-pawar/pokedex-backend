import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  favorite_pokemons: [String],
  token: { type: String },
});

const User = mongoose.model("user", userSchema);

export default User;
