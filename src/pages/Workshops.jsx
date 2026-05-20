import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Wrench,
  FolderKanban,
  BadgeCheck,
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
import Naveenkumar from "../assets/Workshop/Testimonials/Naveen-Kumar-PK.jpeg";
import Mohammad from "../assets/Workshop/Testimonials/Mohammed Abbas.jpeg";
import Sujatha from "../assets/Workshop/Testimonials/Sujatha-Mohan.jpeg";

const Upcomingworkshops = [
  {
    img: "https://img.freepik.com/premium-photo/person-using-laptop-with-word-digital-marketing-screen_257043-51794.jpg",
    title: "Digital Marketing With Hands-On Experience",
    desc: "Digital Marketing",
    date: "30-31 May 2026",
    duration: "2 Day Bootcamp",
    price: "₹99",
    original: "₹149",
    url: "/Digital-Marketing-30-to-31-May-2026"
  },
  {
    img: "",
    title: "Python Based Genetic Optimization",
    desc: "Genetic Algorithms for Optimization Problems",
    date: "16-17 Apr 2026",
    duration: "2 Days Workshop",
    price: "₹0",
    original: "",
    url: "",
  },
  {
    img: "",
    title: "Gen-AI & Assurence",
    desc: "Build and train AI agents and assurence in projects.",
    date: "27 - 28 Dec 2025",
    duration: "2 Days Workshop",
    price: "₹0",
    original: "",
    url: "",
  },
];

