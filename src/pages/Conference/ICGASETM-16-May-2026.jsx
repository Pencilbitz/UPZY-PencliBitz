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
  Download,
  Link,
  Award,
  FileStack,
} from "lucide-react";
import certIcon from "../../assets/Conference/ICGASETM 16 May 2026/certificate-icon-3d.png"
import proceedingIcon from "../../assets/Conference/ICGASETM 16 May 2026/proceeding-icon-3d.png"
import brochure from "../../assets/Conference/ICGASETM 16 May 2026/ICGASETM 16 May 2026.jpeg"
import keynote1 from "../../assets/Conference/ICGASETM 16 May 2026/Dr.Venkateswaran Radhakrishnan(Speaker 1).png"
import keynote2 from "../../assets/Conference/ICGASETM 16 May 2026/Prof.Mohit Tiwari(Speaker 2).png"
import KharmegaSundararajG from "../../assets/Conference/ICGASETM 16 May 2026/Kharmega.jpeg"
import NagavaliSaka from "../../assets/Conference/ICGASETM 16 May 2026/Nagavali Saka.jpeg"
import SomanthKisan from "../../assets/Conference/ICGASETM 16 May 2026/Somanth Kisan.jpeg"
import Anusha from "../../assets/Conference/ICGASETM 16 May 2026/Anusha.jpeg"
import PracheeSharma from "../../assets/Conference/ICGASETM 16 May 2026/Prachee Sharma.jpeg"
import MarannaT from "../../assets/Conference/ICGASETM 16 May 2026/Maranna T.jpeg"
import KrishnaSudha from "../../assets/Conference/ICGASETM 16 May 2026/Krishna Sudha.jpeg"
import CHAmanulla from "../../assets/Conference/ICGASETM 16 May 2026/CH Amanulla.jpeg"
import ICGASETMCERTIFICATE from "../../assets/Conference/ICGASETM 16 May 2026/ICGASETM Conference Certificates.pdf"
const topics = [
  "Artificial Intelligence and Data Science",
  "Emerging Technologies",
  "Advanced Engineering and Manufacturing",
  "Sustainable Energy and Environment",
  "Computer Science and IT Systems",
  "Business, Management and FinTech",
  "Healthcare and Biotechnology",
  "Interdisciplinary Research and Innovation",
];

const dates = [
  {
    label: "Abstract Submission with registration",
    date: "12.05.2026",
  },
  {
    label: "Full Paper Submission",
    date: "14.05.2026",
  },
  {
    label: "Conference Date",
    date: "16.05.2026",
  },
];

const fees = [
  { label: "Academicians", price: "₹500/-" },
  { label: "Research Scholar", price: "₹400/-" },
  { label: "Students", price: "₹300/-" },
];

