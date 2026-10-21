"use client"
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  FiTarget,
  FiBookOpen,
  FiCode,
} from "react-icons/fi";
import { AiFillRocket } from 'react-icons/ai';
import PopularCourses from '../PopularCourses/page';





const invoices = [
  {
    Category: "HTML & CSS",
    Description: "Learn how to structure and design modern, responsive websites.",
  },
  {
    Category: "JavaScript",
    Description: "Understand programming fundamentals and make your websites interactive.",
  },
   {
    Category: "React.js",
    Description: "Build modern, reusable user interfaces with React.",
  },
  {
    Category: "Next.js",
    Description: "Learn how to build fast, scalable, production-ready web applications.",
  },
  {
    Category: "UI & UX",
    Description: "Learn how to create clean, accessible, and user-friendly interfaces.",
  },
  {
    Category: " Real Projects",
    Description: "Apply what you learn by building real-world projects..",
  },
 
]
export default function HomeDetail() {
  return (
    <>
    <section className='my-5 w-[90%] mx-auto'>
        <header>
          <h1 className='font-semibold text-2xl md:text-3xl'>  What Will <span className='text-green-700'>You Learn?</span></h1>
          <p className='text-gray-500 text-md'>Build the skills you need to become a confident web developer,<span className='block'> from the fundamentals to modern technologies.</span></p>
        </header>
        <div className="w-[90%] mx-auto my-4">

             <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-130 text-green-700">Category</TableHead>

          <TableHead className='text-green-700'>Description</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.Category}>
            <TableCell className="font-medium">{invoice.Category}</TableCell>
            <TableCell>{invoice.Description}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
        </div>
    </section>


    <section className='my-8  w-[90%] mx-auto  text-center'>
      <header>
        <h1 className='text-2xl md:text-3xl font-semibold'>What Makes <span className='text-green-700'>CourseHub Different?</span></h1>
        <p className='text-gray-500'>More than watching tutorials. CourseHub helps you learn by building, practicing <span>, and applying your skills</span></p>
      </header>
      <div className=" my-10 ">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">


    <div className="flex h-full min-h-45 flex-col rounded-2xl bg-green-100/50 p-5">
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <span className="text-2xl text-green-900">
          <FiTarget />
        </span>
        Practical Learning
      </h2>

      <p className="mt-4 text-sm leading-6 text-gray-700">
        Don't just watch tutorials. Practice what you learn through coding
        exercises and hands-on activities.
      </p>
    </div>


    <div className="flex h-full min-h-45 flex-col rounded-2xl bg-green-100/50 p-5">
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <span className="text-2xl text-green-900">
          <FiBookOpen />
        </span>
        Structured Courses
      </h2>

      <p className="mt-4 text-sm leading-6 text-gray-700">
        Follow a clear learning path designed to take you from beginner to
        confident developer.
      </p>
    </div>


    <div className="flex h-full min-h-45 flex-col rounded-2xl bg-green-100/50 p-5">
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <span className="text-2xl text-green-900">
          <FiCode />
        </span>
        Real-World Projects
      </h2>

      <p className="mt-4 text-sm leading-6 text-gray-700">
        Build practical projects that help you apply your knowledge and
        strengthen your portfolio.
      </p>
    </div>


    <div className="flex h-full min-h-45 flex-col  rounded-2xl bg-green-100/50 p-5">
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <span className="text-2xl text-green-900">
          <AiFillRocket />
        </span>
        Learn at Your Own Pace
      </h2>

      <p className="mt-4 text-sm leading-6 text-gray-700">
        Study whenever you want and progress through your learning journey at
        your own speed.
      </p>
    </div>

  </div>
</div>
    </section>

  <PopularCourses/>
    
    </>
  )
}
