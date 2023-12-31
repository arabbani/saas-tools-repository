import { PricingModel } from "@/util/types";
import { SQL } from "drizzle-orm";
import { db } from "../drizzle";

export function getSaasToolsListing({
  filter = {},
  sort = {
    order: "desc",
  },
}: {
  filter?: {
    pricingModel?: PricingModel[];
    category?: string[];
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
      tags: true,
    },
    where: (saasTool, { like, and, eq, inArray, or }) => {
      const filters = [eq(saasTool.published, true)];

      if (filter.category && filter.category.length) {
        const categoryFilters: SQL<unknown>[] = [];
        filter.category.forEach((item) =>
          categoryFilters.push(like(saasTool.tags, `%${item}%`))
        );

        if (categoryFilters.length) {
          filters.push(or(...categoryFilters) as SQL<unknown>);
        }
      }

      if (filter.pricingModel && filter.pricingModel.length) {
        filters.push(inArray(saasTool.pricingModel, filter.pricingModel));
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

export function findSaasToolByName(name: string) {
  return db.query.saasTool.findFirst({
    columns: {
      name: true,
      imageUrl: true,
      websiteUrl: true,
      description: true,
      tags: true,
      pricingModel: true,
    },
    where: (saasTool, { eq, and }) => {
      return and(eq(saasTool.published, true), eq(saasTool.name, name));
    },
  });
}
