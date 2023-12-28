import { SaasToolsSortBy } from "@/client-components";
import { getSaasTools } from "@/database/data";
import { SaasToolList } from "@/modules/tool";

type Props = {
  searchParams: {
    type?: string;
    sort?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  let sortOrder = "desc";

  if (searchParams.sort === "craeted-date-asc") {
    sortOrder = "asc";
  }

  const saasTools = await getSaasTools({
    filter: {
      type: searchParams.type,
    },
    sort: {
      order: sortOrder,
    },
  });

  return (
    <main className="py-12 max-w-7xl mx-2 md:mx-3 xl:mx-auto">
      <div className="mb-4 flex justify-end">
        <SaasToolsSortBy />
      </div>
      <SaasToolList tools={saasTools} />
    </main>
  );
}
