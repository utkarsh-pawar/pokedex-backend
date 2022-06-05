import express from "express";
import User from "../models/user.model.js";
import * as returnResponse from "../helpers/response.js";

export const addToFavourites = async (req, res) => {
  try {
    const { _id } = req.profile;
    const { name } = req.params;
    if (req.profile.favorite_pokemons.includes(name)) {
      const updatedUser = await User.findByIdAndUpdate(
        { _id },
        { $pull: { favorite_pokemons: { $in: name } } },
        { new: true }
      );
      res.status(200).json(returnResponse.success(updatedUser));
    } else {
      const updatedUser = await User.findByIdAndUpdate(
        { _id },
        { $push: { favorite_pokemons: name } },
        { new: true }
      );
      res.status(200).json(returnResponse.success(updatedUser));
    }
  } catch (e) {
    res.status(400).json(returnResponse.error(e));
  }
};
