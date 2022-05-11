import express from "express";
import { createMovie, createUser, genPassword, getUserByName, verifyPassword } from "./helper.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// SIGN UP
// express.json() - middleware(inbuilt)
router.post('/signup', async function (req, res) {
    const { username, password } = req.body;
    // db.users.insertOne(newUser);
    console.log(password);
    const hashedPassword = await genPassword(password)

    const isUserExist = await getUserByName(username);

    if (isUserExist) {
        res.status(400).send({ "message": "User already exixts" })
    } else {
        const newUser = { username: username, password: hashedPassword };
        const result = await createUser(newUser);
        res.send(result);
    }
});


// LOGIN IN

router.post('/login', async function (req, res) {
    const { username, password } = req.body;
    // db.users.insertOne(newUser);
    const userFromDB = await getUserByName(username);
    // console.log(userFromDB);

    // check for the username and password
    if (!userFromDB) {
        res.status(401).send({ "message": "Invalid credentials" })
    } else {
        const storePassword = userFromDB.password;
        console.log(storePassword, password);
        const isPassMatch = await verifyPassword(password, storePassword)

        if (isPassMatch) {
            // generate token
            const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);
            res.send({ "message": "Successfully logged in", token: token })
        } else {
            res.status(401).send({ "message": "Invalid credentials" })
        }
    }
});


export const usersRouter = router;



