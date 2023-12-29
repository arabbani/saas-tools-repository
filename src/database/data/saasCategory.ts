import { db } from "../drizzle";

export function getSaasCategories() {
  return db.query.saasCategory.findMany({
    orderBy: (saasCategory, { desc }) => [desc(saasCategory.id)],
  });
}
