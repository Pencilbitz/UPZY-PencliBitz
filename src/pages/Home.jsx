import React from 'react';
import { motion } from 'framer-motion';
import heroImg from "../assets/Hero-Student.png";
import books from "../assets/newsletter-books.png";

import webdev from "../assets/course-webdev.png";
import datasci from "../assets/course-datascience.png";
import marketing from "../assets/course-marketing.png";
import ai from "../assets/course-ai.png";
import {
  ArrowRight,
  Play,
  Users,
  Infinity as InfinityIcon,
  Award,
  Tag,
  Star,
  BookOpen, Code2,
  BarChart3,
  Briefcase,
  Megaphone,
  Pencil,
  Bot,
  Flower2, Clock,
  GraduationCap,
  ThumbsUp,
  Headphones, UserCheck,
  MonitorPlay,
  CalendarClock,
  HomeIcon, Search,
} from 'lucide-react';
import { Link } from 'react-router-dom';
const features = [
  { icon: Users, title: "Expert Instructors", desc: "Learn from industry professionals" },
  { icon: InfinityIcon, title: "Lifetime Access", desc: "Learn anytime, anywhere" },
  { icon: Award, title: "Certificate", desc: "Earn certificates on completion" },
  { icon: Tag, title: "Affordable", desc: "Quality education at best prices" },
];

const categories = [
  { icon: Code2, name: "Development", count: "120+ Courses" },
  { icon: BarChart3, name: "Data Science", count: "90+ Courses" },
  { icon: Briefcase, name: "Business Analyst", count: "80+ Courses" },
  { icon: Megaphone, name: "Marketing", count: "60+ Courses" },
  { icon: Pencil, name: "Design", count: "70+ Courses" },
  { icon: Bot, name: "AI & ML", count: "70+ Courses" },
  { icon: Flower2, name: "Lifestyle", count: "40+ Courses" },
];

const stats = [
  { icon: BookOpen, value: "150+", label: "Courses" },
  { icon: Users, value: "10K+", label: "Active Learners" },
  { icon: GraduationCap, value: "50+", label: "Expert Instructors" },
  { icon: Clock, value: "1M+", label: "Hours of Learning" },
  { icon: ThumbsUp, value: "95%", label: "Satisfaction Rate" },
  { icon: Headphones, value: "24/7", label: "Support" },
];

const feature = [
  {
    icon: UserCheck,
    title: "Expert Instructors",
    desc: "Learn from industry professionals",
  },
  {
    icon: MonitorPlay,
    title: "High Quality Content",
    desc: "Well-structured and up-to-date courses",
  },
  {
    icon: CalendarClock,
    title: "Flexible Learning",
    desc: "Learn at your own pace",
  },
  {
    icon: Award,
    title: "Certification",
    desc: "Earn certificates and boost your career",
  },
  {
    icon: HomeIcon,
    title: "Affordable Pricing",
    desc: "Quality education at affordable prices",
  },
  {
    icon: InfinityIcon,
    title: "Lifetime Access",
    desc: "Access courses forever",
  },
];

const courses = [
  {
    img: webdev,
    badge: "Bestseller",
    category: "Development",
    title: "Full Stack Web Development",
    rating: "4.8",
    reviews: "2.3K",
    duration: "12 Weeks",
    price: "₹2,999",
    original: "₹6,999",
    url: "/Workshop/Full Stack Web Development"
  },
  {
    img: datasci,
    category: "Data Science",
    title: "Data Science with Python",
    rating: "4.7",
    reviews: "1.8K",
    duration: "10 Weeks",
    price: "₹1,999",
    original: "₹5,999",
  },
  {
    img: marketing,
    category: "Marketing",
    title: "Digital Marketing Mastery",
    rating: "4.6",
    reviews: "1.5K",
    duration: "8 Weeks",
    price: "₹1,999",
    original: "₹4,999",
  },
  {
    img: ai,
    category: "Technology",
    title: "Artificial Intelligence Fundamentals",
    rating: "4.9",
    reviews: "2.1K",
    duration: "10 Weeks",
    price: "₹3,999",
    original: "₹7,999",
  },
];

