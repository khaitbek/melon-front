import { cn } from "@/lib/utils";
import { forwardRef, type ComponentProps } from "react";

interface HeadingProps extends ComponentProps<"h1"> {
}

const HeadingThree = forwardRef<HTMLHeadingElement, HeadingProps>(({ className, children = "Taxing Laughter: The Joke Tax Chronicles", ...props }, ref) => {
  return (
    <h3 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight font-inter",className)} ref={ref} {...props}>
      {children}
    </h3>
  )
})

HeadingThree.displayName = "HeadingThree"

export { HeadingThree };

