import React from "react";
import {
  Users,
  Lightbulb,
  BookOpen,
  Calendar,
  IndianRupee,
  Mic2,
  Mail,
  Phone,
  Globe,
  FileText,
  GraduationCap,
  CheckCircle2,
  ScanLine,
  Sparkles,
} from "lucide-react";
import img from "../../assets/Internationalconference-hero.jpg"
const topics = [
  "Interdisciplinary Research and Emerging Innovations",
  "Artificial Intelligence, Machine Learning, and Data Analytics",
  "Digital Transformation and Advanced Computing",
  "Sustainable Development and Green Technologies",
  "Smart Systems, IoT, and Intelligent Infrastructure",
  "Business Innovation, Entrepreneurship, and Global Economy",
  "Cybersecurity, Blockchain, and Cloud Computing",
  "Healthcare Innovation, Biotechnology, and Life Sciences",
  "Education Technologies and E-Learning Innovations",
  "Social Sciences, Humanities, and Policy Research",
  "Industry 4.0/5.0 and Smart Manufacturing",
  "Innovation Ecosystems and Global Development",
];

const dates = [
  {
    label: "Abstract Submission with Registration",
    date: "26.05.2026",
  },
  {
    label: "Full Paper Submission",
    date: "28.05.2026",
  },
  {
    label: "Conference Date",
    date: "30.05.2026",
  },
];

const fees = [
  { label: "Academicians", price: "₹800/-" },
  { label: "Research Scholar", price: "₹700/-" },
  { label: "Students", price: "₹600/-" },
];

const advisory = [
  {
    name: "Dr. S. Dhanabal",
    dept: "Computer Science and Engineering",
    org: "Kongunadu College of Engineering and Technology, Tamil Nadu, India",
  },
  {
    name: "Dr. Sandip Chandra",
    dept: "Department of Commerce & Management",
    org: "SEMCOM, The CVM University, Gujarat, India",
  },
  {
    name: "Dr. Pawanjeet Kaur",
    dept: "Department of Chemistry",
    org: "Symbiosis Skills and Professional University, Pune, Maharashtra, India",
  },
  {
    name: "Dr. N. Saranya",
    dept: "Department of Artificial Intelligence and Data Science",
    org: "KPR Institute of Engineering and Technology, Tamil Nadu, India",
  },
  {
    name: "Dr. Maranna T",
    dept: "Department of Mathematics",
    org: "Cauvery College, Karnataka, India",
  },
  {
    name: "Dr. H. Umamahesvari",
    dept: "Department of Physics",
    org: "Sreenivasa Institute of Technology and Management Studies (Autonomous), Andhra Pradesh, India",
  },
];

