"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./generated/prisma");
const prisma = new prisma_1.PrismaClient();
const getUser = async () => {
    const res = await prisma.users.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });
    console.log(res);
};
getUser();
