import { PricingModel } from "@/util/types";
import { db } from "../drizzle";

export function getSaasToolsListing({
  filter = {},
  sort = {
    order: "desc",
  },
}: {
  filter?: {
    type?: string;
    pricingModel?: PricingModel | PricingModel[];
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
    where: (saasTool, { like, and, eq, inArray }) => {
      const filters = [eq(saasTool.published, true)];

      if (filter.type) {
        filters.push(like(saasTool.tags, `%${filter.type}%`));
      }

      if (filter.pricingModel) {
        let pricingModelFilter: PricingModel[] = [];

        if (!Array.isArray(filter.pricingModel)) {
          pricingModelFilter = [filter.pricingModel];
        } else {
          pricingModelFilter = filter.pricingModel;
        }
        filters.push(inArray(saasTool.pricingModel, pricingModelFilter));
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
