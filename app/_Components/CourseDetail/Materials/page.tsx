import React from 'react'
import {
  Table,
  TableBody,
  TableCell,

  TableRow,
} from "@/components/ui/table"
import { CiClock2 } from 'react-icons/ci'
import { Course } from '@/types/course'
import { TbBooks, TbWorld } from 'react-icons/tb';
import { GiRead } from 'react-icons/gi';



export default function Materials({data}:{data:Course}) {
    console.log(data);
   
  return (
        <>
        
   <main>
    <section className=' '>
        <header className='my-2'>
            <h1 className='text-xl md:text-2xl lg:text-3xl '>Course Materials</h1>
        </header>

         <div className=" bg-white   md:p-2 my-4  shadow-xs shadow-gray-400 rounded-sm gap-2 ">
          <div className="  grid grid-cols-1 md:grid-cols-2  gap-x-5 gap-y-2">
           <Table className=''>
     
      <TableBody key={data.id} className='p-3'>
        
          <TableRow  >
            <TableCell className="text-gray-500 font-medium flex items-center pr-10 p-4 "><span className='mx-1'><CiClock2 /></span>Duration:</TableCell>
            <TableCell>{data.duration}</TableCell>
          </TableRow>
           <TableRow >
            <TableCell className="text-gray-500 font-medium flex items-center pr-10 p-4 "><span className='mx-1'><TbBooks /></span>Lessons:</TableCell>
            <TableCell>{data.lessonsCount}</TableCell>
          </TableRow>
           <TableRow >
            <TableCell className="text-gray-500 font-medium flex items-center pr-10 p-4 "><span className='mx-1 '><GiRead  /></span>Enrolled:</TableCell>
            <TableCell>{data.enrolledStudents}</TableCell>
          </TableRow>
          <TableRow >
            <TableCell className="text-gray-500 font-medium flex items-center pr-10 p-4 "><span className='mx-1 '><TbWorld  /></span>Language:</TableCell>
            <TableCell>{data.language}</TableCell>
          </TableRow>

      </TableBody>
      
      
    </Table>
     <Table className=''>
     
      <TableBody key={data.id} className='p-3'>
        
          <TableRow  >
            <TableCell className="text-gray-500 font-medium flex items-center pr-10 p-4 "><span className='mx-1'><CiClock2 /></span>Duration:</TableCell>
            <TableCell>{data.duration}</TableCell>
          </TableRow>
           <TableRow >
            <TableCell className="text-gray-500 font-medium flex items-center pr-10 p-4 "><span className='mx-1'><TbBooks /></span>Lessons:</TableCell>
            <TableCell>{data.lessonsCount}</TableCell>
          </TableRow>
           <TableRow >
            <TableCell className="text-gray-500 font-medium flex items-center pr-10 p-4 "><span className='mx-1 '><GiRead  /></span>Enrolled:</TableCell>
            <TableCell>{data.enrolledStudents}</TableCell>
          </TableRow>
          <TableRow >
            <TableCell className="text-gray-500 font-medium flex items-center pr-10 p-4 "><span className='mx-1 '><TbWorld  /></span>Language:</TableCell>
            <TableCell>{data.language}</TableCell>
          </TableRow>

      </TableBody>
      
      
    </Table>
      </div>
    </div>
    </section>
   </main>
        
        </>
  )
}
