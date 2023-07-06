import { cn } from "@/lib/utils";
import { forwardRef, type ComponentProps } from "react"

interface HeadingProps extends ComponentProps<"h1"> {
}

const HeadingTwo = forwardRef<HTMLHeadingElement, HeadingProps>(({ className, children = "Taxing Laughter: The Joke Tax Chronicles", ...props }, ref) => {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight font-inter lg:text-5xl", className)} ref={ref} {...props}>
      {children}
    </h1>
  )
})

HeadingTwo.displayName = "HeadingTwo"

export { HeadingTwo }
