"use client"

import { useEffect, useRef, useState } from "react"
import YouTube, { type YouTubeEvent, type YouTubePlayer } from "react-youtube"
import { useMutation } from "@tanstack/react-query"
import { saveProgress } from "@/lib/api"
import type { LessonProgress } from "@/types/progress"

const USER_ID = "user1"

type PlayerProps = {  
  videoId: string
  progressId: string
  courseId: string
  lessonId: string
  saved: LessonProgress | null
  onProgressChange?: (progress: number) => void
}

export default function VideoPlayer({
  videoId,
  progressId,
  courseId,
  lessonId,
  saved,
  onProgressChange,
}: PlayerProps) {
  const playerRef = useRef<YouTubePlayer | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const [progress, setProgress] = useState(saved?.percentage ?? 0)

  // created once, so a refetch can never restart the video
  const [opts] = useState(() => ({
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      rel: 0,
      // resume where the student stopped (start over if they finished)
      start: saved && saved.percentage < 100 ? saved.currentTime : 0,
    },
  }))

  const { mutate } = useMutation({
    mutationKey: ["saveProgress", progressId],
    mutationFn: saveProgress,
  })

  const handleSave = (finished = false) => {
    const player = playerRef.current
    if (!player) return

    const currentTime = Math.floor(player.getCurrentTime())
    const duration = Math.floor(player.getDuration())

    if (!duration) return

    // never show 100% until the video really ends
    const percentage = finished
      ? 100
      : Math.min(99, Math.floor((currentTime / duration) * 100))

    setProgress(percentage)

    mutate({
      id: progressId,
      userId: USER_ID,
      courseId,
      lessonId,
      currentTime,
      duration,
      percentage,
    })
  }

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const onStateChange = (event: YouTubeEvent) => {
    // 1 = playing, 2 = paused, 0 = ended
    if (event.data === 1) {
      stopTimer()
      intervalRef.current = setInterval(() => handleSave(), 5000)
    }

    if (event.data === 2) {
      stopTimer()
      handleSave()
    }

    if (event.data === 0) {
      stopTimer()
      handleSave(true)
    }
  }

  // tell the page the current progress (also once on mount, with the saved value)
  useEffect(() => {
    onProgressChange?.(progress)
  }, [progress, onProgressChange])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="my-3 w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-black">
        <YouTube
          videoId={videoId}
          className="h-full w-full"
          iframeClassName="h-full w-full"
          opts={opts}
          onReady={(event: YouTubeEvent) => {
            playerRef.current = event.target
          }}
          onStateChange={onStateChange}
        />
<p>{progress}%</p>
      </div>
    </div>
  )
}