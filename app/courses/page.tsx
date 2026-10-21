"use client"  
import React, { useEffect, useState } from 'react'
import { FaDiscourse } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useQuery } from '@tanstack/react-query';
import { getCourses } from '@/lib/api';
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { GiSkeleton } from 'react-icons/gi'
import { Skeleton } from '@/components/ui/skeleton';
import SinglCard from '../_Components/SinglCard/page';




export default function Courses() {

  const [searchInput, setSearchInput] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

const coursesPerPage = 6
  const {data,isError,isLoading} =useQuery({
    queryKey:["courses"],
    queryFn:getCourses
  })
  console.log(data);
  const term = searchTerm.trim().toLowerCase()

  const filteredCourses = term
    ? (data ?? []).filter((course) =>
        `${course.title ?? ""} ${course.description ?? ""}`
          .toLowerCase()
          .includes(term)
      )
    : data ?? []
    const totalPages = Math.ceil(
  filteredCourses.length / coursesPerPage
)
useEffect(() => {
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages)
  }
}, [currentPage, totalPages])

const startIndex = (currentPage - 1) * coursesPerPage

const currentCourses = filteredCourses.slice(
  startIndex,
  startIndex + coursesPerPage
)

 const handleSearch = () => {
  setSearchTerm(searchInput)
  setCurrentPage(1)
}

    if (isLoading) {
    return   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {Array.from({ length: 20 }).map((_, index) => (
      <div
        key={index}
        className="shadow-panel w-62.5 space-y-5 rounded-lg bg-transparent p-4"
      >
         <Card className="w-full max-w-xs">
      <CardHeader>
        <GiSkeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
    </Card>
        </div>

    ))}
  </div>
                      } 
      if (isError) {
  return (
    <div className="flex min-h-100 items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
          <span className="text-2xl">⚠️</span>
        </div>

        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Something went wrong
        </h2>

        <p className="mb-6 text-gray-600">
          We couldn't load the recipes. Please try again.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="rounded-lg bg-red-600 px-6 py-2.5 font-medium text-white transition hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
              } 
  return (
   <>
   <section  >
    <header className='min-h-20 max-h-50 p-9  bg-green-600'>
   <h1 className='flex  items-center text-white  text-5xl '><span className=''><FaDiscourse /></span>All Courses </h1>
   <p className='text-md text-gray-300 my-5 '>showcases an educational program and turns visitors into enrolled students.</p>
   </header>
   <div className="w-[80%] mx-auto my-3">
  <Field orientation="horizontal">
  <Input
    type="search"
    placeholder="Search..."
    onChange={(e) => {
  setSearchInput(e.target.value)

  if (e.target.value === "") {
    setSearchTerm("")
    setCurrentPage(1)
  }
}}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSearch()
      }}
    className="border-green-500 text-green-700  focus-visible:border-green-600 focus-visible:ring-green-500/40"
  />
  <Button onClick={handleSearch} className="bg-green-600 text-white hover:bg-green-700">
    Search
  </Button>
</Field>


   </div>
  
{filteredCourses.length === 0 ? (
  <p className="py-10 text-center text-gray-500">
    No courses found for "{searchTerm}"
  </p>
) : (
  <>
  <p className="px-4 py-4 text-sm text-gray-500">
  Showing {currentCourses.length} of {filteredCourses.length} courses
</p>
    <div className="mx-auto grid w-full grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {currentCourses.map((course) => (
        <SinglCard key={course.id} course={course} />
      ))}
    </div>


    {totalPages > 1 && (
      <div className="my-10 flex flex-wrap items-center justify-center gap-2">

        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage((prev) => prev - 1)
          }
          className="border-green-600 text-green-700 hover:bg-green-50 disabled:opacity-40"
        >
          Previous
        </Button>

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page
                ? "bg-green-600 text-white hover:bg-green-700"
                : "border-green-200 text-green-700 hover:bg-green-50"
            }
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => prev + 1)
          }
          className="border-green-600 text-green-700 hover:bg-green-50 disabled:opacity-40"
        >
          Next
        </Button>

      </div>
    )}

  </>
)}


   </section>
   </>
  )
}
