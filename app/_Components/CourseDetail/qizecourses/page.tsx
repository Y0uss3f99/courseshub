
"use client";

import { useEffect, useRef, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { IoMdAlarm } from "react-icons/io";
import { HiChevronLeft } from "react-icons/hi";
import { FaRegSquare } from "react-icons/fa";
import { LuSquareDot } from "react-icons/lu";

import { Lesson } from "@/types/course";
import { quizQuestions } from "@/app/data/quizQuestions";

type Props = {
  lesson: Lesson;
  id: string;
};

const QUIZ_SECONDS = 10 * 60;

export default function QizeCourses({ lesson }: Props) {
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUIZ_SECONDS);
  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState<
    Record<number, string>
  >({});

  const [finished, setFinished] = useState(false);

  const endTimeRef = useRef(0);


  const questions = quizQuestions;


  useEffect(() => {
    if (!open) return;

    const timer = setInterval(() => {
      const remaining = Math.max(
        0,
        Math.ceil(
          (endTimeRef.current - Date.now()) / 1000
        )
      );

      setTimeLeft(remaining);

      if (remaining === 0) {
        setOpen(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [open]);


  function handleOpenChange(next: boolean) {
    if (next) {
      endTimeRef.current =
        Date.now() + QUIZ_SECONDS * 1000;

      setTimeLeft(QUIZ_SECONDS);
      setCurrent(0);
      setAnswers({});
      setFinished(false);
    }

    setOpen(next);
  }

  const question = questions[current];

  const isLast = current === questions.length - 1;

  const score = questions.filter(
    (q) => answers[q.id] === q.correctOptionId
  ).length;

  const minutes = String(
    Math.floor(timeLeft / 60)
  ).padStart(2, "0");

  const seconds = String(
    timeLeft % 60
  ).padStart(2, "0");

  return (
    <main>
      <Dialog
        open={open}
        onOpenChange={handleOpenChange}
      >
        <DialogTrigger
          render={
            <span className="inline-flex cursor-pointer items-center gap-1.5 bg-green-50 px-2.5 py-1.5 text-xs font-medium text-green-700">
              {questions.length} Questions
            </span>
          }
        />

        <DialogContent
          showCloseButton={false}
          className="w-[305px] bg-[#3F56B8]"
        >
          <DialogHeader>
            <DialogDescription className="sr-only">
              Lesson quiz
            </DialogDescription>


            <div className="my-2 flex items-center justify-around">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close quiz"
                className="flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
              >
                <HiChevronLeft size={25} />
              </button>

              <span
                className={`text-md mx-auto flex w-[30%] items-center gap-1 rounded-sm p-2 font-mono text-white shadow-md ${
                  timeLeft <= 60
                    ? "bg-red-600 shadow-red-500"
                    : "bg-[#f0d329] shadow-[#ffd900]"
                }`}
              >
                <IoMdAlarm size={18} />
                {minutes}:{seconds}
              </span>
            </div>


            {!finished && question && (
              <div className="flex items-center justify-center gap-2">
                {questions.map((q, index) => (
                  <span
                    key={q.id}
                    className={`flex h-[30px] w-[30px] items-center justify-center rounded-full border text-white ${
                      current === index
                        ? "border-white bg-white/20"
                        : "border-white/50"
                    }`}
                  >
                    {index + 1}
                  </span>
                ))}
              </div>
            )}
          </DialogHeader>


          {finished ? (
            <div className="-mx-4 my-4 flex min-h-[50vh] flex-col items-center justify-center gap-4 bg-white p-3">
              <p className="text-lg font-semibold">
                {score} / {questions.length}
              </p>

              <p className="text-sm text-gray-600">
                Correct answers
              </p>

              <p className="text-sm text-gray-600">
                {Math.round(
                  (score / questions.length) * 100
                )}% Score
              </p>

              <Button
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </div>
          ) : question ? (
            <div className="-mx-4 my-4 min-h-[50vh] overflow-y-auto bg-white p-3">

              <p className="my-3">
                {question.question}
              </p>


              {question.code && (
                <pre className="overflow-x-auto rounded-md bg-gray-900 p-3 text-xs text-gray-100">
                  {question.code}
                </pre>
              )}


              <div className="space-y-3">
                {question.options.map((option) => {
                  const selected =
                    answers[question.id] === option.id;

                  return (
                    <Button
                      key={option.id}
                      onClick={() => {

                        setAnswers((prev) => ({
                          ...prev,
                          [question.id]: option.id,
                        }));


                        if (!isLast) {
                          setCurrent((c) => c + 1);
                        }
                      }}
                      className={`my-1 flex min-h-[52px] w-full items-center justify-start rounded-lg p-0 shadow-xl ${
                        selected
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`flex w-11 shrink-0 items-center justify-center self-stretch border-r ${
                          selected
                            ? "border-white/30"
                            : "border-gray-200"
                        }`}
                      >
                        {selected ? (
                          <LuSquareDot className="size-5 text-white" />
                        ) : (
                          <FaRegSquare className="size-5 text-blue-500" />
                        )}
                      </div>

                      <span className="whitespace-normal px-3 py-3 text-left text-sm">
                        {option.text}
                      </span>
                    </Button>
                  );
                })}
              </div>


              {isLast && (
                <Button
                  className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700"
                  disabled={!answers[question.id]}
                  onClick={() => setFinished(true)}
                >
                  Finish
                </Button>
              )}
            </div>
          ) : (
            <p className="text-center text-white">
              No questions available.
            </p>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
