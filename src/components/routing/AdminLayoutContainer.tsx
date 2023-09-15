import { cn } from "@/lib/utils"
import { ComponentProps, FC } from "react"
import { Back } from "../Back"
import { HeadingTwo } from "../typography"

interface Props extends ComponentProps<"div"> {
    title: string
}

export const AdminLayoutContainer: FC<Props> = (props) => {
    return (
        <div className={cn("py-6 px-9", props.className)}>
            <div className="flex gap-6">
                <Back />
                <HeadingTwo>{props.title}</HeadingTwo>
            </div>
            {props.children}
        </div>
    )
}
