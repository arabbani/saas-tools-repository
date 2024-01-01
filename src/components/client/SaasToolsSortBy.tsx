"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { useRouter, useSearchParams } from "next/navigation";

interface SaasToolsSortByProps extends React.HTMLAttributes<HTMLElement> {
  sortBy?: string;
}

export function SaasToolsSortBy({
  sortBy = "craeted-date-desc",
}: SaasToolsSortByProps) {
  const params = useSearchParams();
  const router = useRouter();

  const updateRoute = (value: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("sort", value);
    router.push(`/?${newParams.toString()}`);
  };

  return (
    <Select defaultValue={sortBy} onValueChange={updateRoute}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="craeted-date-desc">Latest</SelectItem>
        <SelectItem value="craeted-date-asc">Oldest</SelectItem>
      </SelectContent>
    </Select>
  );
}
