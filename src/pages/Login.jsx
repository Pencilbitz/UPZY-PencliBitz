import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Check,
  BookOpen,
  Users,
  Play,
  Award,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";
import { Link } from 'react-router-dom';

import heroImg from "../assets/Login-student.png";
import Signup from "./Signup"
function SocialButton({ label, icon }) {
  return (
    <button
      type="button"
      className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl border border-gray-700 bg-zinc-900 text-white text-sm font-medium hover:border-orange-500 hover:bg-zinc-800 transition-all duration-300"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function StatCard({
  icon: Icon,
  title,
  subtitle,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`bg-zinc-900/80 backdrop-blur-xl border border-orange-500/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_0_25px_rgba(255,115,0,0.15)] ${className}`}
    >
      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-orange-500 text-white shadow-[0_0_20px_rgba(255,115,0,0.5)] shrink-0">
        <Icon size={18} />
      </div>

      <div className="leading-tight">
        <div className="text-white font-bold text-sm">
          {title}
        </div>

        <div className="text-gray-400 text-xs">
          {subtitle}
        </div>
      </div>
    </motion.div>
  );
}

function LoginCard() {
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-md rounded-3xl border border-orange-500/20 bg-zinc-950/80 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(255,115,0,0.15)]"
    >
      {/* Back to Home Link */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-orange-500 hover:text-orange-400 transition">
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div>
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl border border-orange-500/10 pointer-events-none" />

      {/* Heading */}
      <h2 className="text-3xl font-bold text-white">
        Welcome Back!
      </h2>

      <p className="text-gray-400 text-sm mt-2">
        Login to continue your learning journey
      </p>

      {/* Form */}
      <form
        className="mt-7 space-y-5"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Email */}
        <div>
          <label className="text-sm font-medium text-white">
            Email Address
          </label>

          <div className="mt-2 relative">
            <Mail
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 pl-11 pr-4 rounded-xl bg-zinc-900 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-white">
            Password
          </label>

          <div className="mt-2 relative">
            <Lock
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"
            />

            <input
              type={showPw ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full h-12 pl-11 pr-11 rounded-xl bg-zinc-900 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
            />

            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
            >
              {showPw ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Remember */}
        <div className="flex items-center justify-between text-sm">
          <button
            type="button"
            onClick={() => setRemember(!remember)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <span
              className={`h-4 w-4 rounded border flex items-center justify-center ${
                remember
                  ? "bg-orange-500 border-orange-500"
                  : "border-gray-600"
              }`}
            >
              {remember && (
                <Check size={12} className="text-white" />
              )}
            </span>

            Remember me
          </button>

          <a
            href="#"
            className="text-orange-500 hover:text-orange-400 font-medium"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,115,0,0.5)]"
        >
          Login

          <ArrowRight size={18} />
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="h-px flex-1 bg-gray-700" />
          or continue with
          <div className="h-px flex-1 bg-gray-700" />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-3">
          <SocialButton
            label="Google"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.2s2.7-6.2 6-6.2c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.2 14.5 2.2 12 2.2 6.7 2.2 2.4 6.5 2.4 12s4.3 9.8 9.6 9.8c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6L12 10.2z"
                />
              </svg>
            }
          />

          <SocialButton
            label="LinkedIn"
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#0A66C2"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18.3v-7.6H5.8v7.6h2.5zm-1.3-8.6a1.4 1.4 0 1 0 0-2.9 1.4 1.4 0 0 0 0 2.9zm11.3 8.6V14c0-2.2-1.2-3.3-2.8-3.3-1.3 0-1.9.7-2.2 1.2v-1H10.7l.1 7.6h2.5v-4.2c0-.2 0-.5.1-.6.2-.5.6-.9 1.3-.9.9 0 1.3.7 1.3 1.7v4h2.4z" />
              </svg>
            }
          />

          <SocialButton
            label="GitHub"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2z" />
              </svg>
            }
          />
        </div>

        {/* Signup */}
        <p className="text-center text-sm text-gray-400">
          Don't have an account?{" "}
             <div className="flex items-center justify-center gap-2">
                <Link to="/signup" className="text-orange-500 hover:text-orange-400"> Sign up</Link>
                <ArrowRight size={18} className="text-orange-500 hover:text-orange-400" />
             </div>
        </p>
      </form>
    </motion.div>
  );
}

function HeroShowcase() {
  return (
    <div className="my-12 relative h-full min-h-[640px] flex flex-col justify-center px-6 lg:px-12 py-10">

      {/* Glow Effects */}
      <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />

      <div className="absolute bottom-20 left-10 h-60 w-60 rounded-full bg-orange-500/10 blur-[100px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-md"
      >
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
          Learn.
          <br />

          <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(255,115,0,0.7)]">
            Build.
          </span>

          <br />
          Succeed.
        </h1>

        <p className="text-gray-400 mt-5 text-base lg:text-lg leading-relaxed">
          Empowering learners with the skills of tomorrow.
        </p>
      </motion.div>

      {/* Image */}
      <div className="relative mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden border border-orange-500/20 shadow-[0_0_40px_rgba(255,115,0,0.2)]"
        >
          <img
            src={heroImg}
            alt="Student learning"
            className="w-full h-auto object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Floating Cards */}
        <div className="absolute -top-4 -left-4 hidden sm:block">
          <StatCard
            icon={BookOpen}
            title="150+"
            subtitle="Courses"
            delay={0.4}
          />
        </div>

        <div className="absolute top-1/3 -left-6 hidden md:block">
          <StatCard
            icon={Users}
            title="10K+"
            subtitle="Active Learners"
            delay={0.6}
          />
        </div>

        <div className="absolute -top-4 -right-4 hidden sm:block">
          <StatCard
            icon={Play}
            title="Learn"
            subtitle="Anytime, Anywhere"
            delay={0.5}
          />
        </div>

        <div className="absolute top-1/2 -right-6 hidden md:block">
          <StatCard
            icon={Award}
            title="Get Certified"
            subtitle="Boost Your Career"
            delay={0.7}
          />
        </div>

        <div className="absolute -bottom-4 right-10 hidden sm:block">
          <StatCard
            icon={TrendingUp}
            title="Track Progress"
            subtitle="Achieve Goals"
            delay={0.8}
          />
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black grid lg:grid-cols-2 overflow-hidden">

      {/* Left Side */}
      <div className="flex items-center justify-center px-6 py-12">
        <LoginCard />
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex items-center justify-center relative">
        <HeroShowcase />
      </div>
    </div>
  );
}