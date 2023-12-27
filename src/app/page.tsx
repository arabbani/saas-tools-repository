import { getSaasTools } from "@/data/tool";
import { SaasToolList } from "@/modules/tool";

export default async function Home() {
  const tools = await getSaasTools();

  return (
    <main className="py-12 max-w-7xl mx-auto">
      <SaasToolList tools={tools} />
    </main>
  );
}
