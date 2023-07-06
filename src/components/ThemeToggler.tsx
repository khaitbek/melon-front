"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button, ButtonProps } from "./ui";

export function ThemeToggler({ className }: ButtonProps) {
  const { theme, setTheme } = useTheme();
  return (
    <Button onClick={() => {
      setTheme(theme === "dark" ? "light" : "dark")
    }} className={cn(className)}>
      Change theme
    </Button>
  )
}
