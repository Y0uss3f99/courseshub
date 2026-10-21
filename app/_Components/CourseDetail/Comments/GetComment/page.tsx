import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { getComments } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image';
import React from 'react'
import AddComment from '../AddComment/page';



    export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}
export default function CommentsSection({id}:{id:string}) {

   const{data,isLoading,isError,error}= useQuery({
        queryKey:["getComment",id],
        queryFn:()=>getComments(id),
         enabled: !!id,
    })
    console.log("comment",data);
    if(!data?.concat){

    }
    

  return (
  <main
    id="comments"
    className="mt-10 scroll-mt-6"
  >
    <header>
      <h1 className="my-4 text-3xl">Comments</h1>
    </header>

    <section>
      {data && data.length > 0 ? (
        data.map((comment) => (
          <div
            key={comment.id}
            className="mb-4 rounded-xl bg-gray-50 p-4"
          >
            <div className="flex items-center gap-3">
              <Avatar className="size-12">
                <AvatarImage
                  src={
                    comment.user?.avatar ??
                    "https://github.com/shadcn.png"
                  }
                  alt={comment.user?.name ?? "Student"}
                />
                <AvatarFallback>
                  {comment.user?.name?.[0] ?? "S"}
                </AvatarFallback>
              </Avatar>

              <div>
                <h3 className="text-lg font-medium text-gray-700">
                  {comment.user?.name ?? "Student"}
                </h3>

                <p className="text-xs text-gray-500">
                  {formatDate(comment.createdAt)}
                </p>
              </div>
            </div>

            <p className="mt-3 text-gray-700">
              {comment.content}
            </p>

            <Separator className="my-4 bg-gray-200" />
          </div>
        ))
      ) : (
        <p className="py-6 text-center text-gray-500">
          No comments yet. Be the first to comment!
        </p>
      )}
    </section>

    <AddComment id={id} />
  </main>
)
}
