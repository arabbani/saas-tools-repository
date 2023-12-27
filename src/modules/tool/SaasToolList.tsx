import { SaasToolCard } from "@/components/shared";
import { Tool } from "@prisma/client";

export function SaasToolList({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {tools?.map(tool => <SaasToolCard key={tool.id} tool={tool} />)}
    </div>
  );
}
