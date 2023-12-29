import { SaasToolsFilter, SaasToolsSortBy } from "@/client-components";
import { getSaasToolsListing } from "@/database/data";
import { SaasToolList } from "@/modules/tool";
import { PricingModel } from "@/util/types";

type Props = {
  searchParams: {
    type?: string;
    sort?: string;
    pricingModel?: PricingModel | PricingModel[];
  };
};

export default async function Home({ searchParams }: Props) {
  let sortOrder = "desc";

  if (searchParams.sort === "craeted-date-asc") {
    sortOrder = "asc";
  }

  const saasTools = await getSaasToolsListing({
    filter: {
      type: searchParams.type,
      pricingModel: searchParams.pricingModel,
    },
    sort: {
      order: sortOrder,
    },
  });
  
  return (
    <>
      <SaasToolsFilter pricingModelFilter={searchParams.pricingModel} />
      <div className="mb-4 flex justify-end">
        <SaasToolsSortBy sortBy={searchParams.sort} />
      </div>
      <SaasToolList tools={saasTools} />
    </>
  );
}
