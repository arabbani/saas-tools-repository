import { prisma } from "@/lib/database/prisma";

export function getSaasTools() {
    return prisma.tool.findMany();
}