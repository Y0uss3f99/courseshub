"use client";

import { FaComment, FaTrophy } from "react-icons/fa";
import { useRouter } from "next/navigation";
import QuestionSection from "../askQuestion/page";
import LeaderBoard from "../LessonItem/page";

export default function Curriculm({ id }: { id: string }) {
  const router = useRouter();

  const handleCommentsClick = () => {
    const commentsSection = document.getElementById("comments");

    if (commentsSection) {
      commentsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      router.push(`/courses/${id}#comments`);
    }
  };

  return (
    <section className="my-4">
      <div className="my-3 flex items-center justify-start gap-3 text-xl text-gray-600">
        <QuestionSection id={id} />

        <button
          type="button"
          onClick={handleCommentsClick}
          className="transition-colors hover:text-[#41b79d]"
          title="Comments"
          aria-label="Comments"
        >
          <FaComment />
        </button>

      <LeaderBoard/>

      </div>
    </section>
  );
}