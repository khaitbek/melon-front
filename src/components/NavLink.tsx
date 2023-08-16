"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, FC } from "react";
import { Url } from "url";
import { SidebarItem } from "./routing/Sidebar";
import { buttonVariants } from "./ui";

interface NavLinkProps extends Omit<ComponentProps<"a">, "href" | "ref">, Partial<Omit<SidebarItem, "href">> {
  href: Url | string | undefined
  active?: ComponentProps<"a">["className"]
}

export const NavLink: FC<NavLinkProps> = ({ className, href, children, logo, active = "", ...props }) => {
  const pathName = usePathname();
  const ActiveLink = (
    <li key={crypto.randomUUID()} className={cn("flex px-3 gap-3 items-center rounded-md bg-success  text-white", active)}>
      {logo}
      <Link className={cn(buttonVariants({ variant: "link" }), "text-[14px] px-3 py-4 text-white", className)} href={href as Url} {...props}>
        {children}
      </Link>
    </li>
  )
  const defaultLink = (
    <li key={crypto.randomUUID()} className="flex px-3 gap-3 items-center text-black dark:text-white rounded-md hover:bg-success hover:text-white">
      {logo}
      <Link className={cn(buttonVariants({ variant: "link" }), "text-[14px] px-3 py-4 hover:text-white", className)} href={href as Url} {...props}>
        {children}
      </Link>
    </li>
  )
  const Comp = pathName === String(href) ? ActiveLink : defaultLink;
  console.log(pathName, href, String(href));
  return Comp;
}