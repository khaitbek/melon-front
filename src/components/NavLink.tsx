"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui";

export interface NavLink {
  href: string;
  title: string;
}
export function NavLink({ href, title }: NavLink) {
  const currentRoute = usePathname();
  const isActiveLink = currentRoute === href;
  console.log(currentRoute, href);
  const linkClasses = isActiveLink ? "text-stone-900 font-bold dark:text-white" : "text-stone-800 font-light dark:font-medium";
  return (
    <Link className={cn(buttonVariants({ variant: "link" }), linkClasses, "text-[26px]")} href={href}>
      {title}
    </Link>
  )
}
