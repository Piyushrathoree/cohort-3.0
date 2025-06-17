"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v4_1 = require("zod/v4");
const prisma_1 = require("../prisma/generated/prisma");
const prisma = new prisma_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const profileData = v4_1.z.object({
    name: v4_1.z.string(),
    email: v4_1.z.email(),
    password: v4_1.z.string().min(6).max(18),
});
const todoData = v4_1.z.object({
    title: v4_1.z.string(),
    description: v4_1.z.string().optional(),
});
app.post("/create-profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedBody = profileData.parse(req.body);
    const { name, email, password } = parsedBody;
    const response = yield prisma.user.create({
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
}));
app.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedBody = todoData.parse(req.body);
    const { title, description } = parsedBody;
    const userId = parseInt(req.body.userId); // Get userId from request
    const response = yield prisma.todo.create({
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
}));
app.get("/get-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.body.userId);
    const response = yield prisma.todo.findMany({
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
}));
exports.default = app;