const steps = [
  {
    icon: Search,
    title: "Choose a Course",
    desc: "Browse through our wide range of courses and pick what interests you.",
  },
  {
    icon: MonitorPlay,
    title: "Learn & Practice",
    desc: "Learn from expert instructors and apply your knowledge through practice.",
  },
  {
    icon: Award,
    title: "Get Certified",
    desc: "Complete the course and earn a certificate to showcase your skills.",
  },
];

const Home = () => {
  return (

    <div className="min-h-screen bg-[#111111] text-white font-sans selection:bg-[#FF7A00]/20 selection:text-[#FF7A00] mt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#111111]">

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-10 my-12 lg:py-26">

          {/* LEFT CONTENT */}
          <div className="space-y-7">

            <span className="inline-block px-4 py-1.5 rounded-full bg-[#443322] text-orange-600 text-xs font-semibold">
              Learn. Upskill. Succeed.
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Upgrade Your Skills.<br />
              <span className="text-[#FF7A00]">Advance Your Career.</span>
            </h1>

            <p className="text-[#a1a1aa] text-lg max-w-lg">
              Explore industry-relevant courses designed by experts and learn at your own pace. Start your learning journey today!
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#FF7A00]" />
                    </div>
                    <div className="text-sm font-semibold">{f.title}</div>
                    <div className="text-xs text-[#a1a1aa]">{f.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-2">

              <button className="px-6 py-3 rounded-xl bg-[#FF7A00] text-white flex items-center gap-2 hover:bg-orange-700 transition">
                Explore Courses
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="px-6 py-3 rounded-xl border border-gray-300 flex items-center hover:text-[#FF7A00] text-[#a1a1aa] gap-2 hover:border-[#FF7A00] transition">
                <Play className="w-4 h-4" />
                How It Works
              </button>
            </div>

            {/* USERS */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-[#FF7A00] flex items-center justify-center text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>

              <div>
                <div className="font-semibold text-sm">10K+ Happy Learners</div>
                <div className="text-xs text-[#a1a1aa]">
                  Join our growing community
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={heroImg}
                alt="Student learning"
                className="w-full h-auto"
              />

              {/* Play Button */}

            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 left-6 bg-white rounded-xl px-4 py-2 shadow">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#FF7A00]" />
                <div>
                  <div className="font-bold text-sm">150+</div>
                  <div className="text-xs text-gray-500">Courses</div>
                </div>
              </div>
            </div>

            <div className="absolute top-16 -right-2 bg-white rounded-xl px-4 py-2 shadow">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#FF7A00]" />
                <div>
                  <div className="font-bold text-sm">10K+</div>
                  <div className="text-xs text-gray-500">Learners</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-6 bg-white rounded-xl px-4 py-2 shadow">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#FF7A00]" />
                <div>
                  <div className="font-bold text-sm">4.8</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*Section-2 */}
      <section className="max-w-7xl mx-auto px-4 py-5">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#FF7A00] text-xs font-bold tracking-widest">
            EXPLORE COURSES BY CATEGORY
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            Find Courses in Your Interested Area
          </h2>
        </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 text-center hover:bg-[#222222] hover:border-[#FF7A00]/30 transition-all cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FF7A00]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#FF7A00]" />
                    </div>

                    <h3 className="font-bold text-sm text-white group-hover:text-[#FF7A00] transition-colors">{c.name}</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-2">{c.count}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        {/* Arrow Button */}

      </section>

      {/*Section -3 */}
      <section className="max-w-7xl mx-auto px-4 py-20">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[#FF7A00] text-xs font-bold tracking-widest mb-2">
              OUR MOST POPULAR COURSES
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Handpicked Courses for You
            </h2>
          </div>

        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, index) => (
            <article
              key={index}
              className="rounded-2xl overflow-hidden shadow hover:shadow-lg hover:-translate-y-2 transition-all group"
            >

              {/* Image */}
              <div className="relative aspect-video overflow-hidden ">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {c.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#FF7A00] text-white text-xs font-bold">
                    {c.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 space-y-3 bg-[#262626]">

                <h3 className="font-bold text-lg leading-snug min-h-[3.5rem]">
                  {c.title}
                </h3>

                <div className="flex items-center gap-1 text-xs text-[#a1a1aa]">
                  <BookOpen className="w-3.5 h-3.5" />
                  {c.category}
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#FF7A00]" fill="currentColor" />
                    {c.rating} ({c.reviews})
                  </span>

                  <span className="flex items-center gap-1 text-[#a1a1aa]">
                    <Clock className="w-3.5 h-3.5" />
                    {c.duration}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[#FF7A00]">
                    {c.price}
                  </span>
                  <span className="text-sm text-[#a1a1aa] line-through">
                    {c.original}
                  </span>
                </div>

                <button className="w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700 transition">
                  Enroll Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/*Section-4 */}
      <section className="max-w-7xl mx-auto px-4 py-12">

        <div className=" border border-[#262626] rounded-3xl p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 shadow">

          {stats.map((s) => {
            const Icon = s.icon;

            return (
              <div key={s.label} className="flex items-center gap-3">

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl border border-[#ff7a00] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#FF7A00]" />
                </div>

                {/* Text */}
                <div>
                  <div className="text-xl font-bold">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/*section -5 */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        {/* Heading */}
        <div className="text-center mb-7">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why Choose UPZY{" "}
            <span className="text-[#FF7A00]">PencilBitz</span>?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {feature.map((f) => {
            const Icon = f.icon;

            return (
              <div key={f.title} className="text-center group">

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-full  border border-[#ff7a00] flex items-center justify-center mb-4 group-hover:bg-[#262626] group-hover:shadow-md transition">
                  <Icon className="w-7 h-7 text-[#FF7A00]" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-sm mb-2">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#a1a1aa] leading-snug">
                  {f.desc}
                </p>

              </div>
            );
          })}

        </div>

      </section>
      {/*section -7 */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            How It Works
          </h2>
          <p className="text-[#a1a1aa]">
            Start your learning journey in 3 easy steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="text-center relative">

                {/* Icon + Number */}
                <div className="relative inline-block">

                  {/* Step Number */}
                  <div className="absolute -top-2 -left-2 w-9 h-9 rounded-full bg-[#FF7A00] text-white font-bold flex items-center justify-center text-sm z-10">
                    {i + 1}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-[#FF7A00]/10 border flex items-center justify-center">
                    <Icon className="w-10 h-10 text-[#FF7A00]" />
                  </div>
                </div>

                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-gray-300" />
                )}

                {/* Text */}
                <h3 className="font-bold text-lg mt-5 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#a1a1aa] max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/*Section -8 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl lg:text-4xl text-center font-bold mb-3">
          What Our Learners Say
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#16181D] border border-[#FF7A00]/30 rounded-[3rem] p-5 md:p-10 overflow-hidden text-center md:text-left"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A00]/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 flex-1">
              <div className="w-24 h-24 bg-[#FF7A00]/10 rounded-[2rem] flex items-center justify-center shrink-0">
                {/* Image */}
                <img
                  src={books}
                  alt="Books"
                  className="w-full h-full rounded-2xl object-cover hidden md:block"
                />

                {/* Text */}              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Stay Updated with New Courses!</h3>
                <p className="text-gray-400 font-medium"> Subscribe to our newsletter and never miss updates on new courses and offers.</p>
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#FF7A00] w-full md:w-64 transition-all"
              />
              <button className="bg-[#FF7A00] hover:bg-[#FFA500] text-[#0B0B0F] px-8 py-4 rounded-2xl font-black text-sm whitespace-nowrap shadow-lg shadow-[#FF7A00]/20 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>

      </section>

    </div>
  );
};

export default Home;