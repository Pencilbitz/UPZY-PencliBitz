import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Radio,
  Users,
  Award,
  Play,
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  Mic,
  MessageCircle,
  Globe,
  BadgeCheck,
  Star,
  Quote,
  Mail,
  Brain,
  Code2,
  BarChart3,
  Shield,
  Megaphone,
  Palette,
  Cloud,
  TrendingUp,
  Plus,
  
  
} from "lucide-react";



import heroImg from "../assets/webinar-hero.png";
import wAi from "../assets/webinar-ai.png";
import wData from "../assets/webinar-data.png";
import wCyber from "../assets/webinar-cyber.png";
import wMarket from "../assets/webinar-marketing.png";
import wWeb from "../assets/webinar-web.png";
import wCloud from "../assets/webinar-cloud.png";

import sp1 from "../assets/speaker-1.png";
import sp2 from "../assets/speaker-2.png";
import sp3 from "../assets/speaker-3.png";
import sp4 from "../assets/speaker-4.png";

const upcoming = [
  {
    img: wAi,
    title: "The Future of AI in Everyday Life",
    desc: "Explore how AI is transforming industries and our daily lives.",
    speaker: "Dr. Rohan Mehta",
    role: "AI Researcher",
    avatar: sp1,
    date: "16 May 2025",
    time: "Friday, 7:00 PM IST",
    url: "/FutureofAI",
  },

  {
    img: wData,
    title: "Data Science in Business Decisions",
    desc: "Understand how data drives better business outcomes.",
    speaker: "Anjali Sharma",
    role: "Data Scientist",
    avatar: sp2,
    date: "23 May 2025",
    time: "Friday, 7:00 PM IST",
  },

  {
    img: wCyber,
    title: "Cybersecurity Essentials for Everyone",
    desc: "Learn the basics of cybersecurity and protect yourself online.",
    speaker: "Vikram Nair",
    role: "Cybersecurity Expert",
    avatar: sp3,
    date: "30 May 2025",
    time: "Friday, 7:00 PM IST",
  },

  {
    img: wMarket,
    title: "Digital Marketing Trends in 2025",
    desc: "Stay updated with the latest trends in digital marketing.",
    speaker: "Pooja Iyer",
    role: "Marketing Strategist",
    avatar: sp4,
    date: "06 Jun 2025",
    time: "Friday, 7:00 PM IST",
  },

  {
    img: wWeb,
    title: "Building Scalable Web Applications",
    desc: "Architecture patterns for modern scalable web apps.",
    speaker: "Arjun Kapoor",
    role: "Senior Engineer",
    avatar: sp1,
    date: "13 Jun 2025",
    time: "Friday, 7:00 PM IST",
  },

  {
    img: wCloud,
    title: "Career Growth with Cloud Computing",
    desc: "Roadmap to becoming a cloud-first engineer.",
    speaker: "Neha Verma",
    role: "Cloud Architect",
    avatar: sp2,
    date: "20 Jun 2025",
    time: "Friday, 7:00 PM IST",
  },
];

const whyAttend = [
  {
    icon: Mic,
    title: "Expert Speakers",
    desc: "Sessions led by leaders from top companies.",
  },

  {
    icon: MessageCircle,
    title: "Live Q&A Sessions",
    desc: "Ask questions and get answers in real time.",
  },

  {
    icon: Globe,
    title: "Flexible Online Access",
    desc: "Join live or watch on-demand from anywhere.",
  },

  {
    icon: BadgeCheck,
    title: "Participation Certificate",
    desc: "Earn a verified certificate after every session.",
  },
];

const stats = [
  { v: "500+", l: "Webinars Conducted", icon: Radio },
  { v: "50K+", l: "Participants", icon: Users },
  { v: "100+", l: "Industry Experts", icon: Mic },
  { v: "95%", l: "Positive Feedback", icon: Star },
  { v: "24/7", l: "Access to Recordings", icon: Clock },
  { v: "Global", l: "Community Reach", icon: Globe },
];

