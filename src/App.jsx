import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ChevronRight, Eye, Layers, Zap, ArrowRight, Menu, X, Check, Activity, Shield } from 'lucide-react';

// --- Global Styles & Fonts ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    
    body {
      font-family: 'Noto Sans TC', sans-serif;
      overflow-x: hidden;
      background-color: #F5F5F4; /* Stone 100/Warm Grey */
    }

    h1, h2, h3, h4, h5, h6, .font-heading {
      font-family: 'Space Grotesk', sans-serif;
    }

    .glass-panel {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .glass-panel-dark {
      background: rgba(20, 20, 20, 0.6);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .holographic-text {
      background: linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #22d3ee 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shine 5s linear infinite;
    }
    
    .holographic-bg {
       background: linear-gradient(135deg, rgba(34, 211, 238, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
    }

    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }

    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 md:py-4 glass-panel-dark bg-slate-900/80' : 'py-4 md:py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 z-50">
          <img 
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Simulacra Logo" 
            className={`h-10 md:h-16 lg:h-20 w-auto transition-all duration-300 ${!isScrolled ? 'brightness-0' : ''}`}
            style={{ filter: !isScrolled ? 'brightness(0) saturate(100%)' : 'none' }}
          />
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 ${isScrolled ? 'text-gray-300' : 'text-slate-600'}`}>
          <a href="#technology" className="hover:text-cyan-400 transition-colors">技術原理</a>
          <a href="#lifestyle" className="hover:text-cyan-400 transition-colors">使用情境</a>
          <a href="#specs" className="hover:text-cyan-400 transition-colors">專業數據</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden z-50 text-cyan-500" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <a href="#technology" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-white font-heading">技術原理</a>
            <a href="#lifestyle" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-white font-heading">使用情境</a>
            <a href="#specs" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-white font-heading">專業數據</a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F4]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-200/30 to-purple-200/30 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-200/30 to-cyan-100/30 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 pt-24 md:pt-0 relative z-10 grid gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-block px-3 py-1 mt-4 mb-4 rounded-full border border-slate-300 bg-white/50 backdrop-blur-sm text-sm font-medium text-slate-600">
             The Future of Vision
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-6 font-['Noto_Sans_TC']">
            看見未來，<br />
            <span>無需犧牲視力。</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            首創度數鏡片與平面光波導一體化技術。<br />
            讓每一雙獨特的眼睛，都能舒適地探索虛實世界。
          </p>
        </motion.div>

      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-slate-300" />
      </motion.div>
    </section>
  );
};

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">為什麼 AR 眼鏡總是難以適應？</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            每個使用者的眼睛都是獨一無二的，而主流AR眼鏡無法客製化度數鏡片給予使用者配戴。這種「幾何衝突」，讓屈光不正族群被拒於門外。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* The Problem: Flat & Blurry */}
            <div className="relative group">
                <div className="absolute inset-0 bg-red-500/5 blur-[60px] rounded-full" />
                <div className="relative bg-slate-800/50 border border-slate-700 rounded-3xl p-8 h-[400px] flex flex-col justify-between overflow-hidden">
                    {/* Visualizing Blur */}
                    <div className="relative z-10 flex-1 flex items-center justify-center">
                        <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full border border-slate-400/10 bg-slate-300/5 blur-[6px]" />
                        <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-slate-500/10 blur-[12px]" />
                        <p className="text-2xl font-serif text-slate-300 text-center blur-[2px] group-hover:blur-[4px] transition-all duration-500 leading-relaxed">
                            這是一個<br/>無法對焦的<br/>數位世界
                        </p>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 text-red-400 mb-2 font-mono text-sm">
                            <X size={16} /> 傳統平面波導
                        </div>
                        <p className="text-slate-400 text-sm">
                            無法符合眼球屈光，造成邊緣成像模糊、暈眩。
                        </p>
                    </div>
                </div>
            </div>

            {/* The Solution Preview: Curved & Clear */}
            <div className="relative group">
                <div className="absolute inset-0 bg-cyan-500/5 blur-[60px] rounded-full" />
                <div className="relative bg-slate-800/50 border border-cyan-500/30 rounded-3xl p-8 h-[400px] flex flex-col justify-between overflow-hidden shadow-2xl shadow-cyan-900/20">
                    {/* Visualizing Clarity */}
                    <div className="relative z-10 flex-1 flex items-center justify-center">
                        <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full border border-cyan-300/45 bg-cyan-400/5 shadow-[0_0_55px_rgba(34,211,238,0.18)] animate-pulse" />
                         <p className="text-2xl font-heading text-white text-center font-bold leading-relaxed drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                            極致清晰<br/>全域視野
                        </p>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 text-cyan-400 mb-2 font-mono text-sm">
                            <Check size={16} /> 擬視曲面融合
                        </div>
                        <p className="text-slate-300 text-sm">
                            完美整合度數鏡片與光波導鏡片。從中心到邊緣，視野依然銳利。
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const InnovationSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

  return (
    <section id="technology" className="py-32 bg-[#F5F5F4] relative overflow-hidden" ref={targetRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-cyan-600 font-mono tracking-wider text-sm">TECHNOLOGY</span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mt-2 mb-6">
            曲面融合技術
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            我們重新定義了光的路徑。將光波導鏡片與客製化度數鏡片，在物理與光學層面上完美結合。
          </p>
        </div>

        {/* Animation Container */}
        <div className="relative h-[600px] w-full max-w-4xl mx-auto flex items-center justify-center">
           {/* Layer 1: Prescription Lens (Bottom) */}
           <motion.div 
             style={{ y: y1, opacity }}
             className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[30%] border-4 border-slate-300 bg-white/40 backdrop-blur-md flex items-center justify-center z-10"
           >
              <span className="text-slate-400 font-heading text-xl translate-y-20">視力矯正層</span>
           </motion.div>

           {/* Layer 2: Waveguide (Top) */}
           <motion.div 
             style={{ y: y2, opacity }}
             className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[30%] border-4 border-cyan-400/50 bg-cyan-50/20 backdrop-blur-md flex items-center justify-center z-20 shadow-lg shadow-cyan-200/50"
           >
              <span className="text-cyan-600 font-heading text-xl -translate-y-20">AR 光波導層</span>
           </motion.div>

           {/* Fusion Effect (Center) */}
           <motion.div
             style={{ scale, opacity }}
             className="absolute z-30 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-[50px] mix-blend-multiply"
           />
           
           {/* Connecting Lines (Decorations) */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 800 600">
              <path d="M100,300 Q400,100 700,300" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="10 10" />
              <path d="M100,300 Q400,500 700,300" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="10 10" />
           </svg>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
                { icon: <Activity className="text-cyan-500" />, title: "Customized 全客製", desc: "針對近視、遠視、散光精準打磨，度數支援範圍業界最廣。" },
                { icon: <Layers className="text-purple-500" />, title: "Curved 全曲面", desc: "突破平面波導限制，實現符合眼球工學的自然包覆感。" },
                { icon: <Zap className="text-yellow-500" />, title: "Integrated 一體化", desc: "告別「眼鏡夾眼鏡」的笨重感，極致輕薄，宛如一般眼鏡。" }
            ].map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100"
                >
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

const LifestyleSection = () => {
  return (
    <section id="lifestyle" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-4">
                    隱形於生活，<br/>顯形於視界。
                </h2>
                <p className="text-slate-500 max-w-md">我們相信最好的科技是不被察覺的。全天候舒適配戴，就像您原本的眼鏡一樣自然。</p>
            </div>
        </div>
      </div>
    </section>
  );
};

const SpecsSection = () => {
  return (
    <section id="specs" className="py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="max-w-2xl mx-auto">
            <div>
                <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                    <Shield className="text-cyan-400" /> 技術規格
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    源自視光學與光電工程的跨界專家團隊，為專業應用打造的極致參數。
                </p>
                
                <div className="space-y-6">
                    {[
                        { label: "視場角 (FOV)", value: "52° Diagonal" },
                        { label: "近視矯正範圍", value: "0.00D to -8.00D" },
                        { label: "散光矯正範圍", value: "0.00D to -2.00D" },
                        { label: "鏡片透光率", value: "> 85%" },
                        { label: "顯示亮度", value: "2000 nits" },
                    ].map((spec, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-slate-800 hover:border-cyan-500/50 transition-colors">
                            <span className="text-slate-400">{spec.label}</span>
                            <span className="font-mono text-cyan-300 font-medium">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {false && (
            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
                
                <h3 className="text-xl font-bold mb-6 z-10">合作夥伴 & 專利</h3>
                
                <div className="grid grid-cols-2 gap-4 z-10">
                    <div className="bg-slate-900/80 p-4 rounded-xl text-center border border-slate-700">
                        <div className="text-3xl font-bold text-white mb-1">12+</div>
                        <div className="text-xs text-slate-400">核心光學專利</div>
                    </div>
                    <div className="bg-slate-900/80 p-4 rounded-xl text-center border border-slate-700">
                        <div className="text-3xl font-bold text-white mb-1">ISO</div>
                        <div className="text-xs text-slate-400">13485 醫療認證</div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700 z-10">
                    <p className="text-sm text-slate-400 mb-4">Trusted By:</p>
                    <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                        {/* Mock Logos */}
                        <div className="h-8 w-20 bg-white/20 rounded"></div>
                        <div className="h-8 w-20 bg-white/20 rounded"></div>
                        <div className="h-8 w-20 bg-white/20 rounded"></div>
                    </div>
                </div>
            </div>
            )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-900 to-slate-950 z-0" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-cyan-900/20 blur-[100px] rounded-full z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 holographic-text">
            準備好改變您的視界了嗎？
        </h2>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="antialiased selection:bg-cyan-500/30">
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <InnovationSection />
      <LifestyleSection />
      <SpecsSection />
      <Footer />
    </div>
  );
};

export default App;
