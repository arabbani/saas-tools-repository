import { getSaasTools } from "@/database/data";
import { SaasToolList } from "@/modules/tool";

export default async function Home() {
  const saasTools = await getSaasTools();
  
  return (
    <main className="py-12 max-w-7xl mx-auto">
      <SaasToolList tools={saasTools} />
    </main>
  );
}
