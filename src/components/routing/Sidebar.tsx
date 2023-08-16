import { cn } from "@/lib/utils";
import { ComponentProps, FC, ReactElement } from 'react';
import { EduCenterLogo, SubmittedUsersLogo, TeacherLogo, UsersLogo } from "../Icons";
import { Logo } from "../Logo";
import { NavLink } from "../NavLink";
import { ThemeToggler } from "../ThemeToggler";
import { SignOut } from "./Signout";

export interface SidebarProps extends ComponentProps<"aside"> { }
export interface SidebarItem {
  logo: ReactElement,
  name: string;
  href: string;
}
export interface SidebarGroup {
  title: string;
  items: SidebarItem[]
}

export interface SidebarGroupProps {
  items: SidebarGroup[]
}

const sidebarItems: SidebarGroup[] = [
  {
    title: "ADMIN PANEL",
    items: [
      {
        href: "/admin",
        name: "Ustozlar",
        logo: <TeacherLogo />
      },
      {
        href: "/company",
        name: "O'quv markazi",
        logo: <EduCenterLogo />
      }
    ]
  },
  {
    title: "Arizalar",
    items: [
      {
        href: "/users",
        name: "Userlar",
        logo: <UsersLogo />
      },
      {
        href: "/auth-users",
        name: "Tasdiqlangan user",
        logo: <SubmittedUsersLogo />
      }
    ]
  }
]

export const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {

  return (
    <aside className={cn("fixed w-[251px] h-screen border bg-white dark:bg-stone-950", className)} {...props}>
      <div className="h-full flex flex-col justify-between">
        <div className="flex-grow">
          <div className="flex items-center gap-2  py-[18px] px-6 border-b">
            <Logo />
            <span className="flex-grow scroll-m-20 text-base font-extrabold tracking-tight font-inter text-black dark:text-white">
              Project Melon
            </span>
          </div>
          <div className="py-6 px-8">
            <SidebarGroup items={sidebarItems} />
          </div>
        </div>
        <div className="grid gap-5 py-6 pl-8">
          <ThemeToggler />
          <SignOut />
        </div>
      </div>
    </aside>
  )
}

export const SidebarGroup: FC<SidebarGroupProps> = ({ items }) => {
  return (
    <ul className="grid gap-8">
      {items.map(item => (
        <li key={item.title}>
          <SidebarTitle className="mb-4">
            {item.title}
          </SidebarTitle>
          <ul className="grid gap-4">
            {item.items.map(({ name, href, logo }) => (
              // <li key={name} className="flex px-3 gap-3 items-center text-black dark:text-white
              //  rounded-md hover:bg-success">
              //   {logo}
              //   <Link className={cn(buttonVariants({ variant: "link" }), "text-[14px] px-3 py-4 ")} href={href}>
              //     {name}
              //   </Link>
              // </li>
              <NavLink href={href} logo={logo}>
                {name}
              </NavLink>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

const SidebarTitle: FC<ComponentProps<"p">> = ({ children, className, ...props }) => {
  return (
    <p className={cn("#A8A8BD dark:text-[#E5F0FF] text-[10px] uppercase", className)} {...props}>
      {children}
    </p>
  )
}