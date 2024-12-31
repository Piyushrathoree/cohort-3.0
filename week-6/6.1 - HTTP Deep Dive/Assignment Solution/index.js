/*
Assignment #1 - Creating an auth middleware

Can you try creating a `middleware` called `auth` that verifies if a user is logged in and 
ends the request early if the user isn’t logged in?
*/
//creating an auth middleware
import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
const port = 3000;
const JWT_SECRET = "hey this ";

let users = [];

//signup route
app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    //check if username and pasword don't entered
    if (!(username && password)) {
        res.status(400).json("invalid inputs ");
    }
    //check if the user already exists
    if (
        users.find((user) => {
            user.username === username && user.password === password;
        })
    ) {
        res.status(400).json("user already signup please signIn");
    }
    //push the user into the users array
    users.push({ username: username, password: password });

    res.status(200).json({
        msg: "user signup successfully",
    });
});
console.log(users);

//signin route
app.post("/signin", (req, res) => {
    const { username, password } = req.body;

    //check if username and pasword don't entered
    if (!(username && password)) {
        res.status(400).json("invalid inputs ");
    }
    console.log(username);
    console.log(password);

    //check if the user already exists
    const user = users.find(
        (user) => user.username === username && user.password === password
    );
    if (user) {
        //generating a token and giving it to user
        jwt.sign({ username: username }, JWT_SECRET, (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data);
            res.status(200).json({
                data: data,
            });
        });
    } else {
        res.status(401).json("invalid credentials");
    }
});

//auth middleware
function auth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "token is missing" });
    }

    //check the token is correct or not
    jwt.verify(token, JWT_SECRET, (err, decode) => {
        if (err) {
            return res.status(403).json({ message: "unauthorized" });
        }

        //adding all the user info in req.user
        req.user = decode;
        next();
    });
}
app.get("/me", auth, (req, res) => {
    const user = users.find((user) => user.username === req.user.username);
    if (user) {
        res.json({ username: user.username, password: user.password });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.listen(port, function () {
    console.log("your server is running on port :" + port);
});
