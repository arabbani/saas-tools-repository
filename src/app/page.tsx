import { getSaasTools } from "@/database/data";
import { SaasToolList } from "@/modules/tool";

type Props = {
  searchParams: {
    type?: string
  };
};

export default async function Home({searchParams}: Props) {
  const saasTools = await getSaasTools({
    filter: {
      type: searchParams.type
    }
  });
  
  return (
    <main className="py-12 max-w-7xl mx-auto">
      <SaasToolList tools={saasTools} />
    </main>
  );
}
