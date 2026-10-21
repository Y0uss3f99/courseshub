"use client"
import { getCourses } from '@/lib/api'
import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useQuery } from '@tanstack/react-query'
import { GiSkeleton } from 'react-icons/gi'
import { Skeleton } from '@/components/ui/skeleton'
import SinglCard from '../SinglCard/page'




export default function PopularCourses() {

    const { data,isError,isLoading} =useQuery({
        queryKey:["popularCourses"],
        queryFn:getCourses
    })
    console.log(data);
    
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
   <section className='w-[90%] mx-auto my-5'>
    <header className='text-center'>
      <h1 className='font-semibold text-2xl md:text-3xl'> Popular <span className='text-green-700'>Courses</span></h1>
    </header>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl gap-3 ">
     {data?.slice(0, 4)?.map((course) => (
  <div className="" key={course.id}>
    <SinglCard course={course} />
  </div>
))}
 
   
</div>

   </section>
   
   </>
  )
}
