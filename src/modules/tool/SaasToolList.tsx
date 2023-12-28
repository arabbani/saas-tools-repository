import { SaasToolCard } from "./SaasToolCard";
import { TypeSaasToolForCard } from "./utility-types";

type Props = {
  tools: TypeSaasToolForCard[]
}

export function SaasToolList({ tools }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-3 lg:gap-6">
      {tools?.map((tool) => (
        <SaasToolCard key={tool.name} tool={tool} />
      ))}
    </div>
  );
}
