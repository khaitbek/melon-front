"use client";

import { useRouter } from "next/navigation";
import { FC } from 'react';
import { Url } from "url";
import { BackLogo } from "./Icons";
import { Button, ButtonProps } from "./ui";

interface BackProps extends Omit<ButtonProps, "ref"> {
  backUrl?: string | Url | undefined;
}

export const Back: FC<BackProps> = ({ backUrl, className, ...props }) => {
  const router = useRouter();
  const handleClick = () => backUrl ? router.push(backUrl as string) : router.back();
  return (
    <Button className="p-0 text-black dark:text-white bg-transparent hover:bg-transparent active:bg-transparent" onClick={handleClick} {...props}>
      <BackLogo />
    </Button>
  )
}