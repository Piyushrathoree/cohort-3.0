const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    try {
        const { email, password, name } = req.body;
        console.log(email, password, name);

        if (!name || !email || !password) {
            return res.status(400).json("all fields are necessary");
        }
        const existingUser = await UserModel.findOne({
            email: email,
            password: password,
        });
        if (!existingUser) {
            return res.status(400).json("User already exists");
        }
        const hashPassword = await bcrypt.hash(password, 10);
        console.log(hashPassword);

        await UserModel.create({
            email,
            password: hashPassword,
            name,
        });

        res.json({
            message: "You are signed up",
        });
    } catch (error) {
        res.status(500).json({
            message: "something went wrong ",
            error: error.message,
        });
    }
});

app.post("/signin", async function (req, res) {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "All fields are necessary" });
        }

        // Find user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: "Incorrect credentials" });
        }

        // Compare password
        const isPasswordValid =  bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(403).json({ message: "Incorrect credentials" });
        }

        // Generate token
        const token = jwt.sign(
            { id: user._id.toString() },
            JWT_SECRET,
            { expiresIn: "1h" } // Optional: Token expiration time
        );

        // Send response
        res.json({
            message: "Sign-in successful",
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
});

app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
   const { title , isCompleted } = req.body;

    await TodoModel.create({
        userId,
        title,
        isCompleted
    });

    res.json({
        message: "Todo created",
    });
});

app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId,
    });

    res.json({
        todos,
    });
});

app.put("/todos/:id/done", auth, async function (req, res) {
    try {
        const { id } = req.params; // Extract the `id` from the route parameters
        const { isCompleted } = req.body; // Extract the `isCompleted` field from the request body

        // Validate input
        if (typeof isCompleted !== 'boolean') {
            return res.status(400).json({ message: "isCompleted field is required" });
        }

        // Update the todo item
        const todo = await TodoModel.findByIdAndUpdate(
            id,
            { isCompleted }, // Pass an object with the field to update
            { new: true } // Return the updated document
        );

        // Check if the todo item was found
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        // Send the response
        res.json({
            message: "Todo updated",
            todo
        });
    } catch (error) {
        // Handle errors
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
});

app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from URL params

        if(!id){
            res.status(404).json({message:"id not received"})
        }
        

        // Find and delete the Todo
        const deletedTodo = await TodoModel.findByIdAndDelete(id);

        // Check if the Todo exists
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json({
            message: "Todo deleted successfully",
            deletedTodo,
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
});


app.listen(3000);
