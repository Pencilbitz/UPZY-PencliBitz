import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headphones,
  Users,
  ShieldCheck,
  User,
  Mail,
  Tag,
  Phone,
  Pencil,
  Send,
  Lock,
  MessageCircle,
  MapPin,
  ChevronDown,
  ArrowRight,
  Mailbox,
} from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Quick Support",
    desc: "We reply within 24 hours",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "Get help from our learning experts",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Trusted",
    desc: "Your satisfaction is our priority",
  },
];

const channels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    desc: "Chat with our support team",
    info: "Mon - Sat | 9AM - 7PM",
    cta: "Start Chat",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "Drop us an email anytime",
    info: "support@upzypencilbitz.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    desc: "Speak with our experts",
    info: "+91 12345 67890",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    desc: "Our registered office",
    info: "Coimbatore, Tamil Nadu, India",
  },
];

const faqs = [
  {
    q: "How can I enroll in a course?",
    a: "Browse our catalog, pick a course, and click Enroll. You'll get instant access after checkout.",
  },
  {
    q: "How do I access my purchased course?",
    a: "Sign in to your account and head to My Courses.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cards, UPI, net banking, and major wallets.",
  },
  {
    q: "Do you provide certificates?",
    a: "Yes — every completed course includes a certificate.",
  },
  {
    q: "Can I get a refund if I'm not satisfied?",
    a: "We offer a 7-day refund policy.",
  },
  {
    q: "I'm facing an issue. How can you help?",
    a: "Reach out via live chat or email.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Channels />
      <FAQ />
      <Newsletter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-8">
            <MessageCircle className="w-3 h-3" /> Get In Touch
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8">
            Let's Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Conversation
            </span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-lg mb-12 leading-relaxed font-medium">
            Have a project in mind or just want to say hi? We're here to help you navigate your learning journey.
          </p>

          <div className="grid sm:grid-cols-1 gap-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-5 bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:border-orange-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-bold text-white mb-1">{title}</h3>
                  <p className="text-sm text-zinc-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-orange-500/10 rounded-[3rem] blur-2xl -z-10"></div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#16161D] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
      
      <h2 className="text-3xl font-black text-white mb-8 tracking-tight">
        Send us a <span className="text-orange-500">Message</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field icon={User} placeholder="Full Name" />
        <Field icon={Mail} type="email" placeholder="Email Address" />
        <Field icon={Tag} placeholder="Interest Topic" />
        <Field icon={Phone} placeholder="Phone Number" />
      </div>

      <div className="mt-5 relative group">
        <Pencil className="absolute left-4 top-4 w-4 h-4 text-zinc-500 group-focus-within:text-orange-500 transition-colors" />
        <textarea
          rows={5}
          placeholder="How can we help you?"
          className="w-full bg-black/50 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all placeholder:text-zinc-600"
        />
      </div>

      <button
        type="submit"
        disabled={sent}
        className={`mt-8 w-full h-14 rounded-2xl font-black text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3 shadow-xl ${
          sent 
            ? "bg-teal-500 text-white" 
            : "bg-[#FF7A00] hover:bg-orange-600 text-[#0B0B0F] hover:shadow-orange-500/20"
        }`}
      >
        {sent ? "Message Received!" : "Send Message"}
        <Send className={`w-4 h-4 ${sent ? 'animate-bounce' : ''}`} />
      </button>

      <div className="mt-6 flex items-center justify-center gap-3 text-xs font-bold text-zinc-500 uppercase tracking-widest">
        <Lock className="w-3.5 h-3.5 text-zinc-600" />
        Secure & Private
      </div>
    </form>
  );
}

function Field({ icon: Icon, ...props }) {
  return (
    <div className="relative group">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-orange-500 transition-colors" />

      <input
        {...props}
        className="w-full h-14 bg-black/50 border border-white/10 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all placeholder:text-zinc-600"
      />
    </div>
  );
}

function Channels() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4">Support Channels</h2>
        <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {channels.map(({ icon: Icon, title, desc, info, cta }) => (
          <div
            key={title}
            className="group bg-[#16161D] border border-white/5 rounded-[2rem] p-8 text-center hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
              <Icon className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-zinc-500 text-sm mb-4 leading-relaxed">{desc}</p>
            <div className="h-px w-8 bg-white/10 mx-auto mb-4 group-hover:w-16 transition-all"></div>
            <p className="text-white font-bold text-sm mb-6">{info}</p>

            {cta && (
              <button className="inline-flex items-center gap-2 text-orange-500 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                {cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black mb-4 tracking-tight">
            Still Have <span className="text-orange-500">Questions?</span>
          </h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            Quick answers to the most common questions about our platform and courses.
          </p>
        </div>

        <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-orange-500 font-bold text-sm hover:bg-white/10 transition-all flex items-center gap-2">
          View All FAQs
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {faqs.map((faq, index) => {
          const isOpen = open === index;

          return (
            <div
              key={faq.q}
              className={`group rounded-2xl transition-all duration-500 border ${
                isOpen 
                  ? "bg-white/5 border-orange-500/30" 
                  : "bg-[#16161D] border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className={`font-bold transition-colors ${isOpen ? "text-orange-500" : "text-white"}`}>
                  {faq.q}
                </span>

                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                  isOpen ? "bg-orange-500 text-[#0B0B0F] rotate-180" : "bg-white/5 text-zinc-500"
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="relative bg-linear-gradient-to-br from-orange-600 to-amber-600 rounded-[2rem] p-7 lg:p-8 flex flex-col border-2 border-orange-500/30 lg:flex-row items-center gap-12 overflow-hidden shadow-2xl shadow-orange-500/30">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[60px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner">
          <Mailbox className="w-10 h-10 lg:w-14 lg:h-14" />
        </div>

        <div className="flex-1 text-center lg:text-left relative z-10">
          <h3 className="text-3xl font-black text-white mb-2 tracking-tight leading-tight">
            Stay Updated with New <br /> Courses & Special Offers
          </h3>

          <p className="text-white/80 text-lg font-medium">
            Join 10,000+ learners. No spam, only high-quality updates.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row w-full lg:w-auto gap-4 relative z-10">
          <input
            type="email"
            placeholder="Enter your professional email"
            className="flex-1 lg:w-80 h-14 px-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all font-bold"
          />

          <button className="h-14 px-10 rounded-2xl bg-[#FF7A00] text-[#0B0B0F] hover:bg-[#e07000] transition-all font-black uppercase tracking-widest text-sm shadow-xl">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}