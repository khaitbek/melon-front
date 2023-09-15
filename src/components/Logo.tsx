import { cn } from "@/lib/utils"
import SiteLogo from "@public/logo.svg"
import Image from "next/image"
import Link from "next/link"

export function Logo() {
    return (
        <Link href="/" className={cn("mr-11")}>
            <Image alt="Melon Logo" src={SiteLogo} width={97} height={34} />
        </Link>
    )
}
