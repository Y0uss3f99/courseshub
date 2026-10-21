"use client"

import CommentsSection from "@/app/_Components/CourseDetail/Comments/GetComment/page"
import CourseVideo from "@/app/_Components/CourseDetail/CourseVideo/page"
import Curriculm from "@/app/_Components/CourseDetail/Curriculm/page"
import Materials from "@/app/_Components/CourseDetail/Materials/page"
import VideoProgress from "@/app/_Components/CourseDetail/VideoProgress/pagr"
import Week from "@/app/_Components/CourseDetail/WeekCard/page"

import { Button, buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { getCourse } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
import { HiChevronRight } from "react-icons/hi"

export default function CourseId() {
  const { id } = useParams<{ id: string }>()
  const [progress, setProgress] = useState(0)

  const { data , isPending, isError, error, refetch } = useQuery({
    queryKey: ["courseDetail", id],
    queryFn: () => getCourse(id),
    enabled: !!id,
  })

  if (isPending) {
    return (
      <main className="mx-auto max-w-4xl space-y-6 p-6">
        <Skeleton className="h-9 w-2/3" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        <Skeleton className="aspect-video w-full rounded-xl" />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>

        <div className="space-y-4">
          <Skeleton className="h-7 w-40" />
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="size-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          ))}
        </div>
      </main>
    )
  }

  if (isError) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-red-100">
            <span className="text-2xl">⚠️</span>
          </div>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Something went wrong
          </h2>

          <p className="mb-6 text-gray-600">
            {error.message || "We couldn't load this course. Please try again."}
          </p>

          <div className="flex justify-center gap-3">
            <Button
              onClick={() => refetch()}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Try Again
            </Button>
            <Link
              href="/courses"
              className={buttonVariants({ variant: "outline" })}
            >
              Back to courses
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section>

        <header className="mx-auto w-[94%] rounded-b-lg bg-[#f5f9fa] p-4 sm:w-[92%] sm:p-5 lg:w-[90%]">
          <nav className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <Link href="/home" className="hover:text-green-700">
              Home
            </Link>
            <HiChevronRight className="shrink-0" />
            <Link href="/courses" className="hover:text-green-700">
              Courses
            </Link>
            <HiChevronRight className="shrink-0" />
            <span className="text-gray-900">Course Detail</span>
          </nav>

          <h1 className="mt-3 wrap-break-word text-2xl font-semibold text-gray-900 sm:text-3xl">
            {data.title}
          </h1>
        </header>


        <div className="mx-auto grid w-[94%] grid-cols-1 items-start gap-y-5 pb-10 sm:w-[92%] md:grid-cols-2 md:gap-6 lg:w-[90%] lg:grid-cols-7 lg:gap-x-8">

<div className="contents lg:col-span-4 lg:flex lg:min-w-0 lg:flex-col lg:gap-4">
            {/* 1. Video */}
          <div className="sticky top-0 z-40 order-1 mx-[-3.3%] min-w-0 bg-gray-50 p-0 md:static md:mx-0 md:col-span-2">
  <CourseVideo
    data={data}
    courseId={id}
    onProgressChange={setProgress}
  />
</div>

            {/* 3. Curriculum / Topics */}
            <div className="order-3 min-w-0 md:col-span-2">
              <Curriculm id={id} />
            </div>

            {/* 4. Materials */}
            <div className="order-4 min-w-0">
              <Materials data={data} />
            </div>

            {/* 6. Comments */}
            <div className="order-6 min-w-0 md:col-span-2">
              <CommentsSection id={id} />
            </div>
          </div>


          <div className="contents lg:col-span-3 lg:flex lg:min-w-0 lg:flex-col lg:gap-4 lg:px-2">

            <div className="order-2 min-w-0 md:col-span-2">
              <VideoProgress progress={progress} />
            </div>


            <div className="order-5 min-w-0">
              <Week data={data} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}