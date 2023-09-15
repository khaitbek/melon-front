import { cn } from "@/lib/utils"
import { ComponentProps, FC } from "react"

export const Paragraph: FC<ComponentProps<"p">> = (props) => {
    return (
        <p
            className={cn(
                "leading-7 text-paragraph [&:not(:first-child)]:mt-6",
                props.className
            )}
            {...props}
        />
    )
}
