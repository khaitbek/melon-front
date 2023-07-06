import Image from "next/image"
import { HeadingOne } from "./typography"
import { Button } from "./ui"

export function Hero() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-24">
          <div className="max-w-[730px]">
            <HeadingOne className="text-7xl leading-[150%] tracking-[4.56px] font-laila mb-3">
              Getting
              <span className="text-orange-300 mx-4">
                Quality
                Education
              </span>
              Is Now
              More Easy
            </HeadingOne>
            <div className="flex gap-14">
              <Button variant="orange" size="lg">
                Get Started
              </Button>
              <Button className="pl-[58px] bg-no-repeat bg-video bg-left" variant="ghost">
                Play video
              </Button>
            </div>
          </div>
          <div>
            <Image alt="Getting Quality Education Is Now More Easy" src="/hero-girl.png" width={663} height={581} />
          </div>
        </div>
      </div>
    </section >
  )
}