const speakers = [
  {
    name: "Dr. Rohan Mehta",
    role: "AI Researcher · Google",
    img: sp1,
    tags: ["AI", "ML", "NLP"],
    bio: "Building human-centric AI products for over a decade.",
  },

  {
    name: "Anjali Sharma",
    role: "Data Scientist · Microsoft",
    img: sp2,
    tags: ["Data", "Python", "BI"],
    bio: "Turns terabytes of data into business decisions.",
  },

  {
    name: "Vikram Nair",
    role: "Cybersecurity Expert · IBM",
    img: sp3,
    tags: ["Security", "Cloud"],
    bio: "Helps enterprises stay ahead of cyber threats.",
  },

  {
    name: "Pooja Iyer",
    role: "Marketing Strategist · Meta",
    img: sp4,
    tags: ["Growth", "SEO"],
    bio: "Scales brands through storytelling and marketing.",
  },
];

const testimonials = [
  {
    name: "Karan Patel",
    role: "Software Engineer",
    text: "The AI webinar was one of the best sessions I attended this year.",
    img: sp1,
  },

  {
    name: "Sneha Rao",
    role: "Product Manager",
    text: "Amazing speakers and excellent webinar experience.",
    img: sp2,
  },

  {
    name: "Aman Joshi",
    role: "Cloud Engineer",
    text: "Loved the practical cloud career roadmap session.",
    img: sp3,
  },
];

const categories = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Code2, label: "Web Development" },
  { icon: BarChart3, label: "Data Science" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Cloud, label: "Cloud Computing" },
  { icon: TrendingUp, label: "Career Development" },
];

const faqs = [
  {
    q: "Are webinars live or recorded?",
    a: "We host both live sessions and recorded webinars.",
  },

  {
    q: "Will I receive a certificate?",
    a: "Yes, all attendees receive a participation certificate.",
  },

  {
    q: "Can beginners attend?",
    a: "Absolutely. Sessions are beginner friendly.",
  },

  {
    q: "Will recordings be available?",
    a: "Yes, recordings are available after the session.",
  },
];

function Webinars() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pt-16">
     

    
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-2 rounded-full text-orange-500 text-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Live Learning Sessions
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold">
            Webinars
          </h1>

          <p className="mt-6 text-2xl font-semibold">
            Learn from experts. Get insights.
            <br />
            Stay ahead.
          </p>

          <p className="mt-5 text-gray-400 max-w-md">
            Explore our live and on-demand webinars on trending topics and emerging technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-10">
            {[
              {
                icon: Radio,
                label: "Live & Interactive Sessions",
              },

              {
                icon: Users,
                label: "Learn from Industry Experts",
              },

              {
                icon: Award,
                label: "Certificate of Participation",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="mx-auto text-orange-500" />
                <p className="mt-2 text-sm text-gray-400 max-w-[100px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
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
      </section>

      {/* Upcoming Webinars */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">Upcoming Webinars</h2>

          <button className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition">
            View All Webinars
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="space-y-6">
          {upcoming.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] border border-orange-500/20 rounded-2xl p-5 grid md:grid-cols-[220px_1fr_auto] gap-6 hover:border-orange-500/50 transition"
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-40 md:h-32 object-cover rounded-xl"
              />

              <div>
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.desc}
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={item.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-medium">{item.speaker}</h4>
                    <p className="text-sm text-gray-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 md:items-end">
                <p className="flex items-center gap-2 text-sm">
                  <Calendar className="text-orange-500" size={16} />
                  {item.date}
                </p>

                <p className="flex items-center gap-2 text-sm">
                  <Clock className="text-orange-500" size={16} />
                  {item.time}
                </p>

                <Link to={item.url} className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md font-semibold">
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Attend */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Attend Our Webinars?
          </h2>

          <p className="text-gray-400 mt-3">
            Gain practical insights and connect with industry leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {whyAttend.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <item.icon className="text-orange-500" />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}

export default Webinars;

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#111] border border-orange-500/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5"
      >
        <span>{q}</span>

        <Plus
          className={`text-orange-500 transition ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <p className="px-5 pb-5 text-gray-400">
          {a}
        </p>
      )}
    </div>
  );
}