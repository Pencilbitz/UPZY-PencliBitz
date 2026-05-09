import {
  ArrowRight,
  MonitorPlay,
  Users,
  Star,
  ShieldCheck,
  UserRound,
  ArrowUp,
} from "lucide-react";


import heroImg from "../assets/Hero-Categories.png";
import { Navigate, useNavigate } from "react-router-dom";

const stats = [
  { icon: MonitorPlay, value: "500+", label: "Webinars" },
  { icon: Users, value: "200+", label: "Workshops" },
  { icon: UserRound, value: "50K+", label: "Learners" },
  { icon: Star, value: "100+", label: "Expert Speakers" },
  { icon: ShieldCheck, value: "98%", label: "Satisfaction Rate" },
];



function Categories() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 pt-10 text-sm">
        <span className="text-gray-400 hover:text-orange-500 cursor-pointer transition">
          Home
        </span>

        <span className="mx-2 text-gray-500">›</span>

        <span className="text-orange-500">Categories</span>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-10 pb-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6">
          <span className="inline-block rounded-md border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-500">
            Explore Categories
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Explore Learning <br />
            <span className="text-orange-500">Opportunities</span>
          </h1>

          <p className="max-w-md text-gray-400 text-lg">
            Choose a format that fits your learning style and take the next
            step in your journey.
          </p>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl animate-pulse"></div>

          {/* Dot Pattern */}
          <div
            className="absolute -left-4 top-8 h-32 w-44 hidden md:block opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle, orange 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          ></div>

          <img
            src={heroImg}
            alt="Education"
            className="relative w-full max-w-md rounded-full  animate-float animate-bounce drop-shadow-[0_0_30px_rgba(255,122,0,0.3)]"
          />
        </div>
      </section>

      {/* Cards */}
      <section className="container mx-auto px-6 py-8 grid md:grid-cols-2 gap-6">
        {/* Webinars */}
        <div className="rounded-2xl border border-orange-500/20 bg-white/5 backdrop-blur-md p-7 hover:border-orange-500/50 transition duration-300">
          <div className="flex gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
              <MonitorPlay className="h-9 w-9 text-orange-500" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Webinars</h3>

              <p className="text-gray-400 leading-relaxed">
                Join live sessions with industry experts, gain insights, and
                stay updated with the latest trends.
              </p>
            </div>
          </div>

          <a href="/Webinar">
          <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600 transition">
            Explore Webinars
            <ArrowRight className="h-4 w-4" />
          </button>
          </a>
        </div>

        {/* Workshops */}
        <div className="rounded-2xl border border-orange-500/20 bg-white/5 backdrop-blur-md p-7 hover:border-orange-500/50 transition duration-300">
          <div className="flex gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
              <Users className="h-9 w-9 text-orange-500" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Workshops</h3>

              <p className="text-gray-400 leading-relaxed">
                Hands-on learning experiences to build your skills and solve
                real-world challenges.
              </p>
            </div>
          </div>
          <a href="/Workshop">
          <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600 transition">
            Explore Workshops
            <ArrowRight className="h-4 w-4" />
          </button>
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 rounded-2xl border border-orange-500/20 bg-white/5 backdrop-blur-md px-6 py-7">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
                <s.icon className="h-5 w-5 text-orange-500" />
              </div>

              <div>
                <div className="text-xl font-bold">{s.value}</div>

                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      {/* Scroll To Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

export default Categories;