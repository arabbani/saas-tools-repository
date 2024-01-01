"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

interface SaasToolsSortByProps extends React.HTMLAttributes<HTMLElement> {
  sortOrder?: string;
  handleValueChange: (value: string) => void;
}

export function SaasToolsSortBy({
  sortOrder = "desc",
  handleValueChange,
}: SaasToolsSortByProps) {
  return (
    <Select defaultValue={sortOrder} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="desc">Latest</SelectItem>
        <SelectItem value="asc">Oldest</SelectItem>
      </SelectContent>
    </Select>
  );
}
