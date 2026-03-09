import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Delegation = () => {
    const benefits = [
        "ACCESO GARANTIZADO A LOS EVENTOS PRINCIPALES DE LTW",
        "NETWORKING PRIVADO CON LÍDERES DE LA INDUSTRIA EN UK",
        "VISITAS TÉCNICAS A HUBS DE INNOVACIÓN Y UNICORNIOS",
        "APOYO INSTITUCIONAL DE BRITCHAM Y CORFO",
        "VISIBILIDAD EN MEDIOS Y CANALES OFICIALES DE LA DELEGACIÓN",
        "SESIONES DE PRE-LANDING Y ORIENTACIÓN DE MERCADO"
    ];

    return (
        <section id="delegacion" className="py-40 px-4 bg-navy relative border-t border-white/5 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue/5 skew-x-[-20deg] translate-x-32"></div>

            <div className="container mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-7">
                        <h2 className="text-6xl md:text-8xl font-extrabold mb-12 font-clash leading-none tracking-tighter">
                            ÚNETE A LA <br />
                            <span className="text-blue">DELEGACIÓN</span> <br />
                            OFICIAL
                        </h2>
                        <p className="text-xl md:text-2xl text-ice/60 mb-16 outfit leading-relaxed max-w-2xl">
                            No viajes solo. Sé parte del ecosistema oficial representado por Chile en el hub tecnológico más importante de Europa.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-red transition-transform group-hover:scale-125" />
                                    </div>
                                    <span className="text-sm font-bold tracking-widest text-ice/80 outfit leading-snug group-hover:text-white transition-colors">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="glass p-12 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-bold mb-6 font-clash italic tracking-tighter">"EL PODER DE LA RED"</h3>
                                <p className="text-ice/60 outfit text-lg mb-8 leading-relaxed">
                                    "La delegación chilena 2026 está diseñada para CEOs y fundadores que buscan escala global inmediata."
                                </p>
                                <div className="inline-block px-6 py-2 rounded-full border border-white/10 text-xs font-bold tracking-[0.4em] text-white/40">
                                    STRATEGIC ACCESS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delegation;
