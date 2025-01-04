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

export const putUpdateUser = async (data: createUserDTO, id: string) => {
  const { name, email, password } = data;
  const findId = await prisma.user.findUnique({where: {id}});
  if (!findId) return { status: 404 };
  const user = await prisma.user.update({
    where: { id },
    data: {
      name,
      email,
      password,
    },
  });
  return {status: 200, user};
}

export const deleteUserById = async (id: string) => {
  const findId = await prisma.user.findUnique({where: {id}});
  if (!findId) return { status: 404 };
  const user = await prisma.user.delete({where: {id}});
  return {status: 200, user};
};