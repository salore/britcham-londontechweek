import React from 'react';
import { ChevronRight, Mail, Globe, MapPin } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
            {/* Background Skyline */}
            <div className="absolute inset-0 z-0">
                {/* Abstract Skyline Silhouette */}
                <div className="absolute bottom-0 w-full h-[50%] opacity-10 flex items-end">
                    <div className="flex w-full items-end justify-around gap-1 px-4">
                        {[...Array(40)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-white w-full rounded-t-sm"
                                style={{ height: `${Math.random() * 90 + 10}%` }}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-6xl md:text-[9rem] font-extrabold mb-12 font-clash leading-[0.85] tracking-tighter text-white">
                        TU EMPRESA EN LA <br />
                        <span className="text-red">ESCENA GLOBAL.</span>
                    </h2>

                    <p className="text-xl md:text-3xl text-ice/40 max-w-3xl mx-auto mb-20 outfit leading-relaxed">
                        Únete a la delegación oficial chilena y posiciona tu tecnología en el corazón estratégico de Europa.
                    </p>

                    <div className="flex flex-col items-center gap-20">
                        <button className="shimmer-btn bg-red text-white px-16 py-8 rounded-3xl text-2xl font-black flex items-center group transition-all hover:scale-110 shadow-[0_30px_60px_rgba(200,16,46,0.4)] tracking-tight">
                            INSCRIBIRSE AHORA
                            <ChevronRight className="ml-4 w-10 h-10 group-hover:translate-x-3 transition-transform" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-4xl">
                            <div className="glass p-10 flex items-center gap-8 text-left border-glow group">
                                <div className="w-32 h-32 bg-white rounded-2xl p-3 flex-shrink-0 relative overflow-hidden">
                                    {/* QR Code Placeholder Representation */}
                                    <div className="w-full h-full bg-navy grid grid-cols-4 grid-rows-4 gap-1 p-2">
                                        {[...Array(16)].map((_, i) => (
                                            <div key={i} className={`bg-ice/${Math.random() > 0.5 ? '80' : '20'}`}></div>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 bg-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="space-y-2">
                                    <span className="block text-xs uppercase tracking-[0.4em] text-blue font-black">SOLICITUD DIGITAL</span>
                                    <h3 className="text-2xl font-bold font-clash text-white">ESCANE PARA APLICAR</h3>
                                    <p className="text-sm text-ice/40 outfit">Cierre de inscripciones: 15 de Abril, 2026</p>
                                </div>
                            </div>

                            <div className="space-y-8 text-left md:pl-12">
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-red/10 group-hover:border-red/30 transition-all">
                                        <Mail className="w-5 h-5 text-ice/40 group-hover:text-red transition-colors" />
                                    </div>
                                    <span className="text-lg text-ice/60 outfit group-hover:text-white transition-colors">info@londontechweek-chile.cl</span>
                                </div>
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue/10 group-hover:border-blue/30 transition-all">
                                        <MapPin className="w-5 h-5 text-ice/40 group-hover:text-blue transition-colors" />
                                    </div>
                                    <span className="text-lg text-ice/60 outfit group-hover:text-white transition-colors">Londres, Reino Unido</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Branding */}
            <div className="absolute bottom-12 w-full">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 py-12 border-t border-white/10">
                        <span className="text-white/10 font-black font-clash text-lg tracking-[0.5em] uppercase hover:text-white/30 transition-colors">BRITCHAM</span>
                        <span className="text-white/10 font-black font-clash text-lg tracking-[0.5em] uppercase hover:text-white/30 transition-colors">CORFO</span>
                        <span className="text-white/10 font-black font-clash text-lg tracking-[0.5em] uppercase hover:text-white/30 transition-colors">INVESTCHILE</span>
                        <span className="text-white/10 font-black font-clash text-lg tracking-[0.5em] uppercase hover:text-white/30 transition-colors">GOBIERNO DE CHILE</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
