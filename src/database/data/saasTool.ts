import { db } from "../drizzle";

export function getSaasTools() {
    return db.query.saasTool.findMany();
}