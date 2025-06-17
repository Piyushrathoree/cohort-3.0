import { PrismaClient } from '../prisma/generated/prisma/client';
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findFirst(
    {
      where: {
        id: 1
      }
    }
  );
  console.log(users);
}

main();
