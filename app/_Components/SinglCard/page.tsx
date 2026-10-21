import { Course } from '@/types/course'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosTimer } from 'react-icons/io'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { SiLevelsdotfyi } from 'react-icons/si'

export default function SinglCard({course}:{course:Course}) {  
  return (
    <>
     <Link href={`/courses/${course.id}`} className="block">
      <div
      key={course.id}
      className="overflow-hidden my-7 rounded-2xl bg-gray-100 shadow-sm transition-shadow hover:shadow-lg"
    >
      <Image
        width={600}
        height={300}
        src={course.thumbnail}
        alt={course.title}
        loading="lazy"
        className="h-60 w-full object-cover"
      />

      <div className="p-3">
        <h3 className="truncate text-sm font-semibold text-green-700">
          {course.title}
        </h3>

        <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <IoIosTimer />
            {course.duration} 
          </span>

          <span className="flex items-center gap-1">
            <SiLevelsdotfyi />
            {course.level}
          </span>
        </div>

        <span className="mt-2 flex items-center gap-1 text-sm">
          <MdOutlineStarPurple500 className='text-yellow-500 ' />
          {course.rating}
        </span>
      </div>
    </div>
     </Link>
   
    </>
  )
}
