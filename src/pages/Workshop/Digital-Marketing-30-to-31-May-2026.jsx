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
  Activity,
  Cpu,
  TrendingUp,
  Target,
  Zap,
  Network
} from "lucide-react";

import DigitalMarketing from "../../assets/Workshop/Digital-Marketing-30-to-31-May-2026.jpeg"
import speaker from "../../assets/Workshop/Gowthami.png"

const navItems = [
  "Home",
  "About Us",
  "Categories",
  "Workshops",
  "Contact",
];

const learn = [
  {
    icon: Code2,
    title: "SEO & Website Optimization",
    desc: "Learn on-page SEO, keyword research & ranking strategies",
  },
  {
    icon: Network,
    title: "Social Media Marketing",
    desc: "Run Instagram, Facebook & LinkedIn campaigns hands-on",
  },
  {
    icon: Target,
    title: "Meta Ads & Analytics",
    desc: "Create ad campaigns and track performance metrics",
  },
  {
    icon: TrendingUp,
    title: "Hands-on Live Projects",
    desc: "Work on real-time digital marketing campaigns",
  },
];

const highlights = [
  {
    icon: Activity,
    title: "Hands-on Campaign Creation",
    desc: "Build real-world digital marketing campaigns live",
  },
  {
    icon: Zap,
    title: "Meta & Google Ads Training",
    desc: "Learn ad creation, targeting & optimization strategies",
  },
  {
    icon: FileBadge,
    title: "Certificate of Completion",
    desc: "Industry-recognized workshop certificate",
  },
  {
    icon: UserCog,
    title: "Expert Mentorship",
    desc: "Guidance from experienced digital marketers",
  },
  {
    icon: MessagesSquare,
    title: "Interactive Q&A",
    desc: "Clear your doubts with live expert sessions",
  },
  {
    icon: Video,
    title: "Recording Access",
    desc: "Get access to workshop session recordings anytime",
  },
];

const curriculum = [
  {
    day: "Day 1",
    items: [
      "Introduction to Digital Marketing",
      "SEO Basics & Keyword Research",
      "Social Media Marketing Strategies",
      "Creating Content for Engagement",
    ],
  },
  {
    day: "Day 2",
    items: [
      "Google Ads & Meta Ads Setup",
      "Campaign Creation & Optimization",
      "Analytics & Performance Tracking",
      "Live Project Implementation & Q&A",
    ],
  },
];

const testimonials = [
];

const faqs = [
  {
    q: "Who can attend this workshop?",
    a: "Students, freelancers, business owners, and beginners interested in Digital Marketing can attend this workshop.",
  },
  {
    q: "Do I need prior experience in Digital Marketing?",
    a: "No, this workshop starts from the fundamentals and is beginner-friendly.",
  },
  {
    q: "Will I get hands-on practical training?",
    a: "Yes, you'll work on live campaigns, ads, and real-world marketing activities.",
  },
  {
    q: "Is a certificate included?",
    a: "Yes, a certificate of completion will be provided to all participants.",
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
      <h3 className="mb-5 text-2xl font-bold text-center">
        Register for the Live Online Session
      </h3>

      <form
        className="space-y-3"
        onSubmit={(e) => e.preventDefault()}
      >
        {compact && (
          <input
            type="text"
            placeholder="Roll No / Number"
            className="w-full rounded-lg border border-orange-500/20 bg-zinc-800 px-4 py-3 text-sm outline-none focus:border-orange-500"
          />
        )}

        <label className="flex items-center gap-2 py-1 text-xs text-zinc-400">
        
        </label>
        <a href="https://forms.gle/pCvJEcxnot2zeZnj7" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-orange-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-orange-600">
                  
          Register Now
        </a>

        <p className="flex items-center justify-center gap-2 pt-1 text-xs text-zinc-400">
          <Lock className="h-3 w-3" />
          Secure & Safe
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
              src={DigitalMarketing}
              alt="Workshop"
              className="h-full w-full rounded-xl object-cover"
            />
          </GlowCard>

          <div className="space-y-5 lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-4 py-1 text-xs text-orange-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              Live Online Session
            </span>

            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              Digital Marketing
              <br />
              <span className="text-orange-500">
                Optimization
              </span>
            </h1>

            <p className="text-zinc-400">
              In this intensive 2-day Bootcamp, you’ll dive into the world of Digital Marketing, learning how to create powerful marketing strategies, run successful social media and Meta ad campaigns, analyze audience behavior, and optimize brand growth through hands-on practical sessions and live projects.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-orange-500" />
                30-31 May 2026
              </li>

              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-orange-500" />
                2 Days Bootcamp
              </li>

              <li className="flex items-center gap-3">
                <Radio className="h-4 w-4 text-orange-500" />
                Live Online Session
              </li>

              <li className="flex items-center gap-3">
                <BarChart3 className="h-4 w-4 text-orange-500" />
                Beginner to Advanced
              </li>
            </ul>

            
          </div>

          
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
                Gowthami
              </h2>

              <p className="font-medium text-orange-500">
                Sr Digital Marketing Executive
              </p>

              <p className="text-sm text-zinc-400">
                1+ years experience in Data Analyst & AI
              </p>
              <h3><span className="text-orange-500">Contact : </span>9047116383(Ms.R.Jona)</h3>

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