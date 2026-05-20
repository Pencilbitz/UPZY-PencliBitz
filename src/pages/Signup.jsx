import React, { useState } from "react";
import logo from '../assets/upzy-logo.png';
import { Link } from 'react-router-dom';

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

function Field({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  toggleable,
}) {
  const [show, setShow] = useState(false);

  const inputType = toggleable
    ? show
      ? "text"
      : "password"
    : type;

  return (
    <div className="space-y-1.5 ">
      <label className="text-sm font-medium text-gray-200">
        {label}
      </label>

      <div className="relative group">
        <Icon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-orange-400" />

        <input
          type={inputType}
          placeholder={placeholder}
          className="w-full rounded-xl border border-gray-700 bg-gray-900/60 py-3 pl-10 pr-10 text-sm text-white placeholder:text-gray-400 outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
        />

        {toggleable && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400"
          >
            {show ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default function SignupForm() {
  return (
    <div className="my-20 min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-lg p-8 sm:p-10 shadow-2xl">
        
        {/* Header */}
        <div className="mb-6  flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center  text-xs font-bold text-orange-400">
             <img className="w-full h-full object-contain" src={logo} alt="logo" />
            </div>

            <span className="rounded-md bg-orange-500 px-2 py-0.5 text-sm font-extrabold tracking-wider text-white">
              UPZY
            </span>

            <span className="text-sm font-semibold text-white">
              PencilBitz
            </span>
          </div>

          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-orange-400 hover:text-orange-300 transition">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Create Your Account
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Join UPZY PencilBitz and start your learning journey today.
        </p>

        {/* Form */}
        <form
          className="mt-7 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Field
            label="Full Name"
            icon={User}
            placeholder="Enter your full name"
          />

          <Field
            label="Email Address"
            icon={Mail}
            type="email"
            placeholder="Enter your email"
          />

          <Field
            label="Password"
            icon={Lock}
            placeholder="Create a password"
            toggleable
          />

          <Field
            label="Confirm Password"
            icon={Lock}
            placeholder="Confirm your password"
            toggleable
          />

          {/* Checkbox */}
          <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-sm text-gray-400">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 accent-orange-500"
            />

            <span>
              I agree to the{" "}
              <a href="#" className="text-orange-400 hover:underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-orange-400 hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-orange-400 shadow-lg shadow-orange-500/30"
          >
            Sign Up

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Divider */}
          <div className="relative my-2 flex items-center">
            <div className="h-px flex-1 bg-gray-700" />

            <span className="px-3 text-xs text-gray-500">
              or sign up with
            </span>

            <div className="h-px flex-1 bg-gray-700" />
          </div>

          {/* Login */}
          <p className="pt-2 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-orange-400 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.9 3.5 14.7 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-1.6H12z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="#0A66C2"
    >
      <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14M8.34 18v-7.45H5.67V18h2.67M7 9.43a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1M18.34 18v-4.08c0-2.45-1.31-3.59-3.06-3.59a2.64 2.64 0 00-2.4 1.32V10.55h-2.66V18h2.66v-4.13c0-1.09.21-2.14 1.55-2.14s1.34 1.24 1.34 2.21V18h2.57z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
    </svg>
  );
}