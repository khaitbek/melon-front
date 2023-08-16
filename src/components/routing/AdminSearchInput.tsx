"use client";
import { ComponentProps, FC } from "react";
import { AdminInput } from "../ui";

export const AdminHeaderSearchInput: FC<ComponentProps<"input">> = ({ }) => {
  return (
    <AdminInput className="max-w-[432px] dark:bg-black" placeholder="User, ustoz..." />
  )
}