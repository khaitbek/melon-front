"use client";

import { Input } from "@/components";

export function SearchBar() {
  return (
    <Input name="query" placeholder="Search" className="px-6 py-3 max-w-[350px] rounded-full" />
  )
}
