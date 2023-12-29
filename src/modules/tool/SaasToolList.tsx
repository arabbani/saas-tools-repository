import { TypeSaasToolForCard } from "@/util/types";
import { SaasToolCard } from "./SaasToolCard";

interface SaasToolListProps extends React.HTMLAttributes<HTMLElement> {
  tools: TypeSaasToolForCard[];
}

export function SaasToolList({ tools }: SaasToolListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-3 lg:gap-6">
      {tools?.map((tool) => (
        <SaasToolCard key={tool.name} tool={tool} />
      ))}
    </div>
  );
}
