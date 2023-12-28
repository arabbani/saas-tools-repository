import { db } from "../drizzle";

export function getSaasTools({
  filter = {},
  sort = {
    order: "desc",
  },
}: {
  filter?: {
    type?: string;
  };
  sort?: {
    order: string;
  };
}) {
  return db.query.saasTool.findMany({
    where: (saasTool, { like, and }) => {
      const filters = [];

      if (filter.type) {
        filters.push(like(saasTool.tags, `%${filter.type}%`));
      }

      return and(...filters);
    },
    orderBy: (saasTool, { asc, desc }) => {
      if (sort.order === "desc") {
        return [desc(saasTool.createdAt)];
      }
      return [asc(saasTool.createdAt)];
    },
  });
}
