import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type User = {
  name: string;
  email: string;
  age?: number;
  cityId: number;
};

// Get all or filtered users
export const getUser = async (filters: Prisma.UserWhereInput = {}) => {
  return await prisma.user.findMany({
    where: filters,
  });
};

// Create a new user
export const createUser = async (data: User) => {
  return await prisma.user.create({ data });
};

// Update user
export const updateUser = async (id: number, data: Prisma.UserUpdateInput) => {
  return await prisma.user.update({
    where: { id },
    data,
  });
};

// Delete user
export const deleteUser = async (id: number) => {
  return await prisma.user.delete({ where: { id } });
};
