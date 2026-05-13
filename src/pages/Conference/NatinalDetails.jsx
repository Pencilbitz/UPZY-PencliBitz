import React from "react";

import iyerImg from "../../assets/speaker-1.png";
import sawantImg from "../../assets/speaker-2.png";
import hidayathImg from "../../assets/speaker-3.png";
import ajitImg from "../../assets/speaker-4.png";

const FORM_URL = "https://forms.gle/iceiset26";

const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(
  FORM_URL
)}`;

const topics = [
  "Artificial Intelligence, Machine Learning, and Data Science",
  "Emerging Technologies: IoT, Blockchain, Cybersecurity, and Cloud Computing",
  "Advanced Engineering Systems and Smart Manufacturing (Industry 4.0/5.0)",
  "Sustainable Technologies, Renewable Energy, and Environmental Science",
  "Digital Transformation, Smart Cities, and Intelligent Systems",
  "Robotics, Automation, and Mechatronics Engineering",
  "Computer Networks, Software Engineering, and Information Systems",
  "Business Analytics, FinTech, and the Digital Economy",
  "Healthcare Technologies, Biotechnology, and Life Sciences",
  "Interdisciplinary Research and Innovations in Science, Engineering, and Technology",
];

const advisory = [
  {
    name: "Dr. Hidayath Ali Baig",
    dept: "Innovation & Technology Transfer Department",
    org: "University of Technology & Applied Sciences",
    loc: "Oman",
    img: hidayathImg,
  },
  {
    name: "Dr. Ajit Singh",
    dept: "Department of Management",
    org: "ITERC Group of Institutions, Duhai Ghaziabad",
    loc: "Uttar Pradesh",
    img: ajitImg,
  },
  {
    name: "Dr. D. Stalin David",
    dept: "Computer Science & Engineering",
    org: "Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
    loc: "Tamil Nadu",
  },
  {
    name: "Dr. B. V. V. Siva Prasad",
    dept: "School of Engineering (CSE)",
    org: "Anurag University",
    loc: "Telangana",
  },
  {
    name: "Dr. Karthika K",
    dept: "Computer Science and Engineering",
    org: "Sri Sairam College of Engineering",
    loc: "Karnataka",
  },
  {
    name: "Dr. R. S. Ganesh",
    dept: "Electronics & Communication Engineering",
    org: "PET Engineering College",
    loc: "Tamil Nadu",
  },
];

function SectionTitle({ icon, children }) {
  return (
    <div className=" mb-6 flex items-center gap-3 border-l-4 border-cyan-600 pl-4 ">
      <span className="text-2xl">{icon}</span>

      <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-900 md:text-3xl">
        {children}
      </h2>
    </div>
  );
}

export default function IceisetConference() {
  return (
    <div className="min-h-screen  text-slate-800">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-orange-50">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="mb-4 inline-block rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-orange-600 shadow-sm">
            Call for Papers · 30 April 2026
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
            ICEISET 2026
          </h1>

          <p className="mt-6 text-2xl font-medium text-slate-700 md:text-3xl">
            International Conference on Emerging Innovations in
          </p>

          <p className="text-2xl font-bold text-orange-600 md:text-3xl">
            Science, Engineering and Technology
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-medium text-cyan-700 ring-1 ring-cyan-300">
              📅 30 April 2026
            </span>

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-medium text-orange-700 ring-1 ring-orange-300">
              🌐 Virtual Conference
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-orange-700"
            >
              Register Now
            </a>

            <a
              href="#topics"
              className="rounded-full border-2 border-orange-600 bg-white px-8 py-4 text-base font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              Conference Topics
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-20 px-6 py-16">
        {/* ABOUT */}
        <section>
          <SectionTitle icon="🌐">
            About the Conference
          </SectionTitle>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="leading-relaxed text-slate-700">
              The International Conference on Emerging
              Innovations in Science, Engineering and
              Technology (ICEISET – 2026) is a global
              platform for researchers, academicians,
              industry experts, and students to share
              ideas and innovations across disciplines.
            </p>
          </div>
        </section>

        {/* TOPICS */}
        <section
          id="topics"
          className="grid gap-8 md:grid-cols-2"
        >
          <div>
            <SectionTitle icon="📋">
              Conference Topics
            </SectionTitle>

            <ul className="space-y-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              {topics.map((topic, index) => (
                <li
                  key={index}
                  className="flex gap-3 border-b border-slate-100 pb-3 last:border-0"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />

                  <span className="text-sm text-slate-700">
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* IMPORTANT DATES */}
            <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold">
                📅 Important Dates
              </h3>

              <div className="mt-6 space-y-5">
                {[
                  [
                    "Abstract Submission",
                    "25.04.2026",
                  ],
                  [
                    "Full Paper Submission",
                    "27.04.2026",
                  ],
                  ["Conference Date", "30.04.2026"],
                ].map(([label, date]) => (
                  <div key={label}>
                    <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                      {label}
                    </div>

                    <div className="text-2xl font-bold">
                      {date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FEES */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-bold text-slate-900">
                ₹ Registration Fee
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  ["Academicians", "₹800"],
                  ["Research Scholars", "₹700"],
                  ["Students", "₹600"],
                  ["Listener", "₹300"],
                ].map(([role, fee]) => (
                  <div
                    key={role}
                    className="flex items-center justify-between rounded-lg bg-slate-100 px-4 py-3"
                  >
                    <span className="text-sm font-medium">
                      {role}
                    </span>

                    <span className="font-bold text-orange-600">
                      {fee}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SUBMISSION */}
        <section>
          <SectionTitle icon="📄">
            Submission Guidelines
          </SectionTitle>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="leading-relaxed text-slate-700">
              Authors are invited to submit original
              research papers for ICEISET 2026 including
              abstract, keywords, introduction,
              references, tables, and conclusions using
              standard formatting guidelines.
            </p>
          </div>
        </section>

        {/* PUBLICATION */}
        <section>
          <SectionTitle icon="📖">
            Publication Opportunity
          </SectionTitle>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="leading-relaxed text-slate-700">
              All accepted papers will be published in
              Conference Proceedings with ISBN.
              Interested authors may also publish in
              reputed journals with ISSN and Google
              Scholar indexing.
            </p>
          </div>
        </section>

        {/* REGISTER */}
        <section>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-cyan-50 p-8 ring-1 ring-orange-200">
            <div className="grid gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <span className="rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  Step 1
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                  Register Now
                </h2>

                <p className="mt-4 text-slate-700">
                  Fill the Google Form to present your
                  paper or join as listener.
                </p>

                <div className="mt-6">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
                  >
                    Open Google Form
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
                <img
                  src={QR_URL}
                  alt="QR Code"
                  className="h-56 w-56"
                />

                <p className="mt-3 text-xs text-slate-500">
                  Scan with Phone
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEYNOTE SPEAKERS */}
        <section>
          <SectionTitle icon="🎙️">
            Keynote Speakers
          </SectionTitle>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                img: iyerImg,
                name: "Dr. Sailesh S. Iyer",
                role: "Professor and I/c Principal",
                org: "NSIT-IFSCS",
                loc: "Ahmedabad",
              },
              {
                img: sawantImg,
                name: "Prin. Dr. Sawant Jeetendra Madhukar Usha",
                role: "Principal and Administrator",
                org: "SRSD College of Arts, Commerce and Science",
                loc: "Maharashtra",
              },
            ].map((speaker) => (
              <div
                key={speaker.name}
                className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200"
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="h-40 w-40 rounded-full object-cover ring-4 ring-cyan-200"
                />

                <h3 className="mt-5 text-lg font-bold text-cyan-700">
                  {speaker.name}
                </h3>

                <p className="mt-2 text-sm text-slate-700">
                  {speaker.role}
                </p>

                <p className="text-sm font-medium">
                  {speaker.org}
                </p>

                <p className="text-sm text-slate-500">
                  {speaker.loc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ORGANIZING COMMITTEE */}
        <section>
          <SectionTitle icon="👥">
            Organizing Committee
          </SectionTitle>

          <div className="grid gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:grid-cols-2">
            <div className="text-center md:border-r md:border-slate-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">
                Convener
              </p>

              <p className="mt-2 text-xl font-bold">
                Mrs. Sangeetha Subramaniam
              </p>

              <p className="mt-1 text-sm text-slate-500">
                📱 7708826908
              </p>
            </div>

            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">
                Co-Conveners
              </p>

              <p className="mt-2 text-lg font-bold">
                Dr. Baskar Kandasamy
              </p>

              <p className="text-sm text-slate-500">
                📱 9344810452
              </p>

              <p className="mt-3 text-lg font-bold">
                Ms. C. Bharathi
              </p>

              <p className="text-sm text-slate-500">
                📱 9600921734
              </p>
            </div>
          </div>
        </section>

        {/* ADVISORY */}
        <section>
          <SectionTitle icon="🧑‍💼">
            Advisory Committee
          </SectionTitle>

          <div className="grid gap-5 md:grid-cols-2">
            {advisory.map((member, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-24 w-24 rounded-xl object-cover"
                  />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-orange-100 text-2xl font-bold text-orange-600">
                    {member.name.charAt(0)}
                  </div>
                )}

                <div>
                  <h4 className="font-bold">
                    {member.name}
                  </h4>

                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                    {member.dept}
                  </p>

                  <p className="mt-1 text-sm text-slate-700">
                    {member.org}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    📍 {member.loc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 py-10 text-center text-sm text-white/80">
        <p className="font-semibold text-white">
          ICEISET 2026 · 30 April 2026 · Virtual
          Conference
        </p>

        <p className="mt-2">
          © 2026 ICEISET Organizing Committee ·
          iceiset.26@gmail.com
        </p>
      </footer>

      {/* FLOATING BUTTON */}
      <a
        href={FORM_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-2xl transition hover:bg-orange-700"
      >
        ✏️ Register
      </a>
    </div>
  );
}