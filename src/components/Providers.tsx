"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ComponentProps, useState } from "react"

export default function Providers({ children }: ComponentProps<"div">) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
