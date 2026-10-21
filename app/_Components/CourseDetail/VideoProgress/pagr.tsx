type Props = {
  progress: number
}

export default function VideoProgress({ progress }: Props) {
  const value = Math.min(100, Math.max(0, progress))

  return (
    <main className="my-3 w-[80%] mx-auto">
      <section>
        <header>
          <h1 className=" lg:text-3xl md:text-2xl">Topics fro this course</h1>
        </header>
        <div className="mt-6 w-full">

      <div className="relative mb-1 h-7">
        <div
          className="absolute bottom-0 flex -translate-x-1/2 flex-col items-center"
          style={{ left: `${value}%` }}
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full  text-blue-950 border  border-gray-200">
      <span className="text-[7px] font-sans font-medium leading-3">
        You
      </span>
    </div>

          <span className="text-[10px] leading-3 text-gray-400">▼</span>
        </div>
      </div>


      <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-green-600 transition-[width] duration-300"
          style={{ width: `${value}%` }}
        />
      </div>


      <div className="relative mt-2 h-4">
        <span
          className="absolute top-0 -translate-x-1/2 text-[7px] md:text-xs font-medium leading-4 text-gray-600"
          style={{ left: `${value}%` }}
        >
          {value}%
        </span>
      </div>
    </div>
      </section>
    </main>
  )
}