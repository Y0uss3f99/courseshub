"use client"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"

type Slide = {
  image: string
  title: string
  description: string
}

type SliderProps = {
  slides: Slide[]
}

export function Slider({ slides }: SliderProps) {
  const autoplay = Autoplay({
    delay: 4000,
    stopOnInteraction: false,
  })

  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
      plugins={[autoplay]}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="basis-full">
            <div
              className="relative h-125 w-full bg-cover bg-center"
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            >

              <div className="absolute inset-0 bg-black/40" />


              <div className="relative z-10 flex h-full items-center px-10 md:px-20">
                <div className="max-w-xl text-white">

                  <h1 className="text-4xl font-bold md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-lg text-gray-200">
                    {slide.description}
                  </p>

                  <Link href={"/courses"}>
                  <Button className="mt-6 hover:bg-green-600 cursor-pointer text-xl bg-green-500">
                    Let's Learn
                  </Button></Link>

                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}