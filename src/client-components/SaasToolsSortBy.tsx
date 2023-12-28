"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui";
import { useRouter, useSearchParams } from "next/navigation";

export function SaasToolsSortBy() {
  const params = useSearchParams();
  const router = useRouter();

  const updateRoute = (value: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("sort", value);
    router.push(`/?${newParams.toString()}`);
  };

  return (
    <Select defaultValue="craeted-date-desc" onValueChange={updateRoute}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="craeted-date-desc">Newest</SelectItem>
        <SelectItem value="craeted-date-asc">Oldest</SelectItem>
      </SelectContent>
    </Select>
  );
}
