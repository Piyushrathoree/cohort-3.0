import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const getUser = async () => {
  const res = await prisma.users.findFirst({
    where:{
      id:1
    },
    include:{
      todos:true
    }
  })

  console.log(res);
}

getUser()