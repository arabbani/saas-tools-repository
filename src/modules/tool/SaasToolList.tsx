import { SaasTool } from "@/database/schema";
import { SaasToolCard } from "./SaasToolCard";

export function SaasToolList({ tools }: { tools: SaasTool[] }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {tools?.map((tool) => (
        <SaasToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
