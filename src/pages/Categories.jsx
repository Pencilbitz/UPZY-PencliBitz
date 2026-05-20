import {
  ArrowRight,
  MonitorPlay,
  Users,
  Star,
  ShieldCheck,
  UserRound,
  ArrowUp,
  Globe,
  Rocket,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../assets/Hero-Categories.png";

const stats = [
  { icon: MonitorPlay, value: "500+", label: "Webinars" },
  { icon: Users, value: "200+", label: "Workshops" },
  { icon: UserRound, value: "50K+", label: "Learners" },
  { icon: Globe, value: "25+", label: "Countries" },
  { icon: ShieldCheck, value: "98%", label: "Satisfaction" },
];
    id: "webinars",
};


function Categories() {
    title: "Expert Webinars",
    desc: "Join live sessions with industry leaders and global experts. Stay ahead of the curve with real-time insights.",
    icon: MonitorPlay,
    link: "/webinars",
    stats: "Live Weekly",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "workshops",
    title: "Hands-on Workshops",
    desc: "Intensive, practical learning experiences designed to build real-world skills and professional portfolios.",
    icon: Users,
    link: "/workshops",
    stats: "Practical Learning",
    color: "from-[#FF7A00] to-orange-700",
  },
  {
    id: "conferences",
    title: "Global Conferences",
    desc: "Experience high-impact research and innovation at our National and International academic gatherings.",
    icon: Globe,
    link: "/Conference",
    stats: "Academic Excellence",
    color: "from-orange-600 to-orange-800",
  },
];



function Categories() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white font-sans selection:bg-[#FF7A00]/20 selection:text-[#FF7A00] mt-16">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF7A00]/20 bg-[#FF7A00]/5 px-4 py-2 text-sm font-bold text-[#FF7A00]">
              <Rocket className="h-4 w-4" />
              <span>EXPLORE ALL CATEGORIES</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-orange-600">
                True Potential
              </span>
            </h1>

            <p className="max-w-xl text-[#a1a1aa] text-lg leading-relaxed">
              Dive into a curated world of expert-led webinars, hands-on workshops, and prestigious global conferences. Your journey to excellence starts here.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <Zap className="h-5 w-5 text-[#FF7A00]" />
                <span>Industry Recognized</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <ShieldCheck className="h-5 w-5 text-[#FF7A00]" />
                <span>Expert Certified</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-3xl transition-all group-hover:bg-orange-500/20" />
            
            <div className="relative">
              <img
                src={heroImg}
                alt="Categories Hero"
                className="w-full max-w-lg mx-auto drop-shadow-[0_0_50px_rgba(255,122,0,0.2)] animate-float"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-4 right-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#FF7A00] flex items-center justify-center">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Top Rated</div>
                    <div className="text-[10px] text-[#a1a1aa]">Platform of the Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                className="group relative rounded-[2.5rem] border border-white/10 bg-[#16161A] p-10 overflow-hidden transition-all hover:-translate-y-2 hover:border-[#FF7A00]/40 shadow-2xl"
              >
                {/* Hover Glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.color} shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black mb-4 group-hover:text-[#FF7A00] transition-colors">{cat.title}</h3>

                  <p className="text-[#a1a1aa] leading-relaxed mb-8 flex-grow">
                    {cat.desc}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500/80">
                      {cat.stats}
                    </span>

                    <Link 
                      to={cat.link}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-[#FF7A00] hover:text-white"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#16161A] to-[#0B0B0F] p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle patterns */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF7A00]/10 text-[#FF7A00] mx-auto md:mx-0">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-black">{s.value}</div>
                  <div className="text-xs font-bold text-[#a1a1aa] uppercase tracking-widest">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-10 right-10 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white shadow-[0_0_20px_rgba(255,122,0,0.4)] hover:bg-orange-600 transition-all hover:scale-110 active:scale-95"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
}

export default Categories;