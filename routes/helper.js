import { client } from "../index.js";
import bcrypt from "bcrypt";

export async function createMovie(newMovies) {
    return await client
        .db("b29we")
        .collection("movies")
        .insertMany(newMovies);
}
export async function updateMovieById(id, updateData) {
    return await client
        .db("b29we")
        .collection("movies")
        .updateOne({ id: id }, { $set: updateData });
}
export async function getMovieById(id) {
    return await client
        .db("b29we")
        .collection("movies")
        .findOne({ id: id });
}
export async function deleteMovieById(id) {
    return await client
        .db("b29we")
        .collection("movies")
        .deleteOne({ id: id });
}
export async function getMovieByRating(req) {
    return await client
        .db("b29we")
        .collection("movies")
        .find(req.query) //find return cursor -> pagination
        .toArray();
}

export async function genPassword(password) {
    const NO_OF_ROUNDS = 10;
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    return { salt, hashedPassword };
}