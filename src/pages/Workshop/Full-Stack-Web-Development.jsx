import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Radio,
  BarChart3,
  Play,
  Code2,
  Server,
  Database,
  CloudUpload,
  ShieldCheck,
  GitBranch,
  FileBadge,
  UserCog,
  MessagesSquare,
  Video,
  Lock,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Plus,
  Minus,
  Users,
} from "lucide-react";


import s1 from "../../assets/speaker-1.png";
import s2 from "../../assets/speaker-2.png";
import s3 from "../../assets/speaker-3.png";
import mentorImg from "../../assets/speaker-4.png";


const learn = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "HTML, CSS, JavaScript, React",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Node.js, Express.js, APIs",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "MongoDB & Database Integration",
  },
  {
    icon: CloudUpload,
    title: "Deployment & Hosting",
    desc: "Deploy projects live online",
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Hands-on Projects",
    desc: "Build real-world applications",
  },
  {
    icon: GitBranch,
    title: "Live Coding Sessions",
    desc: "Code together with mentor",
  },
  {
    icon: FileBadge,
    title: "Certificate of Completion",
    desc: "Industry-recognized certificate",
  },
  {
    icon: UserCog,
    title: "Career Guidance",
    desc: "Resume & Interview preparation",
  },
  {
    icon: MessagesSquare,
    title: "Doubt Clearing Sessions",
    desc: "Interactive Q&A support",
  },
  {
    icon: Video,
    title: "Recording Access",
    desc: "Watch sessions anytime",
  },
];

const curriculum = [
  {
    day: "Day 1",
    items: [
      "Frontend Fundamentals",
      "React Basics",
      "Responsive Design",
    ],
  },
  {
    day: "Day 2",
    items: [
      "Backend APIs",
      "Authentication",
      "MongoDB Integration",
    ],
  },
  {
    day: "Day 3",
    items: [
      "Project Development",
      "Deployment",
      "Career Guidance",
    ],
  },
];

const testimonials = [
  {
    img: s1,
    name: "Rohit Verma",
    role: "Software Engineer",
    text: "Amazing workshop! The mentor explains every concept with real-world examples.",
  },
  {
    img: s2,
    name: "Neha Singh",
    role: "Web Developer",
    text: "The best part was the live coding sessions and doubt clearing.",
  },
  {
    img: s3,
    name: "Aman Patel",
    role: "Student",
    text: "Well structured curriculum and great support throughout the workshop.",
  },
];

const faqs = [
  {
    q: "Who can attend this workshop?",
    a: "Anyone from beginner to advanced level can join.",
  },
  {
    q: "Will I get recordings?",
    a: "Yes, you'll get lifetime access to all session recordings.",
  },
  {
    q: "Is certificate included?",
    a: "Yes, certificate is included.",
  },
];

function GlowCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-orange-500/30 bg-zinc-900/70 backdrop-blur-sm shadow-[0_0_25px_rgba(255,115,0,0.15)] ${className}`}
    >
      {children}
    </div>
  );
}

function PrimaryButton({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 ${className}`}
    >
      {children}
    </button>
  );
}

