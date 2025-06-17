import express, { Request, Response } from "express";
import { z } from "zod/v4";
import { PrismaClient } from "../prisma/generated/prisma";


const prisma = new PrismaClient();
const app = express();
app.use(express.json())

const profileData = z.object({
    name: z.string(),
    email: z.email() ,
    password: z.string().min(6).max(18),
});

const todoData = z.object({
    title: z.string(),
    description: z.string().optional(),
});

app.post("/create-profile", async (req: Request, res: Response) => {
    const parsedBody = profileData.parse(req.body);
    const { name, email, password } = parsedBody;

    const response = await prisma.user.create({
        data: {
            name,
            email,
            password
        },
        select: { name: true, email: true },
    });
    if (!response) {
        res.status(400).json({
            message: " something went wrong while create user profile ",
        });
    }

    res.status(201).json({ message: "user profile created ", response });
});

app.post("/create-todo", async (req: Request, res: Response) => {
    const parsedBody = todoData.parse(req.body);
    const { title, description } = parsedBody;
    const userId = parseInt(req.body.userId) // Get userId from request

    const response = await prisma.todo.create({
        data: {
            title,
            description,
            user: {
                connect: { id: userId },
            },
        },
    });
    if (!response) {
        res.status(400).json({
            message: " something went wrong while create todo",
        });
    }

    res.status(201).json({ message: "todo created successfully", response });
});

app.get("/get-todo", async (req: Request, res: Response): Promise<any> => {
    const userId = parseInt(req.body.userId)

    const response = await prisma.todo.findMany({
        where: {
            user: {
                id: userId,
            },
        },
    });
    if (!response || response.length === 0) {
        return res.status(404).json({
            message: "No todos found for this user",
        });
    }

    res.status(200).json({ message: "todos fetched successfully", response });
});


export default app