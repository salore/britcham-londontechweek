import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Globe, Mic, MapPin, Link as LinkIcon, TrendingUp, CheckCircle, Plane, Hotel, Utensils, Car, FileText } from 'lucide-react';

const SLIDES_COUNT = 14;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < SLIDES_COUNT - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#012169] to-[#000000] text-white font-sans selection:bg-[#CF142B] selection:text-white">
      {/* Tech Constellation Background (simplified with CSS for performance) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 md:p-12 w-full h-full"
        >
          {currentSlide === 0 && <Slide1 onNext={nextSlide} />}
          {currentSlide === 1 && <Slide2 />}
          {currentSlide === 2 && <Slide3 />}
          {currentSlide === 3 && <Slide4 />}
          {currentSlide === 4 && <Slide5 />}
          {currentSlide === 5 && <Slide6 />}
          {currentSlide === 6 && <Slide7 />}
          {currentSlide === 7 && <Slide8 />}
          {currentSlide === 8 && <Slide9 />}
          {currentSlide === 9 && <Slide10 />}
          {currentSlide === 10 && <Slide11 />}
          {currentSlide === 11 && <Slide12 />}
          {currentSlide === 12 && <Slide13 onNext={nextSlide} />}
          {currentSlide === 13 && <Slide14 />}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={prevSlide} disabled={currentSlide === 0} className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 disabled:opacity-30">←</button>
          <button onClick={nextSlide} disabled={currentSlide === SLIDES_COUNT - 1} className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 disabled:opacity-30">→</button>
        </div>

        <div className="flex gap-2">
          {Array.from({ length: SLIDES_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentSlide ? 1 : -1);
                setCurrentSlide(i);
              }}
              className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-[#CF142B]' : 'bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>
        <div className="text-[#A0AABB] text-sm hidden md:block">{currentSlide + 1} / {SLIDES_COUNT}</div>
      </div>

      <button onClick={prevSlide} disabled={currentSlide === 0} className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-0 group">
        <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
      </button>

      <button onClick={nextSlide} disabled={currentSlide === SLIDES_COUNT - 1} className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-0 group">
        <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  );
}

const Slide1 = ({ onNext }) => (
  <div className="text-center max-w-4xl relative">
    <div className="absolute inset-0 bg-[#CF142B] opacity-20 blur-[100px] rounded-full -z-10" />
    <span className="text-sm tracking-widest uppercase text-[#A0AABB] font-semibold mb-4 block">BritCham Chile</span>
    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
      London <span className="text-[#CF142B]">Tech Week</span> 2026
    </h1>
    <p className="text-xl md:text-3xl text-[#A0AABB] mb-8 font-light">La delegación oficial chilena</p>
    <div className="text-lg md:text-xl font-medium mb-12 flex items-center justify-center gap-2">
      <MapPin className="text-[#CF142B]" /> 8–12 Junio, 2026 · Olympia London
    </div>
    <button onClick={onNext} className="bg-[#CF142B] hover:bg-red-600 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(207,20,43,0.5)]">
      Comenzar
    </button>
  </div>
);

const Slide2 = () => (
  <div className="text-center w-full max-w-6xl">
    <h2 className="text-3xl md:text-5xl font-bold mb-12">¿Por qué asistir a London Tech Week?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        icon={<Users size={40} className="text-[#CF142B] mb-4" />}
        value="30.000+"
        label="Participantes globales"
        valueColor="text-[#CF142B]"
      />
      <Card
        icon={<Globe size={40} className="text-[#C9A84C] mb-4" />}
        value="128+"
        label="Países representados"
        valueColor="text-[#C9A84C]"
      />
      <Card
        icon={<Mic size={40} className="text-white mb-4" />}
        value="400+"
        label="Speakers internacionales"
        valueColor="text-white"
      />
    </div>
    <p className="mt-12 text-[#A0AABB] max-w-3xl mx-auto text-lg leading-relaxed">
      El evento más importante de innovación y tecnología del Reino Unido. Reúne a líderes tecnológicos, startups, inversionistas y corporates globales.
    </p>
  </div>
);

const Slide3 = () => (
  <div className="text-center w-full max-w-5xl">
    <h2 className="text-3xl md:text-5xl font-bold mb-16">¿Por qué el Reino Unido?</h2>
    <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-16">
      <Pill>#1 en Europa para FDI</Pill>
      <Pill>#1 en número de unicornios europeos</Pill>
      <Pill>+170.000 empresas tecnológicas</Pill>
    </div>
    <p className="text-[#A0AABB] max-w-3xl mx-auto text-xl font-light leading-relaxed">
      Puerta de entrada a mercados globales, ecosistema altamente conectado con corporates, startups, universidades e inversionistas, y fuerte presencia de fondos y aceleradoras de scale-up.
    </p>
  </div>
);

const Slide4 = () => (
  <div className="w-full max-w-5xl">
    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Ecosistema altamente conectado</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard icon={<Globe className="text-[#CF142B]" size={32} />} title="Puerta a mercados globales" desc="Acceso directo a EE.UU., Europa y Medio Oriente." />
      <FeatureCard icon={<LinkIcon className="text-white" size={32} />} title="Ecosistema interconectado" desc="Corporates, startups, universidades e inversores." />
      <FeatureCard icon={<TrendingUp className="text-[#C9A84C]" size={32} />} title="Capital y aceleración" desc="Fondos de VC, aceleradoras y programas de scale-up." />
    </div>
  </div>
);

const DaySlide = ({ day, events }) => (
  <div className="w-full max-w-4xl">
    <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">{day}</h2>
    <div className="flex flex-col gap-4">
      {events.map((e, i) => (
        <div key={i} className={`p-6 rounded-2xl border ${e.highlight === 'gold' ? 'border-[#C9A84C] shadow-[0_0_20px_rgba(201,168,76,0.2)] bg-[#C9A84C]/10' : e.highlight === 'red' ? 'border-[#CF142B] shadow-[0_0_30px_rgba(207,20,43,0.3)] bg-[#CF142B]/10' : 'border-white/10 bg-white/5'} flex items-center gap-4 transition-transform hover:-translate-y-1`}>
          <div className={`p-3 rounded-full ${e.highlight === 'gold' ? 'bg-[#C9A84C]/20 text-[#C9A84C]' : e.highlight === 'red' ? 'bg-[#CF142B]/20 text-[#CF142B]' : 'bg-[#012169] text-blue-300'}`}>
            {e.icon}
          </div>
          <div>
            <h3 className={`text-xl font-bold ${e.highlight === 'gold' ? 'text-[#C9A84C]' : e.highlight === 'red' ? 'text-[#CF142B]' : 'text-white'}`}>{e.title}</h3>
            <p className="text-[#A0AABB] text-sm mt-1">{e.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Slide5 = () => <DaySlide day="Lunes 8 de Junio" events={[{ title: "Breakfast VC Session — EBS & Eagle Labs", time: "AM", icon: <Users />, highlight: "none" }, { title: "London Tech Week @ Olympia", time: "All Day", icon: <MapPin />, highlight: "blue" }, { title: "Cóctel de bienvenida · Delegación oficial", time: "PM", icon: <Users />, highlight: "gold" }]} />;
const Slide6 = () => <DaySlide day="Martes 9 de Junio" events={[{ title: "London Tech Week @ Olympia", time: "All Day", icon: <MapPin />, highlight: "blue" }, { title: "Between Bridges Party", time: "PM", icon: <Globe />, highlight: "none" }]} />;
const Slide7 = () => <DaySlide day="Miércoles 10 de Junio" events={[{ title: "London Tech Week @ Olympia", time: "All Day", icon: <MapPin />, highlight: "blue" }, { title: "The AI Summit London", time: "All Day", icon: <TrendingUp />, highlight: "red" }]} />;
const Slide8 = () => <DaySlide day="Jueves 11 de Junio" events={[{ title: "The AI Summit London", time: "All Day", icon: <TrendingUp />, highlight: "red" }, { title: "Reuniones Sectoriales", time: "AM", icon: <Users />, highlight: "none" }, { title: "Canninghouse UK–Latin America Tech Forum", time: "PM", icon: <Globe />, highlight: "gold" }]} />;
const Slide9 = () => <DaySlide day="Viernes 12 de Junio" events={[{ title: "Optional Visit / Day Trip", time: "All Day", icon: <MapPin />, highlight: "none" }]} />;

const Slide10 = () => (
  <div className="w-full max-w-5xl text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-4">Empresas tecnológicas con visión global</h2>
    <p className="text-[#A0AABB] mb-12 text-lg">BritCham Chile es el partner estratégico para conectarte con el sector tecnológico del Reino Unido</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FeatureCard title="Empresas tecnológicas de múltiples sectores" />
      <FeatureCard title="No establecidas en el Reino Unido" />
      <FeatureCard title="1 delegado representante por empresa" />
      <FeatureCard title="Con ambición de escalar internacionalmente" />
    </div>
  </div>
);

const Slide11 = () => (
  <div className="w-full max-w-4xl text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-8">El fee de organización incluye</h2>
    <div className="inline-block bg-white/10 px-6 py-2 rounded-full border border-white/20 mb-12 mb-8 text-xl font-medium tracking-wide">
      CLP $2.000.000 por delegado
    </div>
    <div className="space-y-4 text-left mx-auto max-w-2xl">
      {['Gestión y coordinación de agenda', 'Acreditación VIP como delegado oficial', 'Apoyo logístico e institucional en Londres', 'Materiales oficiales de la delegación'].map((item, i) => (
        <div key={i} className="flex items-center gap-4 text-xl p-4 bg-white/5 rounded-xl border border-white/5">
          <CheckCircle className="text-[#4ade80] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const Slide12 = () => (
  <div className="w-full max-w-4xl text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-12">Cada delegado cubre por su cuenta</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <IconCard icon={<Plane />} label="Pasajes aéreos" />
      <IconCard icon={<Hotel />} label="Alojamiento y viáticos" />
      <IconCard icon={<Utensils />} label="Comidas" />
      <IconCard icon={<Car />} label="Transporte local" />
      <IconCard icon={<FileText />} label="Costo ETA / Visa" />
    </div>
  </div>
);

const Slide13 = ({ onNext }) => (
  <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black to-[#CF142B] flex flex-col items-center justify-center -m-6 md:-m-12 p-6 md:p-12 text-center">
    <div className="text-[#A0AABB] uppercase tracking-widest text-sm font-bold mb-4 z-10">Fee de organización por delegado</div>
    <div className="text-6xl md:text-9xl font-black text-white mb-12 z-10 drop-shadow-2xl">CLP $2.000.000</div>
    <div className="bg-[#CF142B]/20 border-2 border-[#CF142B] text-white px-8 py-4 rounded-xl mb-12 text-xl font-bold z-10 shadow-[0_0_30px_rgba(207,20,43,0.3)]">
      ⚡ Cupo máximo para 18 delegados. Los cupos son limitados.
    </div>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7KW9D8MTyQaV5FwnafNWFNsGaVHx-OVkdN8AxJX56MfZqMg/viewform" target="_blank" className="bg-white text-[#CF142B] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105 z-10">
      Postular ahora →
    </a>
  </div>
);

const Slide14 = () => (
  <div className="w-full h-full absolute inset-0 bg-[radial-gradient(circle_at_center,#650a15,#000000)] flex flex-col items-center justify-center text-center -m-6 md:-m-12 p-6 md:p-12">
    <div className="text-[#CF142B] font-bold tracking-widest uppercase mb-4 z-10">¿Listo para dar el salto?</div>
    <h2 className="text-5xl md:text-8xl font-black text-white mb-6 z-10 max-w-5xl leading-tight">
      Sé parte de la delegación oficial chilena
    </h2>
    <p className="text-xl md:text-2xl text-[#A0AABB] max-w-3xl mb-12 z-10">
      Los cupos son limitados. Postula hoy y lleva tu empresa al ecosistema tecnológico más importante del mundo.
    </p>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7KW9D8MTyQaV5FwnafNWFNsGaVHx-OVkdN8AxJX56MfZqMg/viewform" target="_blank" className="bg-[#CF142B] hover:bg-red-600 text-white px-12 py-5 rounded-full text-2xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(207,20,43,0.8)] z-10 animate-pulse">
      Postular ahora →
    </a>
    <div className="absolute bottom-12 text-xs text-[#A0AABB] tracking-widest uppercase z-10 opacity-50">
      BritCham Chile
    </div>
  </div>
);

// Helper Components
const Card = ({ icon, value, label, valueColor }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-all hover:-translate-y-2 hover:bg-white/10 hover:border-white/20">
    {icon}
    <div className={`text-5xl font-black mb-2 ${valueColor}`}>{value}</div>
    <div className="text-lg text-white font-medium">{label}</div>
  </div>
);

const Pill = ({ children }) => (
  <div className="bg-[#012169]/50 border border-blue-500/30 text-white px-8 py-5 rounded-xl font-semibold text-lg flex-1 flex items-center justify-center whitespace-nowrap text-center transition-colors hover:bg-[#012169]/80">
    {children}
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left transition-all hover:-translate-y-2 hover:border-[#CF142B]/50 hover:shadow-[0_10px_30px_rgba(207,20,43,0.1)]">
    {icon && <div className="mb-6">{icon}</div>}
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    {desc && <p className="text-[#A0AABB] leading-relaxed">{desc}</p>}
  </div>
);

const IconCard = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-1 transition-transform">
    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white scale-125">
      {icon}
    </div>
    <div className="font-medium text-lg text-white">{label}</div>
  </div>
);
