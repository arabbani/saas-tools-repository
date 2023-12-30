import { SaasToolsSortBy } from "@/client-components";
import { getSaasToolsListing } from "@/database/data";
import { SaasToolList, SaasToolsFilter } from "@/modules/tool";
import { PricingModel } from "@/util/types";

type Props = {
  searchParams: {
    sort?: string;
    pricingModel?: string;
    category?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  let sortOrder = "desc";

  if (searchParams.sort === "craeted-date-asc") {
    sortOrder = "asc";
  }

  let existingPricingModelFilter: PricingModel[] = [];
  let existingCategoryFilter: string[] = [];

  if (searchParams.pricingModel) {
    existingPricingModelFilter = searchParams.pricingModel.split(
      ","
    ) as PricingModel[];
  }

  if (searchParams.category) {
    existingCategoryFilter = searchParams.category.split(",");
  }

  const saasTools = await getSaasToolsListing({
    filter: {
      pricingModel: existingPricingModelFilter,
      category: existingCategoryFilter,
    },
    sort: {
      order: sortOrder,
    },
  });

  return (
    <>
      <SaasToolsFilter
        existingPricingModelFilter={existingPricingModelFilter}
        existingCategoryFilter={existingCategoryFilter}
      />
      <div className="my-4 flex justify-end">
        <SaasToolsSortBy sortBy={searchParams.sort} />
      </div>
      <SaasToolList tools={saasTools} />
    </>
  );
}
