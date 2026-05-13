import React, { useState } from "react";
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
    <section className="max-w-7xl mx-auto px-6 py-20 my-10">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold">
            Get In Touch
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            We're Here to <br />
            <span className="text-orange-500">Help You Succeed!</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Have questions or need assistance? Our team is ready to support you.
          </p>

          <div className="mt-10 space-y-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-zinc-900 p-4 rounded-2xl border border-zinc-800"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 2500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl"
    >
      <h2 className="text-3xl font-bold text-orange-500 mb-6">
        Send Us a Message
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field icon={User} placeholder="Your Name" />
        <Field icon={Mail} type="email" placeholder="Your Email" />
        <Field icon={Tag} placeholder="Subject" />
        <Field icon={Phone} placeholder="Phone Number" />
      </div>

      <div className="mt-4 relative">
        <Pencil className="absolute left-4 top-4 w-4 h-4 text-gray-400" />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full bg-black border border-zinc-700 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-orange-500"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 transition font-semibold flex items-center justify-center gap-2"
      >
        {sent ? "Message Sent!" : "Send Message"}
        <Send className="w-4 h-4" />
      </button>

      <p className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-2">
        <Lock className="w-3 h-3" />
        We respect your privacy.
      </p>
    </form>
  );
}

function Field({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

      <input
        {...props}
        className="w-full h-12 bg-black border border-zinc-700 rounded-xl pl-11 pr-4 text-sm focus:outline-none focus:border-orange-500"
      />
    </div>
  );
}

function Channels() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Get in Touch
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {channels.map(({ icon: Icon, title, desc, info, cta }) => (
          <div
            key={title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:-translate-y-2 transition"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
              <Icon className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="text-gray-400 text-sm mt-2">{desc}</p>

            <p className="text-orange-500 text-sm mt-3">{info}</p>

            {cta && (
              <button className="mt-4 inline-flex items-center gap-2 text-orange-500 font-semibold">
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
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <h2 className="text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <button className="text-orange-500 font-semibold flex items-center gap-2">
          View All FAQs
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => {
          const isOpen = open === index;

          return (
            <div
              key={faq.q}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <span>{faq.q}</span>

                <ChevronDown
                  className={`w-5 h-5 transition ${
                    isOpen ? "rotate-180 text-orange-500" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-sm text-gray-400">
                  {faq.a}
                </div>
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
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="w-24 h-24 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
          <Mailbox className="w-10 h-10" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold">
            Stay Updated with New Courses & Offers
          </h3>

          <p className="text-gray-400 mt-2">
            Subscribe to our newsletter and never miss an update.
          </p>
        </div>

        <form className="flex w-full md:w-auto gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 md:w-72 h-12 px-4 rounded-xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-orange-500"
          />

          <button className="h-12 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 transition font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}