
import {
  HiOutlineDocumentText,
  HiOutlineLockClosed,
} from "react-icons/hi"
import type { Course, Lesson } from "@/types/course"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import QizeCourses from "../qizecourses/page"
type Props = {
  data: Course;
};

  export default function Week({ data }: Props) {
  return (
    <div className="w-[80%] mx-auto space-y-5  sm:space-y-6">
      {data.weeks.map((week, ) => (
        <section
          key={week.id}
          className="min-w-0 min-h-100 p-4 overflow-hidden  border border-gray-200 bg-white   duration-200 "
        >

          <div className=" px-4 py-4 sm:px-6 sm:py-5 md:px-7">  
              <div className="min-w-0 flex-1">
               

                <h2 className="wrap-break-words text-lg  leading-snug  sm:text-xl">
                  {week.title}
                </h2>
     <Separator className="my-4 bg-gray-200" />


                {week.description && (
                  <p className="mt-2 wrap-break-words text-sm leading-6 text-gray-500 sm:text-base">
                    {week.description}
                  </p>
                )}
              </div>
            </div>



          <ul className="divide-y divide-gray-100 px-4 sm:px-6 md:px-7">
            {week.lessons.map((lesson, lessonIndex) => {
              const unlocked = lesson.completed

              return (
                <li
                  key={lesson.id}
                  className="flex min-w-0 flex-col gap-3 py-4 sm:py-5 md:flex-row md:items-center md:justify-between md:gap-5"
                >

                  <div className="flex min-w-0 items-start gap-3">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                      <HiOutlineDocumentText className="size-4" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="wrap-break-words text-xs leading-6 text-gray-500 ">
                        {lesson.title}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Lesson {lessonIndex + 1}
                      </p>
                    </div>
                  </div>


                  {unlocked ? (
                    <div className="flex flex-wrap items-center gap-2 pl-11 md:shrink-0 md:pl-0">
                    <QizeCourses lesson={lesson} id={String(data.id)} />
                      

                      <span className="inline-flex  items-center rounded-md bg-red-50 px-2.5 py-1.5 text-xs font-medium text-red-500">
                        {lesson.duration.replace(
                          /min(?:utes?)?/i,
                          "minutes"
                        )}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 pl-11 md:shrink-0 md:pl-0">
                      <HiOutlineLockClosed className="size-4 shrink-0 text-gray-400" />
                      <span className="text-xs font-medium text-gray-400">
                        Locked
                      </span>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}
