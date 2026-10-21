import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const footerLinks = {
  platform: [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
  ],

  courses: [
    { name: "Web Development", href: "#" },
    { name: "JavaScript", href: "#" },
    { name: "React.js", href: "#" },
    { name: "Next.js", href: "#" },
  ],

  support: [
    { name: "Help Center", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-green-600 px-6 py-10 text-center sm:px-10 lg:flex-row lg:text-left">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Ready to start learning?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-green-100 sm:text-base">
                Start learning today with practical courses designed to help
                you build real-world skills and achieve your goals.
              </p>
            </div>

            <Link
              href="/courses"
              className="group flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-green-600 transition hover:bg-green-50"
            >
              Explore Courses
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600">
                C
              </span>

              <span>
                Course<span className="text-green-500">Hub</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Learn practical skills, build real projects, and take the next
              step toward your future with CourseHub.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Mail size={17} className="text-green-500" />
                <span>hello@coursehub.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} className="text-green-500" />
                <span>+20 100 000 0000</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={17} className="text-green-500" />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Platform
            </h3>

            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Courses
            </h3>

            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>

            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500">
              © 2026 CourseHub. All rights reserved.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
              >
                <FaLinkedin size={18} />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
              >
                <FaFacebook size={18} />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
              >
                <FaInstagram size={18} />
              </Link>
            </div>

            {/* Legal */}
            <div className="flex gap-5 text-sm text-slate-500">
              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}