import { db } from "../drizzle";

export function getSaasToolsListing({
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
    columns: {
      name: true,
      imageUrl: true,
      websiteUrl: true,
      excerpt: true,
      tags: true
    },
    where: (saasTool, { like, and, eq }) => {
      const filters = [eq(saasTool.published, true)];

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
