import React from "react";
import {
  Calendar,
  Clock,
  Radio,
  Brain,
  TrendingUp,
  Bot,
  Lightbulb,
  Award,
  Users,
  MessageCircleQuestion,
  PlayCircle,
  ChevronRight,
  IndianRupee,
  Lock,
} from "lucide-react";

import heroImg from "../../assets/webinar-ai.png";
import speakerImg from "../../assets/speaker-1.png";

export default function WebinarPage() {
  const features = [
    {
      Icon: Brain,
      title: "Understanding AI",
      subtitle: "in Simple Terms",
    },
    {
      Icon: TrendingUp,
      title: "Real-World AI",
      subtitle: "Applications",
    },
    {
      Icon: Bot,
      title: "Future Trends",
      subtitle: "and Opportunities",
    },
    {
      Icon: Lightbulb,
      title: "AI Tools You Can",
      subtitle: "Use Today",
    },
  ];

  const benefits = [
    {
      Icon: Award,
      title: "Certificate of Participation",
      desc: "Get e-certificate for all participants",
    },
    {
      Icon: Users,
      title: "Live Interaction",
      desc: "Interact with expert in real-time",
    },
    {
      Icon: MessageCircleQuestion,
      title: "Q&A Session",
      desc: "Get your questions answered live",
    },
    {
      Icon: PlayCircle,
      title: "Recording Access",
      desc: "Access webinar recording for limited time",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white my-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-6">
          
          {/* LEFT SIDE */}
          <div className="space-y-6">
            
            {/* HERO SECTION */}
            <div className="bg-[#0f0f0f] border border-orange-500/20 rounded-3xl p-6 md:p-8 shadow-[0_0_30px_rgba(255,115,0,0.08)]">
              
              {/* BREADCRUMB */}
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span>Webinars</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">
                  The Future of AI
                </span>
              </div>

              {/* CONTENT */}
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* IMAGE */}
                <img
                  src={heroImg}
                  alt="AI Webinar"
                  className="w-full h-72 md:h-full object-cover rounded-2xl border border-orange-500/30"
                />

                {/* TEXT */}
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    The Future of AI in Everyday Life
                  </h1>

                  <p className="mt-5 text-gray-400 leading-8">
                    Explore how AI is transforming industries and our daily
                    lives. Learn about the latest trends, real-world
                    applications, and the future opportunities in AI.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <span>16 May 2025</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-orange-500" />
                      <span>Friday, 7:00 PM IST</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Radio className="w-5 h-5 text-orange-500" />
                      <span>Live Online Webinar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SPEAKER SECTION */}
            <div className="bg-[#0f0f0f] border border-orange-500/20 rounded-3xl p-6 md:p-8">
              
              <h2 className="text-2xl font-bold relative inline-block">
                About the Speaker
                <span className="absolute left-0 -bottom-2 w-16 h-[2px] bg-orange-500"></span>
              </h2>

              <div className="mt-8 grid md:grid-cols-[180px_1fr] gap-6 items-start">
                
                {/* SPEAKER IMAGE */}
                <img
                  src={speakerImg}
                  alt="Speaker"
                  className="w-40 h-40 object-cover rounded-full border-4 border-orange-500 shadow-[0_0_25px_rgba(255,115,0,0.25)]"
                />

                {/* SPEAKER INFO */}
                <div>
                  <h3 className="text-3xl font-bold text-orange-500">
                    Dr. Rohan Mehta
                  </h3>

                  <p className="mt-2 text-lg font-medium">
                    AI Researcher & Industry Expert
                  </p>

                  <p className="mt-4 text-gray-400 leading-8">
                    Dr. Rohan Mehta has over 10 years of experience in
                    Artificial Intelligence, Machine Learning, and Data Science.
                    He has worked with global tech companies and trained
                    thousands of students and professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* WHAT YOU'LL LEARN */}
            <div>
              <h2 className="text-2xl font-bold relative inline-block">
                What You'll Learn
                <span className="absolute left-0 -bottom-2 w-16 h-[2px] bg-orange-500"></span>
              </h2>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map(({ Icon, title, subtitle }, index) => (
                  <div
                    key={index}
                    className="bg-[#0f0f0f] border border-orange-500/10 rounded-2xl p-5 hover:border-orange-500/40 transition"
                  >
                    <Icon className="w-10 h-10 text-orange-500 mb-4" />

                    <h3 className="font-semibold leading-7">
                      {title}
                      <br />
                      {subtitle}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <aside className="bg-[#0f0f0f] border border-orange-500/20 rounded-3xl p-6 md:p-8 h-fit sticky top-10 shadow-[0_0_30px_rgba(255,115,0,0.08)]">
            
            <h2 className="text-orange-500 text-xl font-bold">
              Registration Details
            </h2>

            {/* PRICE CARD */}
            <div className="mt-5 border border-orange-500 rounded-2xl p-4 flex items-center justify-between">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center">
                  <IndianRupee className="text-orange-500 w-5 h-5" />
                </div>

                <span className="font-semibold">
                  Registration Fee
                </span>
              </div>

              <span className="text-4xl font-bold text-orange-500">
                ₹499
              </span>
            </div>

            {/* FORM */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold">
                Register Now
              </h3>

              <form className="mt-6 space-y-5">
                
                {[
                  {
                    label: "Full Name",
                    type: "text",
                    placeholder: "Enter your full name",
                  },
                  {
                    label: "Email Address",
                    type: "email",
                    placeholder: "Enter your email",
                  },
                  {
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "Enter your phone number",
                  },
                  {
                    label: "College / Organization",
                    type: "text",
                    placeholder: "Enter your college or organization",
                  },
                ].map((field, index) => (
                  <div key={index}>
                    <label className="text-sm font-medium">
                      {field.label}
                      <span className="text-orange-500"> *</span>
                    </label>

                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full mt-2 bg-[#151515] border border-orange-500/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 text-white placeholder:text-gray-500"
                    />
                  </div>
                ))}

                {/* COUNTRY */}
                <div>
                  <label className="text-sm font-medium">
                    Country
                    <span className="text-orange-500"> *</span>
                  </label>

                  <select className="w-full mt-2 bg-[#151515] border border-orange-500/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 text-white">
                    <option>Select your country</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                </div>

                {/* BUTTON */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 transition rounded-xl py-3 font-bold text-black">
                  Register Now
                </button>

                {/* SECURITY */}
                <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <Lock className="w-4 h-4 text-orange-500" />
                  Your information is secure with us.
                </p>
              </form>
            </div>
          </aside>
        </div>

        {/* BENEFITS */}
        <div className="mt-8 bg-[#0f0f0f] border border-orange-500/20 rounded-3xl p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {benefits.map(({ Icon, title, desc }, index) => (
            <div key={index} className="flex gap-4">
              
              <Icon className="w-10 h-10 text-orange-500 shrink-0" />

              <div>
                <h3 className="font-bold">
                  {title}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}