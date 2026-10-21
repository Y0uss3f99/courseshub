
import Link from "next/link";
import {
  FaBookOpen,
  FaGraduationCap,
  FaUsers,
  FaBullseye,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const features = [
  {
    icon: FaBookOpen,
    title: "Quality Courses",
    description:
      "Explore organized learning materials and courses designed to make learning easier and more effective.",
  },
  {
    icon: FaGraduationCap,
    title: "Learn at Your Pace",
    description:
      "Study lessons, review materials, and track your progress at a pace that works for you.",
  },
  {
    icon: FaUsers,
    title: "Student Community",
    description:
      "Share your thoughts, ask questions, and learn alongside other students.",
  },
  {
    icon: FaBullseye,
    title: "Track Your Progress",
    description:
      "Stay motivated, follow your achievements, and keep moving toward your learning goals.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-[#f3f8f9] px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full bg-[#41b79d]/10 px-4 py-2 text-sm font-semibold text-[#29977f]">
            About CourseHub
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Empowering Students to{" "}
            <span className="text-[#41b79d]">
              Learn and Grow
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            We believe that learning should be accessible, organized,
            and engaging. CourseHub brings learning materials,
            progress tracking, and student interaction together
            in one place.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-lg bg-[#41b79d] px-6 py-3 font-semibold text-white transition hover:bg-[#329d86]"
            >
              Explore Courses
              <HiArrowRight />
            </Link>

            <Link
              href="/home"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold transition hover:bg-gray-50"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-semibold text-[#41b79d]">
              OUR MISSION
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">
              Making Every Learning Journey Matter
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Our mission is to help students learn more effectively
              by providing a clear and organized learning experience.
              We bring course content, educational resources,
              progress tracking, and discussions together so students
              can focus on what matters most: learning.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Whether you are starting a new subject or strengthening
              your knowledge, CourseHub is designed to support your
              journey one lesson at a time.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#f3f8f9] p-8 sm:p-12">
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[#41b79d]/10" />

            <div className="relative space-y-5">
              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#41b79d]/10 text-xl text-[#41b79d]">
                  <FaBookOpen />
                </div>
                <div>
                  <h3 className="font-semibold">Learn Something New</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Discover courses and lessons
                  </p>
                </div>
              </div>

              <div className="ml-6 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm sm:ml-12">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="font-semibold">Build Your Skills</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Progress at your own pace
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-500">
                  <FaBullseye />
                </div>
                <div>
                  <h3 className="font-semibold">Reach Your Goals</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Celebrate every achievement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-semibold text-[#41b79d]">
              WHY COURSEHUB?
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything You Need to Learn Better
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              A learning experience designed around students and
              their goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex size-14 items-center justify-center rounded-xl bg-[#41b79d]/10 text-2xl text-[#41b79d]">
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#173b4a] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Start Learning?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-300">
            Explore your courses, discover new knowledge, and take
            the next step in your learning journey.
          </p>

          <Link
            href="/courses"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#41b79d] px-6 py-3 font-semibold text-white transition hover:bg-[#329d86]"
          >
            Browse Courses
            <HiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
