import { AdminInput, Button, Logo, Navbar, SearchBar, ThemeToggler } from "@/components";
import { ComponentProps, FC } from "react";
import { AdminHeaderSearchInput } from "./routing/AdminSearchInput";

interface AdminHeaderProps {

}

export function Header() {
  return (
    <header className="py-11">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-6">
          <div className="flex gap-16 items-center">
            <Logo />
            <SearchBar />
          </div>
          <Navbar />
          <div className="flex items-center gap-6">
            <Button variant="outline">
              Login
            </Button>
            <Button variant="orange">
              Register
            </Button>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  )
}

export const AdminHeader: FC<AdminHeaderProps> = ({ }) => {
  return (
    <header className="py-6 px-10 bg-white dark:bg-stone-950">
      <div className="container">
        <div className="flex justify-between items-center gap-6">
          <AdminHeaderSearchInput />
        </div>
      </div>
    </header>
  )
}

