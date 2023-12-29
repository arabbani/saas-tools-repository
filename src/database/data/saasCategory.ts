import { db } from "../drizzle";

export function findSaasCategories() {
  return db.query.saasCategory.findMany({
    orderBy: (saasCategory, { desc }) => [desc(saasCategory.id)],
  });
}
