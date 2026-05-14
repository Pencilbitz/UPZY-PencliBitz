import { useState } from "react";
import { Link } from "react-router-dom";


import {
  Wrench,
  FolderKanban,
  BadgeCheck,
  ChevronRight,
  Calendar,
  ArrowRight,
  GraduationCap,
  Code2,
  Users,
  Award,
  Sparkles,
  Clock,
  Star,
  Quote,
  Plus,
  Minus,
  Mail,
} from "lucide-react";

import heroImg from "../assets/ws-hero.png";
import wsFullstack from "../assets/ws-fullstack.png";
import wsData from "../assets/ws-data.png";
import wsUiux from "../assets/ws-uiux.png";
import wsMl from "../assets/ws-ml.png";

const workshops = [
  {
    img: wsFullstack,
    title: "Full Stack Web Development",
    desc: "Build modern web applications from scratch.",
    date: "12 - 14 Jun 2025",
    duration: "3 Days Workshop",
    price: "₹6,999",
    original: "₹9,999",
    url: "",
  },

  {
    img: wsData,
    title: "Data Analysis with Python",
    desc: "Learn data analysis techniques using Python libraries.",
    date: "19 - 21 Jun 2025",
    duration: "3 Days Workshop",
    price: "₹5,999",
    original: "₹8,999",
  },

  {
    img: wsUiux,
    title: "UI/UX Design Essentials",
    desc: "Design beautiful and user-friendly interfaces.",
    date: "26 - 28 Jun 2025",
    duration: "3 Days Workshop",
    price: "₹4,999",
    original: "₹7,999",
  },

  {
    img: wsMl,
    title: "Machine Learning with Scikit-learn",
    desc: "Build and train machine learning models step by step.",
    date: "03 - 05 Jul 2025",
    duration: "3 Days Workshop",
    price: "₹7,999",
    original: "₹11,999",
    url: "/upzypencilbitz-Dec-27",
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Industry Experts",
    desc: "Learn from seasoned professionals actively working in industry.",
  },

  {
    icon: Code2,
    title: "Real-Time Projects",
    desc: "Apply skills on real-world projects from day one.",
  },

  {
    icon: Users,
    title: "Interactive Sessions",
    desc: "Live Q&A, peer review and mentor guidance.",
  },

  {
    icon: Award,
    title: "Career Certification",
    desc: "Earn a verified certificate to showcase your skills.",
  },
];

const stats = [
  { v: "200+", l: "Workshops", icon: Wrench },
  { v: "50K+", l: "Participants", icon: Users },
  { v: "100+", l: "Expert Trainers", icon: GraduationCap },
  { v: "95%", l: "Satisfaction Rate", icon: Star },
  { v: "500+", l: "Real Projects", icon: FolderKanban },
  { v: "24/7", l: "Support", icon: Sparkles },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Frontend Developer",
    text: "The Full Stack workshop was unreal. I built a real project and gained confidence.",
    rating: 5,
  },

  {
    name: "Priya Sharma",
    role: "Data Analyst",
    text: "Loved the Python workshop. Mentors were amazing and practical sessions helped a lot.",
    rating: 5,
  },

  {
    name: "Rohan Iyer",
    role: "Product Designer",
    text: "UI/UX workshop completely changed how I design interfaces.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Who can join these workshops?",
    a: "Students, professionals, and beginners can join.",
  },

  {
    q: "Will I receive a certificate?",
    a: "Yes, every participant receives a certificate.",
  },

  {
    q: "Are sessions recorded?",
    a: "Yes, recordings will be available after sessions.",
  },

  {
    q: "What are the prerequisites?",
    a: "Basic computer knowledge is enough for most workshops.",
  },
];

function Workshops() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
    

      <Hero />

      <UpcomingWorkshops />

      <Benefits />

      <Stats />

      <Testimonials />

      <FAQ />

      <Newsletter />

      
    </div>
  );
}

