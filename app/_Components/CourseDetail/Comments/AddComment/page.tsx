"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { addComment } from '@/lib/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function AddComment({id}:{id:string}) {
    const queryClient =useQueryClient()
    const [content, setContent] = useState('')
    const {mutate, isPending, isError} =useMutation({
        mutationKey:["addComment"],
        mutationFn:addComment,
        onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getComment", id] })
      setContent("")
    },
    })
    
    const handleSubmit = () => {
    const courseId = Number(id)
    if (!content.trim() || Number.isNaN(courseId)) return

    mutate({
      courseId,
      content: content.trim(),
      createdAt: new Date().toISOString().slice(0, 10),
    })
  }
  return (
    <>
    <main >
<section >  
            <Textarea placeholder="Write a comment"
             className="min-h-40 resize-y focus-visible:ring-0
              focus-visible:ring-offset-0 focus-visible:outline-none
               focus-visible:border-input hover:ring-0 my-3 rounded-none
                border-0 bg-white"
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                />

             <Button
        onClick={handleSubmit}
        disabled={isPending || !content.trim()}
        className="flex items-center bg-[#41b79d] p-5"
      >
        {isPending ? "Sending..." : `Add comment `}
        <span>
          <HiArrowNarrowRight />
        </span>
      </Button>
      {isError && (
        <p className="mt-2 text-sm text-red-600">
          Could not add the comment. Try again.
        </p>
      )}
        </section>
    </main>
    
    </>
  )
}