function SectionLabel({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#FF7A00]">
      <Icon className="h-4 w-4" />
      <span>{children}</span>
    </div>
  );
}

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-[#FF7A00]/10 ">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 right-[-120px] h-[450px] w-[450px] rounded-full bg-[#FF7A00]/20 blur-[120px]" />
          <div className="absolute left-[-100px] top-20 h-[300px] w-[300px] rounded-full bg-orange-600/10 blur-[120px]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FF7A00]">
              INTERNATIONAL E-CONFERENCE ON
            </p>

            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              <span className="block">Interdisciplinary</span>
              <span className="block">Research</span>
              <span className="block bg-gradient-to-r from-[#FF7A00] to-[#d66a05] bg-clip-text text-transparent">
                And Global
              </span>
              <span className="block bg-gradient-to-r from-[#FF7A00] to-[#d66a05] bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#FF7A00] px-6 py-3">
              <Sparkles className="h-4 w-4 text-[#FF7A00]" />
              <span className="font-bold text-[#FF7A00]">
                ICIRGI – 2026
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#Register"
                className="rounded-full bg-[#FF7A00] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#FF7A00]/20 transition-all hover:bg-orange-600 hover:scale-105"
              >
                Register Now
              </a>

              <div className="flex flex-wrap gap-3">
                {["Innovate", "Collaborate", "Inspire", "Transform"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative lg:ml-auto">
            {/* Background Glow */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#FF7A00]/20 to-orange-600/10 blur-2xl" />
            
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#1A1A1A] shadow-2xl lg:w-[500px]">
              <img 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"  
                src={img} 
                alt="International Conference" 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-3">
        {/* ABOUT */}
        <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
          <SectionLabel icon={Users}>
            About the Conference
          </SectionLabel>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-400 text-justify">
            <p>
              The International E-Conference on
              Interdisciplinary Research and Global
              Innovation (ICIRGI – 2026) is a premier
              virtual platform that brings together
              researchers, academicians, industry
              professionals, and students from across
              the globe.
            </p>

            <p>
              The conference emphasizes emerging
              trends, digital transformation,
              sustainability, and innovation-driven
              development.
            </p>

            <p>
              This conference provides an excellent
              opportunity for participants to present
              research, engage in discussions, and
              build global academic networks.
            </p>
          </div>
        </div>

        {/* TOPICS */}
        <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
          <SectionLabel icon={BookOpen}>
            Conference Topics
          </SectionLabel>

          <ul className="mt-5 space-y-3">
            {topics.map((topic) => (
              <li
                key={topic}
                className="flex gap-3 text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF7A00]" />

                <span className="text-zinc-400">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* DATES + FEES */}
        <div className="space-y-6">
          {/* DATES */}
          <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
            <SectionLabel icon={Calendar}>
              Important Dates
            </SectionLabel>

            <div className="mt-5 space-y-3">
              {dates.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF7A00]/10">
                      <FileText className="h-4 w-4 text-[#FF7A00]" />
                    </div>

                    <span className="text-sm">
                      {item.label}
                    </span>
                  </div>

                  <span className="font-bold text-[#FF7A00]">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FEES */}
          <div  className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
            <SectionLabel icon={IndianRupee}>
              Registration Fee
            </SectionLabel>

            <div className="mt-5 space-y-3">
              {fees.map((fee) => (
                <div
                  key={fee.label}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-[#FF7A00]" />

                    <span>{fee.label}</span>
                  </div>

                  <span className="font-bold text-[#FF7A00]">
                    {fee.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-3">
        {/* CONVENER */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
            <SectionLabel icon={Users}>
              Convener
            </SectionLabel>

            <div className="mt-5">
              <p className="text-xl font-bold">
                Dr. Baskar Kandasamy
              </p>

              <p className="mt-2 flex items-center gap-2 text-[#FF7A00]">
                <Phone className="h-4 w-4" />
                9344810452
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
            <SectionLabel icon={Users}>
              Co-Convener
            </SectionLabel>

            <div className="mt-5">
              <p className="text-xl font-bold">
                Ms. R. Jona
              </p>

              <p className="mt-2 flex items-center gap-2 text-[#FF7A00]">
                <Phone className="h-4 w-4" />
                9047163832
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
            <SectionLabel icon={Mail}>
              Email
            </SectionLabel>

            <p className="mt-5 break-all font-semibold text-[#FF7A00]">
              icirgi26@gmail.com
            </p>
          </div>
        </div>

        {/* SPEAKERS */}
        <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
          <SectionLabel icon={Mic2}>
            Keynote Speakers
          </SectionLabel>

          <div className="mt-6 space-y-8">
            <div className="flex gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7A00] to-orange-600 text-2xl font-bold text-white shadow-lg">
                JR
              </div>

              <div>
                <p className="text-lg font-bold">
                  Dr Jiwak Raj Bajracharya
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  Academic Dean and Principal
                </p>

                <p className="text-sm text-zinc-400">
                  Global Academy of Tourism and
                  Hospitality Education
                </p>

                <p className="mt-1 text-sm text-[#FF7A00]">
                  Bagmati, Nepal
                </p>
              </div>
            </div>

            <div className="border-t border-white/5" />

            <div className="flex gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7A00] to-orange-600 text-2xl font-bold text-white shadow-lg">
                AC
              </div>

              <div>
                <p className="text-lg font-bold">
                  Dr Anupama Chowdhury
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  Principal
                </p>

                <p className="text-sm text-zinc-400">
                  Women's College Calcutta
                </p>

                <p className="mt-1 text-sm text-[#FF7A00]">
                  West Bengal, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* REGISTER */}
        <div id="Register" className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 text-center shadow-xl transition-all hover:border-[#FF7A00]/30">
            <p className="text-2xl font-extrabold text-[#FF7A00]">
              SCAN TO REGISTER
            </p>

            <div className="mx-auto mt-5 flex h-48 w-48 items-center justify-center rounded-3xl bg-white">
             <img src="https://img.sanishtech.com/u/3bb32d5a6c680731452ec82e4d213709.jpeg" alt="" />
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Scan QR code with your phone
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
            <SectionLabel icon={FileText}>
              Submission Guidelines
            </SectionLabel>

            <p className="mt-5 text-sm leading-relaxed text-zinc-400">
              Authors are requested to submit a soft
              copy of their full paper(s) typed in
              single column format on A4 size paper
              in Microsoft Word format.
            </p>
          </div>
        </div>
      </section>

      {/* ADVISORY */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl">
          <SectionLabel icon={Users}>
            Advisory Committee
          </SectionLabel>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advisory.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-white/5 bg-white/5 p-5 transition-all hover:bg-white/10"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7A00]/10">
                    <GraduationCap className="h-5 w-5 text-[#FF7A00]" />
                  </div>

                  <p className="font-bold text-[#FF7A00]">
                    {item.name}
                  </p>
                </div>

                <p className="text-sm font-medium">
                  {item.dept}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {item.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0B0B0F]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-sm md:grid-cols-4">
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-[#FF7A00]" />

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Website
              </p>

              <p className="font-semibold text-[#FF7A00]">
                www.upzypencilbitz.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-[#FF7A00]" />

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Email
              </p>

              <p className="font-semibold">
                icirgi26@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-[#FF7A00]" />

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Contact
              </p>

              <p className="font-semibold">
                +91 93448 10452
              </p>
            </div>
          </div>

          <div className="italic text-[#FF7A00] md:text-right">
            Join us to shape the{" "}
            <span className="font-bold">
              future
            </span>{" "}
            through research and innovation!
          </div>
        </div>
      </footer>
    </main>
  );
}