import { cn } from "@/lib/utils"
import { ComponentProps, FC } from "react"

interface Props extends ComponentProps<"div"> {}

export const AdminContainer: FC<Props> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div
            className={cn(
                "relative h-[100%] px-9 m-6 mb-16 rounded-xl bg-white dark:bg-stone-950",
                className
            )}
        >
            {children}
        </div>
    )
}
