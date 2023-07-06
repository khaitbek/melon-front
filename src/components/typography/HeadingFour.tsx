import { cn } from "@/lib/utils";
import { forwardRef, type ComponentProps } from "react";

interface HeadingProps extends ComponentProps<"h1"> {
}

const HeadingFour = forwardRef<HTMLHeadingElement, HeadingProps>(({ className, children = "Taxing Laughter: The Joke Tax Chronicles", ...props }, ref) => {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight font-inter text-white lg:text-5xl dark:text-black", className)} ref={ref} {...props}>
      {children}
    </h1>
  )
})

HeadingFour.displayName = "HeadingFour"

export { HeadingFour };

