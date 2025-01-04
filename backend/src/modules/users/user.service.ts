import { prisma } from "../../prisma";
import { createUserDTO } from "./dto/user";

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const postCreateUser = async ( data: createUserDTO) => {
  const { name, email, password } = data;
  const isEmail = await prisma.user.findUnique({
    where: { email },
  });
  if (isEmail) return { status: 409 };
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return {status: 201, user};
};
