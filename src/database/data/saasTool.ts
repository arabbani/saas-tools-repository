import { db } from "../drizzle";

export function getSaasTools({
  filter = {},
}: {
  filter: {
    type?: string;
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
  });
}
