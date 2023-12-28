import { SaasTool } from "@/database/schema";

export type TypeSaasToolForCard = Pick<SaasTool, 'name' | 'imageUrl' | 'websiteUrl' | 'excerpt' | 'tags'>;