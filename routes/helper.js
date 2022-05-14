import { client } from "../index.js";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

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
        .updateOne({ _id: ObjectId(id) }, { $set: updateData });
}
export async function getMovieById(id) {
    return await client
        .db("b29we")
        .collection("movies")
        .findOne({ _id: ObjectId(id) });
}
export async function deleteMovieById(id) {
    return await client
        .db("b29we")
        .collection("movies")
        .deleteOne({ _id: ObjectId(id) });
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
    return (salt, hashedPassword);
}

export async function verifyPassword(password, storePassword) {
    return await bcrypt.compare(password, storePassword);
}


export async function createUser(newUser) {
    return await client
        .db("b29we")
        .collection("users")
        .insertOne(newUser);
}

export async function getUserByName(username) {
    return await client
        .db("b29we")
        .collection("users")
        .findOne({ username: username });
}

