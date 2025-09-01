import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Order = {
  id: number;
  price: number;
  userId: number;
  orderStatusId: number;
};

// Get order
export const getOrder = async (filters: Prisma.OrderWhereInput = {}) => {
  return await prisma.order.findMany({
    where: filters,
  });
};

// Create order
export const createOrder = async (data: Order) => {
  return await prisma.order.create({ data });
};

// Update order
export const updateOrder = async (
  id: number,
  data: Prisma.OrderCreateInput
) => {
  return await prisma.order.update({ where: { id }, data });
};
