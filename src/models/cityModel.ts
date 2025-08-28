import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

type city = {
  id: number;
  name: string;
};

export const getCities = async (req: Request, res: Response) => {
  return await prisma.city.findMany();
};
