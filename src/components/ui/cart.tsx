import { Button, HeadingThree } from "@/components";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
interface CardProps extends ComponentProps<"div"> {
  title?: string;
  body?: string;
}

export function Cart({ className, body = "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", title = "Lorem ipsum" }: CardProps) {
  return (
    <div className={cn(" pt-[50px] pb-[78px] px-[69px] max-w-[524px] mx-auto rounded-[16px] bg-stone-100 cursor-pointer transition-colors hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-900", className)}>
      <HeadingThree className="mb-8 text-white text-center text-[38px] leading-[141.156%] text-montserrat">
        {title}
      </HeadingThree>
      <Button className="rounded-full h-[77px] w-[246px] block mx-auto mb-11 text-2xl">Button</Button>
      <p className="text-center text-2xl leading-[141.156%]">
        {body}
      </p>
    </div>
  )
}
