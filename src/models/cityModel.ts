import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type City = {
  id: number;
  name: string;
};

// Get all or filtered cities
export const getCity = async (filters: Prisma.CityWhereInput = {}) => {
  return await prisma.city.findMany({
    where: filters,
  });
};

// Create a new city
export const createCity = async (data: Prisma.CityCreateInput) => {
  return await prisma.city.create({ data });
};

// Update city
export const updateCity = async (id: number, data: Prisma.CityUpdateInput) => {
  return await prisma.city.update({ where: { id }, data });
};

// Delete city
export const deleteCity = async (id: number) => {
  return await prisma.city.delete({ where: { id } });
};
