"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../prisma/generated/prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const users = await prisma.user.findFirst({
        where: {
            id: 1
        }
    });
    console.log(users);
}
main();
