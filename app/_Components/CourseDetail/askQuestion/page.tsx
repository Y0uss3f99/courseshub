"use client"

import { useEffect, useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { FaQuestionCircle, FaRegQuestionCircle, FaPaperPlane } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { addQuestion, getQuestions } from "@/lib/api"



const questionsKey = (id: string) => ["getQuestions", id]
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}
export default function QuestionSection({ id }: { id: string }) {
  const queryClient = useQueryClient()

  const [open, setOpen] = useState(false)
  const [content, setContent] = useState("")
  const [isDraftLoaded, setIsDraftLoaded] = useState(false)

  const storageKey = `question-draft-${id}`

  const {
    data: questions,
    isLoading,
    isError: questionsError,
  } = useQuery({
    queryKey: questionsKey(id),
    queryFn: () => getQuestions(id),
    enabled: !!id && open,
  })


  useEffect(() => {
    setIsDraftLoaded(false)
    setContent(sessionStorage.getItem(storageKey) ?? "")
    setIsDraftLoaded(true)
  }, [storageKey])


  useEffect(() => {
    if (!isDraftLoaded) return

    if (content.trim()) {
      sessionStorage.setItem(storageKey, content)
    } else {
      sessionStorage.removeItem(storageKey)
    }
  }, [content, storageKey, isDraftLoaded])

  const {
    mutate,
    isPending,
    isError: submitError,
  } = useMutation({
    mutationKey: ["addQuestion", id],
    mutationFn: addQuestion,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: questionsKey(id) })

      sessionStorage.removeItem(storageKey)
      setContent("")
    },
  })

  function handleSubmit() {
    const courseId = Number(id)
    const trimmedContent = content.trim()

    if (!trimmedContent || !Number.isFinite(courseId) || isPending) return

    mutate({
      courseId,
      content: trimmedContent,
      createdAt: new Date().toISOString().slice(0, 10),
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger
        aria-label="Questions"
        title="Questions"
        className="transition-colors hover:text-[#41b79d]"
      >
        <FaQuestionCircle />
      </DialogTrigger>

      <DialogContent className="flex max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl flex-col gap-0 overflow-hidden rounded-2xl bg-white p-0">
        <DialogHeader className="border-b p-5 sm:p-6">
          <DialogTitle className="flex items-center gap-3 text-xl">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#e8f7f3] text-[#41b79d]">
              <FaRegQuestionCircle className="size-6" />
            </span>
            Course Questions
          </DialogTitle>

          <DialogDescription>
            Read previous questions or ask something new.
          </DialogDescription>
        </DialogHeader>


        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
          <h3 className="mb-4 text-2xl font-bold">Questions</h3>

          {isLoading ? (
            <p className="py-8 text-center text-sm text-gray-500">
              Loading questions...
            </p>
          ) : questionsError ? (
            <p className="py-8 text-center text-sm text-red-600">
              Could not load questions. Please try again.
            </p>
          ) : questions && questions.length > 0 ? (
            questions.map((question) => (
              <div key={question.id} className="mb-4 rounded-xl bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src={"https://github.com/shadcn.png"}
                      alt={"Student"}
                    />
                    <AvatarFallback>
                      {"S"}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h4 className="text-lg font-medium text-gray-700">
                      {"Student"}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {formatDate(question.createdAt)}
                    </p>
                  </div>
                </div>

                <p className="mt-3 whitespace-pre-wrap wrap-break-words text-gray-700">
                  {question.content}
                </p>
              </div>
            ))
          ) : (
            <p className="py-6 text-center text-gray-500">
              No questions yet. Be the first to ask!
            </p>
          )}
        </div>


        <div className="border-t bg-white p-5 sm:p-6">
          <Textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Write your question here..."
            className="min-h-24 resize-y rounded-xl border-gray-200 bg-gray-50 focus-visible:border-[#41b79d] focus-visible:ring-[#41b79d]/20"
          />

          {submitError && (
            <p className="mt-2 text-sm text-red-600">
              Could not send your question. Your draft is saved. Please try again.
            </p>
          )}

          <div className="mt-3 flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={isPending || !content.trim()}
              className="gap-2 bg-[#41b79d] hover:bg-[#35a78e]"
            >
              {isPending ? "Sending..." : "Submit Question"}
              <FaPaperPlane className="size-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}