import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type User = {
  name: string;
  email: string;
  age?: number;
  cityId: number;
};

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (data: User) => {
  return await prisma.user.create({ data });
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({ where: { id } });
};

export const updateUser = async (id: number, data: User) => {
  return await prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({ where: { id } });
};
