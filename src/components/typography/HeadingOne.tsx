import { cn } from "@/lib/utils";
import { forwardRef, type ComponentProps } from "react"

interface HeadingProps extends ComponentProps<"h1"> {
}

const HeadingOne = forwardRef<HTMLHeadingElement, HeadingProps>(({ className, children = "Taxing Laughter: The Joke Tax Chronicles", ...props }, ref) => {
  return (
      <h1
          className={cn(
              "scroll-m-20 text-4xl font-extrabold tracking-tight text-success dark:text-white  font-inter",
              className
          )}
          ref={ref}
          {...props}
      >
          {children}
      </h1>
  )
})

HeadingOne.displayName = "HeadingOne"

export { HeadingOne }
