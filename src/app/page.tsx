import { getSaasToolsListing } from "@/database/data";
import { SaasToolList, SaasToolsFilter } from "@/modules/tool";
import { PricingModel } from "@/util/types";

type Props = {
  searchParams: {
    sortOrder?: string;
    pricingModel?: string;
    category?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  let existingPricingModelFilter: PricingModel[] = [];
  let existingCategoryFilter: string[] = [];
  const sortOrder = searchParams.sortOrder ?? "desc";

  if (searchParams.pricingModel) {
    existingPricingModelFilter = searchParams.pricingModel.split(
      ","
    ) as PricingModel[];
  }

  if (searchParams.category) {
    existingCategoryFilter = searchParams.category.split(",");
  }
  console.log("PAGE ", searchParams.sortOrder);

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
        sortOrder={sortOrder}
      />
      <SaasToolList tools={saasTools} />
    </>
  );
}
