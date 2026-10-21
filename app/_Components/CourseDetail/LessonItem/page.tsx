"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FaTrophy } from "react-icons/fa";

export default function LeaderBoardCard() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          type="button"
          className="flex items-center gap-2 text-xl text-gray-600 transition-colors hover:text-[#41b79d]"
          aria-label="Open leaderboard"
        >
          <FaTrophy />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] max-w-[380px] overflow-y-auto rounded-xl bg-white p-5">
        <DialogHeader>
          <DialogTitle className="text-center text-sm font-normal text-blue-950">
            Course Name Shown Here
          </DialogTitle>
        </DialogHeader>

        <h2 className="-mt-4 text-center text-sm font-bold text-blue-950">
          Leaderboard
        </h2>

        {/* Motivational Message */}
        <div className="relative mt-3 flex min-h-[80px] items-center gap-3 rounded-md bg-[#f3f8f9] px-3 py-2">
          <div
            dir="rtl"
            className="min-w-0 flex-1 text-right text-xs leading-5 text-blue-900"
          >
            <p>عظيم يا صديقي.. أداؤك في الكورس ده</p>
            <p>أفضل من 80% من باقي الطلبة. كمل عايز</p>
            <p>أشوف اسمك في الليدربورد هنا</p>
          </div>

          <span className="shrink-0 text-4xl">💪</span>

        </div>

        {/* Leaderboard Rows */}
        <div className="mt-5 space-y-5 rounded-[26px] bg-[#f3f8f9] p-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-[57px] w-full rounded-md border border-gray-200 bg-white"
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}