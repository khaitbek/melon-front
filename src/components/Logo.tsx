import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui";

export function Logo() {
  return (
    <Link href="/" className={buttonVariants({ variant: "link" })}>
      <Image alt="Melon Logo" src="/logo.svg" width={36} height={73} />
    </Link>
  )
}
