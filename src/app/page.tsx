import { SaasToolsSortBy } from "@/client-components";
import { getSaasToolsListing } from "@/database/data";
import { SaasToolList, SaasToolsFilter } from "@/modules/tool";
import { PricingModel } from "@/util/types";

type Props = {
  searchParams: {
    type?: string;
    sort?: string;
    pricingModel?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  let sortOrder = "desc";

  if (searchParams.sort === "craeted-date-asc") {
    sortOrder = "asc";
  }

  let existingPricingModelFilter: PricingModel[] = [];

  if (searchParams.pricingModel) {
    existingPricingModelFilter = searchParams.pricingModel.split(',') as PricingModel[];
  }

  const saasTools = await getSaasToolsListing({
    filter: {
      type: searchParams.type,
      pricingModel: existingPricingModelFilter,
    },
    sort: {
      order: sortOrder,
    },
  });

  return (
    <>
      <SaasToolsFilter existingPricingModelFilter={existingPricingModelFilter} />
      <div className="mb-4 flex justify-end">
        <SaasToolsSortBy sortBy={searchParams.sort} />
      </div>
      <SaasToolList tools={saasTools} />
    </>
  );
}