const Completedworkshops = [
  {
    img: "https://www.informatec.com/sites/default/files/inline-images/AI-drives-business-intelligence-900px_0.jpg",
    title: "Data Analytics in AI & Businss Decision Making",
    desc: "Data Analytics in AI & Business Decision Making",
    date: "4 May 2026",
    duration: "1 Day Workshop",
    price: "₹99",
    original: "₹149",
    url: "/Data-Analytics-In-AI-4-May-2026",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/D4E12AQG9T-qCRzKQfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706248184338?e=1780531200&v=beta&t=njRPTa-DvIddtfTj1bgHJnL5GP70hBB8xieVZ2y8hmo",
    title: "The Power Of Innovation & IPR",
    desc: "The Power Of Innovation & IPR With IP Masterclass",
    date: "28 Apr 2026",
    duration: "1 Day Workshop",
    price: "₹99",
    original: "₹149",
    url: "/The-Power-Of-Innovation-And-IPR-28-Apr-2026",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/D4E12AQHBDM1ROA1MSA/article-cover_image-shrink_720_1280/B4EZW_RmMrHgAI-/0/1742670818513?e=2147483647&v=beta&t=88jw6PJuyWrOT1I9RX-fWbelCk30c4keUFegkRo9DTM",
    title: "AI Driven Decisions",
    desc: "AI Driven Decisions with Real Data",
    date: "18 Apr 2026",
    duration: "1 Day Workshop",
    price: "₹99",
    original: "₹149",
    url: "/AI-Driven-Decisions-18-Apr-2026"
  },
  {
    img: "https://miro.medium.com/1*EkqeUEbVTvDRmSsfV_THGw.png",
    title: "Python Based Genetic Optimization",
    desc: "Genetic Algorithms for Optimization Problems",
    date: "16-17 Apr 2026",
    duration: "2 Days Workshop",
    price: "₹149",
    original: "₹199",
    url: "/Python-Based-Genetic-Optimization-16to17-Apr",
  },
  {
    img: "https://www.responsible.ai/wp-content/uploads/2025/01/Depositphotos_625177406_S.jpg",
    title: "Gen-AI & Assurence",
    desc: "Build and train AI agents and assurence in projects.",
    date: "27 - 28 Dec 2025",
    duration: "2 Days Workshop",
    price: "₹99",
    original: "₹149",
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
    img: Naveenkumar,
    name: "Naveen Kumar PK",
    role: "Assistant Professor",
    Department: "Commerce and Management",
    college: "Vijaya Vittala Institute of Management and Science (Bangalore)",
    text: "On behalf of our college, we sincerely thank Pencilbitz for successfully conducting four free Faculty Development Programs (FDPs) this semester. The high-quality content provided valuable knowledge that was greatly appreciated by all participants. We are truly grateful for your continuous cooperation and look forward to your support next semester. In the future, we would be delighted to collaborate on both paid and free FDP initiatives.",
    rating: 5,
  },
  {
    img: Mohammad,
    name: "S. Mohammed Abbas",
    role: "Lecturer",
    Department: "EEE",
    college: "Er.Perumal Manimekalai Polytechnic College, (Hosur)",
    text: "We sincerely express our heartfelt thanks to the entire Pencilbitz Organization Team for providing us this wonderful opportunity to organize and be a part of this Faculty Development Programme. Your continuous support, coordination, and guidance made this session a great success. We truly appreciate your efforts and look forward to more such collaborations in the future. We also thank Dr. K. Saraswathi mam for her Valuable time spent with us.",
    rating: 5,
  },
  {
    img: Sujatha,
    name: "Dr.Sujatha Mohan",
    role: "Assistant Professor",
    Department: "Data Science",
    college: "Sri Bhagawan Mahaveer Jain College (Bangalore)",
    text: "A special thank you to Revathi madam for her outstanding initiative and leadership. Her dedication ensured this task was executed seamlessly and completed ahead of schedule. We truly appreciate her hard work and commitment to excellence.",
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

export default function Workshops() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <UpcomingWorkshops />
      <CompletedWorkshops />
      <Benefits />
      <Stats />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </div>
  );
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 mt-16">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#FF7A00]/10 border border-[#FF7A00]/30 px-4 py-2 rounded-full text-[#FF7A00] text-sm font-bold uppercase tracking-wider">
            <Sparkles size={14} />
            Hands-on Learning
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight text-[#FF7A00]">
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
              { icon: Wrench, label: "Hands-on Experience" },
              { icon: FolderKanban, label: "Project Based Learning" },
              { icon: BadgeCheck, label: "Certificate" },
            ].map((item, index) => (
              <div key={index}>
                <div className="w-14 h-14 rounded-xl bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center">
                  <item.icon className="text-[#FF7A00]" />
                </div>
                <p className="mt-3 text-sm text-gray-400 max-w-[100px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

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
        {Upcomingworkshops.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] border border-orange-500/20 rounded-2xl p-5 grid md:grid-cols-[220px_1fr_auto] gap-6 hover:border-orange-500/50 transition hover:shadow-[0_0_30px_rgba(255,115,0,0.2)]"
          >
            {item.img ? (
              <img
                src={item.img}
                alt=""
                className="w-full h-40 md:h-32 object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-40 md:h-32 rounded-xl bg-zinc-800 relative overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,115,0,0.08) 50%, transparent 100%)",
                    animation: "shimmer 2s infinite",
                  }}
                />
                <div className="flex flex-col items-center gap-2 text-zinc-500 z-10">
                  <Sparkles size={24} className="text-orange-500/40 animate-pulse" />
                  <span className="text-xs font-medium tracking-wide">COMING SOON</span>
                </div>
              </div>
            )}

            <div>
              <h3 className="text-2xl font-semibold ">{item.title}</h3>
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
                  View Details
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

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}

function CompletedWorkshops() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Completed Workshops</h2>
        <button className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition">
          View All Workshops
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="space-y-6">
        {Completedworkshops.map((item, index) => (
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
                  View Details
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
  // Duplicating the dataset 3 times to guarantee smooth, seamless infinite scrolling loops
  const scrollingTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-16 max-w-7xl mx-auto overflow-hidden">
      <div className="px-6 mb-12">
        <h2 className="text-4xl font-bold text-center">
          What Participants Say
        </h2>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from