export default Workshops;

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 mt-16">
    

      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-2 rounded-full text-orange-500 text-sm font-medium">
            <Sparkles size={14} />
            Hands-on Learning
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            Workshops
          </h1>

          <p className="mt-6 text-2xl font-semibold leading-relaxed">
            Build skills. Solve problems.
            <br />
            Create impact.
          </p>

          <p className="mt-5 text-gray-400 max-w-md leading-relaxed">
            Join our practical workshops and gain hands-on experience with
            real-world projects and industry-level guidance.
          </p>

          <div className="mt-10 flex flex-wrap gap-8">
            {[
              {
                icon: Wrench,
                label: "Hands-on Experience",
              },

              {
                icon: FolderKanban,
                label: "Project Based Learning",
              },

              {
                icon: BadgeCheck,
                label: "Certificate",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                  <item.icon className="text-orange-500" />
                </div>

                <p className="mt-3 text-sm text-gray-400 max-w-[100px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"></div>

          <div className="relative border-2 border-orange-500 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,115,0,0.4)]">
            <img
              src={heroImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function UpcomingWorkshops() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Upcoming Workshops</h2>

        <button className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition">
          View All Workshops
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="space-y-6">
        {workshops.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] border border-orange-500/20 rounded-2xl p-5 grid md:grid-cols-[220px_1fr_auto] gap-6 hover:border-orange-500/50 transition hover:shadow-[0_0_30px_rgba(255,115,0,0.2)]"
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-40 md:h-32 object-cover rounded-xl"
            />

            <div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="text-gray-400 mt-2">{item.desc}</p>

              <div className="flex flex-wrap items-center gap-3 mt-5 text-sm">
                <span className="flex items-center gap-2 bg-orange-500/10 text-orange-500 px-3 py-1 rounded-md">
                  <Calendar size={16} />
                  {item.date}
                </span>

                <span className="text-gray-500">|</span>

                <span className="flex items-center gap-2 text-gray-400">
                  <Clock size={16} />
                  {item.duration}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-start md:items-end gap-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">{item.price}</span>

                <span className="line-through text-gray-500">
                  {item.original}
                </span>
              </div>

              {item.url ? (
                <Link
                  to={item.url}
                  className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md font-semibold text-center text-white"
                >
                  Enroll Now
                </Link>
              ) : (
                <span className="bg-gray-700 px-6 py-3 rounded-md font-semibold text-center text-gray-400 cursor-not-allowed">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Why Join Our Workshops?</h2>

        <p className="text-gray-400 mt-3">
          Practical learning experiences designed for career growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition hover:shadow-[0_0_25px_rgba(255,115,0,0.2)]"
          >
            <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center">
              <item.icon className="text-white" />
            </div>

            <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

            <p className="mt-3 text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((item, index) => (
          <div key={index} className="text-center">
            <item.icon className="mx-auto text-orange-500 mb-4" />

            <h3 className="text-3xl font-bold">{item.v}</h3>

            <p className="text-gray-400 text-sm mt-2">{item.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center">
        What Participants Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] border border-orange-500/20 rounded-2xl p-6 relative"
          >
            <Quote className="absolute top-5 right-5 text-orange-500/30" />

            <div className="flex gap-1">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="fill-orange-500 text-orange-500"
                  size={16}
                />
              ))}
            </div>

            <p className="mt-5 text-gray-400 leading-relaxed">
              "{item.text}"
            </p>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-bold">
                {item.name[0]}
              </div>

              <div>
                <h4 className="font-semibold">{item.name}</h4>

                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 mt-12">
        {faqs.map((item, index) => {
          const isOpen = open === index;

          return (
            <div
              key={index}
              className={`bg-[#111] border rounded-xl overflow-hidden transition ${
                isOpen
                  ? "border-orange-500 shadow-[0_0_25px_rgba(255,115,0,0.2)]"
                  : "border-orange-500/20"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-medium">{item.q}</span>

                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {isOpen && (
                <p className="px-6 pb-6 text-gray-400">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="w-20 h-20 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
            <Mail className="text-orange-500" size={36} />
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h3 className="text-3xl font-bold">
                Stay Updated with Upcoming Workshops
              </h3>

              <p className="text-gray-400 mt-3">
                Subscribe to get notified about our latest workshops.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-black border border-gray-700 rounded-md px-4 outline-none focus:border-orange-500"
              />

              <button className="h-12 px-6 rounded-md bg-orange-500 hover:bg-orange-600 transition font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}