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
  ChevronDown,
  Plus,
  Minus,
  Users,
  Brain,
  LineChart,
  Lightbulb,
  Workflow,
  Target,
  Zap
} from "lucide-react";

import AIDrivenDecisions from "../../assets/Workshop/AI-Driven-Decisions-18-Apr-2026.jpeg"
import speaker from "../../assets/Workshop/jayasree.jpeg"

const navItems = [
  "Home",
  "About Us",
  "Categories",
  "Workshops",
  "Contact",
];

const learn = [
  {
    icon: Brain,
    title: "AI Fundamentals",
    desc: "Understand how AI drives business value",
  },
  {
    icon: LineChart,
    title: "Data-Driven Insights",
    desc: "Extract meaningful decisions from raw data",
  },
  {
    icon: Lightbulb,
    title: "Predictive Analytics",
    desc: "Forecast trends using machine learning models",
  },
  {
    icon: Workflow,
    title: "Automation Strategies",
    desc: "Streamline workflows with smart decision systems",
  },
];

const highlights = [
  {
    icon: Target,
    title: "Real-world Case Studies",
    desc: "Analyze successful AI-driven companies",
  },
  {
    icon: Zap,
    title: "Actionable Strategies",
    desc: "Implement AI decisions immediately",
  },
  {
    icon: FileBadge,
    title: "Certificate of Completion",
    desc: "Industry-recognized certificate",
  },
  {
    icon: UserCog,
    title: "Expert Mentorship",
    desc: "Learn from Data Science professionals",
  },
  {
    icon: MessagesSquare,
    title: "Interactive Q&A",
    desc: "Get your specific doubts cleared",
  },
  {
    icon: Video,
    title: "Recording Access",
    desc: "Watch sessions anytime",
  },
];

const curriculum = [
  {
    day: "Session 1",
    items: [
      "Introduction to AI in Business",
      "Identifying Data-Driven Opportunities",
      "Building a Data-Centric Culture",
    ],
  },
  {
    day: "Session 2",
    items: [
      "Predictive Analytics Models",
      "Automating Decisions with AI",
      "Case Studies & Strategic Q&A",
    ],
  },
];

const testimonials = [
];

const faqs = [
  {
    q: "Who should attend this workshop?",
    a: "Business leaders, managers, analysts, and anyone looking to leverage AI for better decision making.",
  },
  {
    q: "Do I need coding experience?",
    a: "No coding experience is required. The focus is on strategy, concepts, and business applications.",
  },
  {
    q: "Will I get recordings?",
    a: "Yes, you'll get lifetime access to all session recordings.",
  },
  {
    q: "Is a certificate included?",
    a: "Yes, a certificate of completion is provided.",
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
          className="w-full rounded-lg border border-orange-500/20 bg-zinc-800 px-4 py-3 text-sm outline-none focus:border-orange-500"
        />

        {!compact && (
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-orange-500/20 bg-zinc-800 px-4 py-3 text-sm outline-none focus:border-orange-500"
          />
        )}

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-lg border border-orange-500/20 bg-zinc-800 px-4 py-3 text-sm outline-none focus:border-orange-500"
        />

        {!compact && (
          <>
            <input
              type="text"
              placeholder="College / Organization"
              className="w-full rounded-lg border border-orange-500/20 bg-zinc-800 px-4 py-3 text-sm outline-none focus:border-orange-500"
            />

            <div className="relative">
              <select className="w-full appearance-none rounded-lg border border-orange-500/20 bg-zinc-800 px-4 py-3 text-sm outline-none focus:border-orange-500">
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
      {/* NAVBAR removed to use global Navbar from App.jsx */}

      <main className="mx-auto max-w-7xl space-y-16 px-6 py-10">
        {/* HERO */}
        <section className="grid gap-6 lg:grid-cols-12">
          <GlowCard className="overflow-hidden p-3 lg:col-span-4">
            <img
              src={AIDrivenDecisions}
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
              AI Driven
              <br />
              <span className="text-orange-500">
                Decisions
              </span>
            </h1>

            <p className="text-zinc-400">
              Transform your business strategies by learning how to harness the power of AI. Discover frameworks for making smarter, data-driven decisions that propel growth and efficiency.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-orange-500" />
                18 April 2026
              </li>

              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-orange-500" />
                1 Day Workshop
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
                ₹99
              </span>

              <span className="text-zinc-500 line-through">
                ₹149
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
              src={speaker}
              alt="Mentor"
              className="h-40 w-40 rounded-full object-cover ring-4 ring-orange-500"
            />

            <div className="space-y-2">
              <p className="text-sm text-orange-500">
                Meet Your Mentor
              </p>

              <h2 className="text-3xl font-bold">
                Divya Thiksha R
              </h2>

              <p className="font-medium text-orange-500">
                Data Analyst
              </p>

              <p className="text-sm text-zinc-400">
                1+ years experience in Data Analyst & AI
              </p>

              <div className="flex gap-3 pt-2">
                {[GitBranch, UserCog, MessagesSquare].map(
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

        {/* WHAT YOU WILL LEARN */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">What You'll Learn</h2>
            <p className="text-zinc-400">Comprehensive curriculum designed for industry readiness</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {learn.map((item, i) => (
              <GlowCard key={i} className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Workshop Highlights</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <div key={i} className="flex gap-4 p-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Course Curriculum</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {curriculum.map((day, i) => (
              <GlowCard key={i} className="p-6">
                <h3 className="text-orange-500 font-bold mb-4">{day.day}</h3>
                <ul className="space-y-3">
                  {day.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                      <div className="h-1 w-1 rounded-full bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        {/* <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Success Stories</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <GlowCard key={i} className="p-6 space-y-4">
                <div className="flex gap-1 text-orange-500">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm italic text-zinc-300">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full" />
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section> */}

        {/* FAQ */}
        <section className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-orange-500/20 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition"
                >
                  <span className="font-medium">{faq.q}</span>
                  {openFaq === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </button>
                {openFaq === i && (
                  <div className="p-4 pt-0 text-sm text-zinc-400">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      
    </div>
  );
}