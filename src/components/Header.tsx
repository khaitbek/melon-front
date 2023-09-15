import {
    Logo,
    Navbar,
    SearchBar,
    ThemeToggler,
    buttonVariants,
} from "@/components"
import Link from "next/link"
import { FC } from "react"
import { AdminHeaderSearchInput } from "./routing/AdminSearchInput"

interface AdminHeaderProps {}

export function Header() {
    return (
        <header className="py-11">
            <div className="container mx-auto">
                <div className="flex justify-between items-center gap-6">
                    <div className="flex items-center">
                        <Logo />
                        <SearchBar />
                    </div>
                    <Navbar />
                    <div className="flex items-center gap-6">
                        <Link
                            href="/login"
                            className={buttonVariants({ variant: "outline" })}
                        >
                            Login
                        </Link>
                        <Link
                            href="/sign-up"
                            className={buttonVariants({ variant: "success" })}
                        >
                            Register
                        </Link>
                        <ThemeToggler />
                    </div>
                </div>
            </div>
        </header>
    )
}

export const AdminHeader: FC<AdminHeaderProps> = ({}) => {
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
