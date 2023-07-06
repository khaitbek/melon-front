
'use client'

import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from "react"

export function MainThemeProvider({ children }: PropsWithChildren) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}