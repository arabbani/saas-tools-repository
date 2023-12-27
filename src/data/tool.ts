import { prisma } from "@/lib/database";

export function getSaasTools() {
    return prisma.tool.findMany();
}