const advisory = [
  {
    image: KharmegaSundararajG,
    name: "Dr. Kharmega Sundararaj G",
    dept: "Computer Science and Engineering",
    org: "Dr. T. Thimmaiah Institute of Technology, Karnataka, India",
  },
  {
    image: NagavaliSaka,
    name: "Dr. Nagavali Saka",
    dept: "Computer Science and Engineering",
    org: "KL Deemed to be University, Andhra Pradesh, India",
  },
  {
    image: PracheeSharma,
    name: "Dr. Prachee Sharma",
    dept: "Department of Economics",
    org: "ICFAI University, Raipur, Chhattisgarh, India",
  },
  {
    image: CHAmanulla,
    name: "Dr. CH Amanulla",
    dept: "Basic Science and Humanities",
    org: "Sri Sai Institute of Technology and Science, Andhra Pradesh, India",
  },
  {
    image: SomanthKisan,
    name: "Somanath Kisan Chikane",
    dept: "Electronics and Telecommunication Engineering",
    org: "Vidya Pratishthan's Polytechnic College, Indapur, Maharashtra, India",
  },
  {
    image: Anusha,
    name: "Dr. R. Anusha",
    dept: "Computer Science and Information Technology",
    org: "M.O.P. Vaishnav College for Women (Autonomous), Chennai, Tamil Nadu, India",
  },
  {
    image: MarannaT,
    name: "Dr. Maranna T",
    dept: "Department of Mathematics",
    org: "Cauvery College, Gonikoppal, Karnataka, India",
  },
  {
    image: KrishnaSudha,
    name: "Dr. M. Krishna Sudha",
    dept: "Bachelor of Computer Applications",
    org: "Kongunadu Arts and Science College, Tamil Nadu, India",
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
          {/* LEFT - Brochure Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-[520px]">
            {/* Background Glow */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#FF7A00]/20 to-orange-600/10 blur-2xl" />
            
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#1A1A1A] shadow-2xl">
              <img 
                className="h-auto w-full object-contain transition-transform duration-700 hover:scale-105"  
                src={brochure} 
                alt="Conference Brochure" 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
            </div>
          </div>

          {/* RIGHT - Text Details */}
          <div className="lg:pl-8 text-center lg:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FF7A00]">
              INTERNATIONAL CONFERENCE ON
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              <span className="block">Global Advances</span>
              <span className="block">in Science,</span>
              <span className="block bg-gradient-to-r from-[#FF7A00] to-[#d66a05] bg-clip-text text-transparent">
                Engineering,
              </span>
              <span className="block bg-gradient-to-r from-[#FF7A00] to-[#d66a05] bg-clip-text text-transparent">
                Technology & Management
              </span>
            </h1>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#FF7A00] px-6 py-3">
              <Sparkles className="h-4 w-4 text-[#FF7A00]" />
              <span className="font-bold text-[#FF7A00]">
                ICGASETM – 2026
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#Register"
                className="rounded-full bg-[#FF7A00] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#FF7A00]/20 transition-all hover:bg-orange-600 hover:scale-105"
              >
                Register Now
              </a>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
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
        </div>
      </header>
      {/* DOWNLOADS */}
      <section className="mx-auto max-w-7xl px-6 pb-6">
        <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-4 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A00]/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <SectionLabel icon={Download}>
            Downloads
          </SectionLabel>

          <div className="mt-3 grid gap-6 md:grid-cols-2">
            {/* Certificate Download */}
            <div className="group relative rounded-[2rem] border border-white/5 p-3 bg-white/5 transition-all hover:bg-white/10 hover:border-[#FF7A00]/30 overflow-hidden">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <div className="absolute -inset-4 rounded-full bg-[#FF7A00]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl  transform transition-all group-hover:scale-110 group-hover:rotate-3">
                    <img src={certIcon} alt="Certificate Icon" className="h-full w-full object-contain rounded-xl drop-shadow-[0_15px_30px_rgba(255,122,0,0.4)]" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-2">Certificate</h3>
                <p className="text-zinc-400 text-sm mb-8 max-w-xs">Download your official participation or presentation certificate from the conference.</p>
                
                <a href={ICGASETMCERTIFICATE} className="flex items-center gap-2 bg-[#FF7A00] hover:bg-orange-600 text-white font-bold py-3 px-7 rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg shadow-[#FF7A00]/20">
                  <Download size={20} />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Proceeding Download */}
            <div className="group relative rounded-[2rem] border border-white/5 bg-white/5 p-3 transition-all hover:bg-white/10 hover:border-[#FF7A00]/30 overflow-hidden">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-4 rounded-full bg-[#FF7A00]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl transform transition-all group-hover:scale-110 group-hover:rotate-3">
                    <img src={proceedingIcon} alt="Proceeding Icon" className="h-full w-full object-contain rounded-xl drop-shadow-[0_15px_30px_rgba(255,122,0,0.4)]" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-2">Full Conference Proceeding</h3>
                <p className="text-zinc-400 text-sm mb-8 max-w-xs">Get access to the complete collection of research papers and proceedings from ICGASETM – 2026.</p>
                
                <button className="flex items-center gap-2 bg-[#FF7A00] hover:bg-orange-600 text-white font-bold py-3 px-7 rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg shadow-[#FF7A00]/20">
                  <Download size={20} />
                  <span>Download Soon!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {/* ABOUT */}
        <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
          <SectionLabel icon={Users}>
            About the Conference
          </SectionLabel>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-400 text-justify">
            <p>
              The International Conference on Global Advances in Science, Engineering, Technology and Management (ICGASETM - 2026) is a premier international platform that brings together researchers, academicians, industry professionals, and students from diverse disciplines.
            </p>

            <p>
              The conference aims to promote multidisciplinary research, innovation, and collaboration by addressing contemporary challenges and exploring future directions in science, engineering, technology, and management.
            </p>

            <p>
              ICGASETM - 2026 focuses on cutting-edge advancements, sustainable development, digital transformation, and intelligent solutions that impact society and industry, while providing an excellent opportunity for participants to present research findings, exchange knowledge, and build global networks across multiple domains.
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
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {/* CONVENER */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
            <SectionLabel icon={Users}>
              Convener
            </SectionLabel>

            <div className="mt-5">
              <p className="text-xl font-bold">
                Mrs. Sangeetha Subramaniam
              </p>

              <p className="mt-2 flex items-center gap-2 text-[#FF7A00]">
                <Phone className="h-4 w-4" />
                7708826908
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
            <SectionLabel icon={Users}>
              Co-Conveners
            </SectionLabel>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-lg font-bold">
                  Dr. Baskar Kandasamy
                </p>

                <p className="mt-1 flex items-center gap-2 text-[#FF7A00] text-sm">
                  <Phone className="h-4 w-4" />
                  93448 10452
                </p>
              </div>
              <div className="border-t border-white/5" />
              <div>
                <p className="text-lg font-bold">
                  Ms. P. Swetha
                </p>

                <p className="mt-1 flex items-center gap-2 text-[#FF7A00] text-sm">
                  <Phone className="h-4 w-4" />
                  7708826908
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
            <SectionLabel icon={Mail}>
              Email
            </SectionLabel>

            <p className="mt-5 break-all font-semibold text-[#FF7A00]">
              icgasetm26@gmail.com
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
                <img src={keynote1} className='h-20 w-20 rounded-xl object-contain' alt="" />
              </div>

              <div>
                <p className="text-lg font-bold">
                  Dr. Venkateswaran Radhakrishnan
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  College of Computing and Information Sciences
                </p>

                <p className="text-sm text-zinc-400">
                  University of Technology and Applied Sciences
                </p>

                <p className="mt-1 text-sm text-[#FF7A00]">
                  Salalah, Sultanate of Oman.
                </p>
              </div>
            </div>

            <div className="border-t border-white/5" />

            <div className="flex gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7A00] to-orange-600 text-2xl font-bold text-white shadow-lg">
                <img src={keynote2} className='h-20 w-20 rounded-xl object-contain' alt="" />
              </div>

              <div>
                <p className="text-lg font-bold">
                  Prof. Mohit Tiwari
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  Department of Computer Science and Engineering
                </p>

                <p className="text-sm text-zinc-400">
                  Bharati Vidyapeeth's College of Engineering
                </p>

                <p className="mt-1 text-sm text-[#FF7A00]">
                  Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* REGISTER */}
        <div id="Register" className="space-y-6">


          <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-xl transition-all hover:border-[#FF7A00]/30">
            <SectionLabel icon={FileText}>
              Submission Guidelines
            </SectionLabel>

            <p className="mt-5 text-sm leading-relaxed text-zinc-400">
              Authors are requested to submit a soft copy of their full paper(s) typed in single column format on A4 size paper in Microsoft Word format (maximum 6 pages, Times New Roman-12) to the organizing coordinator.
              The paper should contain the affiliation of authors and co-authors, along with their E-mail IDs. Author(s) of accepted papers will be required to submit the final version of the soft copy of the paper within the stipulated time.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="Register" className="py-12 max-w-7xl mx-auto px-6">
        <div className="bg-[#1A1A1A] rounded-[2.5rem] shadow-2xl border border-white/10 p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A00]/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex items-center gap-4 mb-10">
            <span className="bg-[#FF7A00] text-[#0B0B0F] px-5 py-1.5 rounded-full font-black text-xs tracking-[0.2em] uppercase">Step 1</span>
            <h2 className="text-4xl font-extrabold text-white">Register Now</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
                Fill the <strong className="text-[#FF7A00]">Google Form</strong> to present your paper or join as a listener. Immediate confirmation & payment instructions provided inside.
              </p>

              <div className="bg-white/5 rounded-3xl p-8 border border-white/5 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-6 flex items-center gap-3 text-lg">
                  <CheckCircle2 className="text-[#FF7A00] h-6 w-6" /> How to register:
                </h4>
                <ul className="space-y-4">
                  {[
                    "Click the 'Open Google Form' button (or scan QR).",
                    "Fill details & select category (Academician / Scholar / Student / Listener).",
                    "Make payment via UPI / Bank Transfer as per instructions in form.",
                    "Upload payment screenshot in the form and submit.",
                    "You'll receive a confirmation email within 24 hours."
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="bg-[#FF7A00]/10 text-[#FF7A00] rounded-full w-7 h-7 flex items-center justify-center text-xs font-black shrink-0 border border-[#FF7A00]/20">
                        {i + 1}
                      </span>
                      <span className="text-zinc-300 font-medium">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-white/5 pt-10 lg:pt-0 lg:pl-12">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#FF7A00] hover:bg-orange-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-lg shadow-[#FF7A00]/20 mb-8 tracking-wider"
              >
                <Globe size={20} /> OPEN GOOGLE FORM
              </a>

              <div className="bg-white p-4 rounded-3xl shadow-2xl mb-5 group transition-transform hover:scale-105">
                <img src="https://static.vecteezy.com/system/resources/previews/023/173/441/large_2x/sorry-we-are-closed-big-sign-on-laptop-screen-closed-establishments-cafe-shop-store-salon-through-bankrupt-crisis-quarantine-pandemic-modern-flat-cartoon-style-illustration-vector.jpg" alt="QR Code" className="w-full h-full rounded-xl" />
              </div>
              <p className="text-sm text-zinc-500 font-bold text-center uppercase tracking-widest">or scan with phone</p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#FF7A00] text-sm font-bold mt-4 hover:underline tracking-wide">Direct form link</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="font-bold text-zinc-400 mr-4 flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-[#FF7A00]" /> Registration Fees:
              </span>
              {[
                { label: "Academicians", fee: "₹500" },
                { label: "Research Scholar", fee: "₹400" },
                { label: "Students", fee: "₹300" }
              ].map((item, i) => (
                <span key={i} className="bg-white/5 border border-white/10 px-6 py-2.5 rounded-2xl text-sm font-bold text-zinc-300">
                  {item.label}: <span className="text-[#FF7A00] ml-1">{item.fee}</span>
                </span>
              ))}
            </div>
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
                  <div className="flex h-20 w-18 shrink-0 items-center justify-center ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover rounded-lg"
                    />
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
                icgasetm26@gmail.com
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
                +91 77088 26908
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