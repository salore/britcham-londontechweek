import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[110vh] flex items-center justify-center pt-24 overflow-hidden bg-navy">
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/london_night_abstract.png"
                    alt="London City Lights"
                    className="w-full h-full object-cover scale-110 animate-ken-burns opacity-40 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/90 to-navy"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy/40"></div>
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-red/30 bg-red/5 mb-10 group hover:bg-red/10 transition-colors animate-fade-up">
                    <span className="w-2 h-2 rounded-full bg-red animate-pulse"></span>
                    <span className="text-red uppercase tracking-[0.3em] font-bold text-[10px] md:text-xs">
                        MISIÓN COMERCIAL OFICIAL · CHILE 2026
                    </span>
                </div>

                <h1 className="text-6xl md:text-[10rem] font-extrabold text-white mb-8 font-clash leading-[0.85] tracking-tighter animate-fade-up">
                    LONDON <br /> <span className="text-glow">TECH WEEK</span>
                </h1>

                <p className="text-lg md:text-2xl text-ice/40 max-w-3xl mx-auto mb-16 outfit leading-relaxed animate-fade-up">
                    La delegación oficial chilena en el epicentro de la innovación global. Conecta con el capital, el talento y las mentes que definen el 2026.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-up">
                    <button className="shimmer-btn bg-red text-white px-12 py-6 rounded-2xl font-bold flex items-center group transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(200,16,46,0.3)] text-lg">
                        Quiero participar
                        <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform w-6 h-6" />
                    </button>

                    <button className="glass px-12 py-6 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 text-white/80 hover:text-white border-white/10 text-lg">
                        Ver programa completo
                    </button>
                </div>
            </div>

            {/* Infinite Ticker */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden py-10 bg-white/[0.02] border-t border-white/5 backdrop-blur-md">
                <div className="flex whitespace-nowrap animate-ticker">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-16 px-8 items-center">
                            <span className="text-white/20 text-xs font-bold tracking-[0.5em] uppercase">30,000+ PARTICIPANTES</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-blue"></span>
                            <span className="text-white/20 text-xs font-bold tracking-[0.5em] uppercase">128+ PAÍSES REPRESENTADOS</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-red"></span>
                            <span className="text-white/20 text-xs font-bold tracking-[0.5em] uppercase">400+ SPEAKERS GLOBALES</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-blue"></span>
                            <span className="text-white/20 text-xs font-bold tracking-[0.5em] uppercase">#1 TECH HUB EN EUROPA</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-red"></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
