"use client";
import { useTheme } from "next-themes";
import { MoonLogo } from "./Icons";
import { ButtonProps } from "./ui";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export function ThemeToggler({ className }: ButtonProps) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-5 items-center">
      <MoonLogo />
      <div className="flex items-center gap-2">
        <Label className="text-[14px]" htmlFor="theme">Qorong'i rejim</Label>

        <Switch onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }} className="max-w-[45px]" id="theme" />
      </div>
    </div>
  )
}
