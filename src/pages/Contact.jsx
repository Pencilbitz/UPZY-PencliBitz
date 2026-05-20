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
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-orange-500/30">
      <Hero />
      <Channels />
      <FAQ />
      <Newsletter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 md:pb-24 lg:pb-32">
      {/* Background Decorative Elements - Adjusted sizing and blur for smaller devices */}
      <div className="absolute top-0 right-0 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] bg-orange-500/10 rounded-full blur-[80px] sm:blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-indigo-500/5 rounded-full blur-[70px] sm:blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] border border-orange-500/20  text-xs font-black uppercase tracking-[0.2em] mb-8">
            <MessageCircle className="w-3 h-3" /> Get In Touch
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
        <div className="text-left order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6 sm:mb-8">
            <MessageCircle className="w-3.5 h-3.5" /> Get In Touch
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-black leading-[1.15] md:leading-[1.1] tracking-tight mb-6 sm:mb-8">
            Let's Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Conversation
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mb-10 sm:mb-12 leading-relaxed font-medium">
            Have a project in mind or just want to say hi? We're here to help you navigate your learning journey.
          </p>

          {/* Dynamic grid that adapts gracefully based on context screen size */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start sm:items-center gap-4 sm:gap-5 bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-5 rounded-2xl hover:border-orange-500/30 transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white mb-0.5 sm:mb-1">{title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-normal">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 lg:order-2 w-full max-w-2xl mx-auto lg:max-w-none">
          <div className="absolute -inset-2 sm:-inset-4 bg-orange-500/10 rounded-[2rem] sm:rounded-[3rem] blur-xl sm:blur-2xl -z-10"></div>
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
      className="bg-[#16161D] border border-white/5 rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-8 xl:p-10 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
      
      <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8 tracking-tight">
        Send us a <span className="text-orange-500">Message</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <Field icon={User} type="text" placeholder="Full Name" required />
        <Field icon={Mail} type="email" placeholder="Email Address" required />
        <Field icon={Tag} type="text" placeholder="Interest Topic" />
        <Field icon={Phone} type="tel" placeholder="Phone Number" />
      </div>

      <div className="mt-4 sm:mt-5 relative group">
        <Pencil className="absolute left-4 top-4 w-4 h-4 text-zinc-500 group-focus-within:text-orange-500 transition-colors" />
        <textarea
          rows={4}
          placeholder="How can we help you?"
          required
          className="w-full bg-black/50 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all placeholder:text-zinc-600 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={sent}
        className={`mt-6 sm:mt-8 w-full h-12 sm:h-14 rounded-2xl font-black text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3 shadow-xl ${
          sent 
            ? "bg-teal-500 text-white" 
            : "bg-[#FF7A00] hover:bg-orange-600 text-[#0B0B0F] hover:shadow-orange-500/20"
        }`}
      >
        {sent ? "Message Received!" : "Send Message"}
        <Send className={`w-4 h-4 ${sent ? 'animate-bounce' : ''}`} />
      </button>

      <div className="mt-5 sm:mt-6 flex items-center justify-center gap-2.5 text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest">
        <Lock className="w-3.5 h-3.5 text-zinc-600" />
        Secure & Private
      </div>
    </form>
  );
}

function Field({ icon: Icon, ...props }) {
  return (
    <div className="relative group w-full">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-orange-500 transition-colors" />
      <input
        {...props}
        className="w-full h-12 sm:h-14 bg-black/50 border border-white/10 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all placeholder:text-zinc-600"
      />
    </div>
  );
}

function Channels() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Support Channels</h2>
        <div className="w-16 sm:w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {channels.map(({ icon: Icon, title, desc, info, cta }) => (
          <div
            key={title}
            className="group bg-[#16161D] border border-white/5 rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-8 text-center hover:border-orange-500/30 transition-all duration-500 lg:hover:-translate-y-2 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                <Icon className="w-6 h-6 sm:w-7 h-7" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
              <p className="text-zinc-500 text-xs sm:text-sm mb-4 leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
            
            <div>
              <div className="h-px w-8 bg-white/10 mx-auto mb-4 group-hover:w-16 transition-all"></div>
              <p className="text-white font-bold text-xs sm:text-sm mb-5 break-words px-2">{info}</p>

              {cta ? (
                <button className="inline-flex items-center gap-2 text-orange-500 font-black text-[10px] sm:text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  {cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div className="h-4" /> /* Balance placeholder spacing alignment */
              )}
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-black mb-3 sm:mb-4 tracking-tight">
            Still Have <span className="text-orange-500">Questions?</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 font-medium leading-relaxed">
            Quick answers to the most common questions about our platform and courses.
          </p>
        </div>

        <button className="w-full sm:w-auto px-5 py-3 shrink-0 bg-white/5 border border-white/10 rounded-xl text-orange-500 font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
          View All FAQs
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {faqs.map((faq, index) => {
          const isOpen = open === index;

          return (
            <div
              key={faq.q}
              className={`group rounded-xl sm:rounded-2xl transition-all duration-300 border ${
                isOpen 
                  ? "bg-white/5 border-orange-500/30" 
                  : "bg-[#16161D] border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4"
              >
                <span className={`font-bold text-sm sm:text-base transition-colors ${isOpen ? "text-orange-500" : "text-white"}`}>
                  {faq.q}
                </span>

                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                  isOpen ? "bg-orange-500 text-[#0B0B0F] rotate-180" : "bg-white/5 text-zinc-500"
                }`}>
                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
      {/* Fixed styling layout property name format */}
      <div className="relative bg-gradient-to-br from-orange-600 to-amber-600 rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 flex flex-col border-2 border-orange-500/30 lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden shadow-2xl shadow-orange-500/20">
        
        {/* Decorative Background Patterns */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-[60px] sm:blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-black/10 rounded-full blur-[40px] sm:blur-[60px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-2xl sm:rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner">
          <Mailbox className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        </div>

        <div className="flex-1 text-center lg:text-left relative z-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight leading-snug sm:leading-tight">
            Stay Updated with New <br className="hidden sm:block" /> Courses & Special Offers
          </h3>

          <p className="text-white/90 text-sm sm:text-base font-medium max-w-md mx-auto lg:mx-0">
            Join 10,000+ learners. No spam, only high-quality updates.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row w-full lg:w-auto gap-3.5 relative z-10 w-full max-w-md lg:max-w-none">
          <input
            type="email"
            placeholder="Enter your professional email"
            required
            className="w-full lg:w-72 xl:w-80 h-12 sm:h-14 px-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/20 transition-all font-bold text-sm"
          />

          <button type="submit" className="w-full sm:w-auto shrink-0 h-12 sm:h-14 px-8 rounded-2xl bg-[#FF7A00] text-[#0B0B0F] hover:bg-[#e07000] active:scale-[0.98] transition-all font-black uppercase tracking-widest text-xs sm:text-sm shadow-xl">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}