function RegisterForm({ compact = false }) {
  return (
    <div id="register">
      <GlowCard className="p-6 lg:p-8">
        <h3 className="mb-5 text-2xl font-bold">
          Register for Workshop
        </h3>

        <form
          className="space-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-orange-500/20 bg-[#0B0B0F] px-4 py-3 text-sm outline-none focus:border-orange-500"
          />

          {!compact && (
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-orange-500/20 bg-[#0B0B0F] px-4 py-3 text-sm outline-none focus:border-orange-500"
            />
          )}

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-orange-500/20 bg-[#0B0B0F] px-4 py-3 text-sm outline-none focus:border-orange-500"
          />

          {!compact && (
            <>
              <input
                type="text"
                placeholder="College / Organization"
                className="w-full rounded-lg border border-orange-500/20 bg-[#0B0B0F] px-4 py-3 text-sm outline-none focus:border-orange-500"
              />

              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-orange-500/20 bg-[#0B0B0F] px-4 py-3 text-sm outline-none focus:border-orange-500">
                  <option>Experience Level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>

                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              </div>
            </>
          )}

          {compact && (
            <input
              type="text"
              placeholder="Roll No / Number"
              className="w-full rounded-lg border border-orange-500/20 bg-zinc-800 px-4 py-3 text-sm outline-none focus:border-orange-500"
            />
          )}

          <label className="flex items-center gap-2 py-1 text-xs text-zinc-400">
            <input type="checkbox" />
            I agree to the
            <span className="text-orange-500">
              terms and conditions
            </span>
          </label>

          <PrimaryButton className="w-full">
            Complete Registration
          </PrimaryButton>

          <p className="flex items-center justify-center gap-2 pt-1 text-xs text-zinc-400">
            <Lock className="h-3 w-3" />
            Secure & Safe Payment
          </p>
        </form>
      </GlowCard>
    </div>
  );
}

export default function WorkshopPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white pt-20">

      <main className="mx-auto max-w-7xl space-y-16 px-6 py-10">
        {/* HERO */}
        <section className="grid gap-6 lg:grid-cols-12">
          <GlowCard className="overflow-hidden p-3 lg:col-span-4">
            <img
              src="https://img.sanishtech.com/u/fce352a032245e62f704b72d8c164063.png"
              alt="Workshop"
              className="h-full w-full rounded-xl object-cover"
            />
          </GlowCard>

          <div className="space-y-5 lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-4 py-1 text-xs text-orange-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              Live Workshop
            </span>

            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              Master Full Stack
              <br />
              <span className="text-orange-500">
                Web Development
              </span>
            </h1>

            <p className="text-zinc-400">
              Learn HTML, CSS, JavaScript, React,
              Node.js, MongoDB and deployment from
              scratch.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-orange-500" />
                12 – 14 Jun 2025
              </li>

              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-orange-500" />
                3 Days Workshop
              </li>

              <li className="flex items-center gap-3">
                <Radio className="h-4 w-4 text-orange-500" />
                Live Online Workshop
              </li>

              <li className="flex items-center gap-3">
                <BarChart3 className="h-4 w-4 text-orange-500" />
                Beginner to Advanced
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#register">
                <PrimaryButton>
                  Enroll Now
                </PrimaryButton>
              </a>

              <button className="inline-flex items-center gap-2 rounded-lg border border-orange-500/30 px-6 py-3 font-medium hover:bg-orange-500/10">
                <Play className="h-4 w-4 text-orange-500" />
                View Curriculum
              </button>
            </div>
          </div>

          <GlowCard className="space-y-4 p-6 lg:col-span-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-3 py-1 text-xs text-orange-500">
              <Users className="h-3 w-3" />
              Limited Seats Available
            </span>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">
                ₹6,999
              </span>

              <span className="text-zinc-500 line-through">
                ₹9,999
              </span>
            </div>

            <ul className="space-y-3 text-sm">
              {[
                [FileBadge, "Certificate Included"],
                [GitBranch, "Live Projects"],
                [UserCog, "Placement Guidance"],
                [Video, "Recording Access"],
              ].map(([Icon, text], index) => (
                <li
                  key={index}
                  className="flex items-center gap-3"
                >
                  <Icon className="h-4 w-4 text-orange-500" />
                  {text}
                </li>
              ))}
            </ul>

            <a href="#register">
              <PrimaryButton className="w-full">
                Enroll Now
              </PrimaryButton>
            </a>
          </GlowCard>
        </section>

        {/* MENTOR */}
        <section className="grid gap-6 lg:grid-cols-12">
          <GlowCard className="flex flex-col items-center gap-6 p-8 sm:flex-row lg:col-span-7">
            <img
              src={mentorImg}
              alt="Mentor"
              className="h-40 w-40 rounded-full object-cover ring-4 ring-orange-500"
            />

            <div className="space-y-2">
              <p className="text-sm text-orange-500">
                Meet Your Mentor
              </p>

              <h2 className="text-3xl font-bold">
                Arjun Sharma
              </h2>

              <p className="font-medium text-orange-500">
                Senior Full Stack Developer
              </p>

              <p className="text-sm text-zinc-400">
                8+ years experience in MERN Stack
                Development and mentoring students.
              </p>

              <div className="flex gap-3 pt-2">
                {[].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="/"
                      className="grid h-9 w-9 place-items-center rounded-full border border-orange-500/30 hover:bg-orange-500/10"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                )}
              </div>
            </div>
          </GlowCard>

          <div className="lg:col-span-5">
            <RegisterForm />
          </div>
        </section>
      </main>

      
    </div>
  );
}