import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

type City = {
  id: number;
  name: string;
};

export const getCities = async () => {
  return await prisma.city.findMany();
};

export const getCity = async (id: number) => {
  return await prisma.city.findUnique({ where: { id } });
};

export const createCity = async (cityData: City) => {
  return await prisma.city.create({ cityData });
};

export const updateCity = async (id: number, data: City) => {
  return await prisma.city.update({ where: { id }, data });
};

export const deleteCity = async (id: number) => {
  return await prisma.city.delete({ where: { id } });
};
