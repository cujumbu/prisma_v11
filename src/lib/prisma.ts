import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient | any;

if (typeof window === 'undefined') {
  // We're on the server
  prisma = new PrismaClient();
} else {
  // We're on the client
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;