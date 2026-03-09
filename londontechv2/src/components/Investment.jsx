import React from 'react';
import { CreditCard, Check, ShieldAlert } from 'lucide-react';

const Investment = () => {
    return (
        <section id="inversion" className="py-40 px-4 bg-navy relative border-t border-white/5">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-6xl md:text-8xl font-extrabold mb-8 font-clash tracking-tighter">INVERSIÓN</h2>
                    <p className="text-xl text-ice/50 outfit">Transparencia absoluta en costos y beneficios para tu empresa.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Fee Column */}
                    <div className="glass p-12 flex flex-col items-center text-center relative overflow-hidden group border-glow">
                        <div className="mb-8 p-6 rounded-3xl bg-blue/5 text-blue">
                            <CreditCard className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 outfit tracking-[0.2em] text-blue">FEE DE PARTICIPACIÓN</h3>
                        <div className="text-6xl font-extrabold mb-8 font-clash text-white tracking-tighter">£1,450</div>
                        <p className="text-ice/40 text-sm outfit">Pago único por delegado. Sujeto a cambios según fecha de inscripción.</p>
                    </div>

                    {/* Includes Column */}
                    <div className="glass p-12 md:col-span-2 relative overflow-hidden border-glow">
                        <div className="absolute top-0 right-0 p-8">
                            <ShieldAlert className="w-12 h-12 text-white/5" />
                        </div>
                        <h3 className="text-3xl font-bold mb-10 font-clash flex items-center gap-4">
                            <span className="w-8 h-8 rounded-lg bg-red flex items-center justify-center text-white text-sm">✓</span>
                            QUÉ INCLUYE
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                            {[
                                "Pase Full Access a London Tech Week",
                                "Participación en Agenda Privada",
                                "Briefing de Mercado Pre-viaje",
                                "Networking & Welcome Dinner",
                                "Soporte de Logística en Terreno",
                                "Acceso a Hospitality Lounge Chileno",
                                "Reporte Post-Evento de Oportunidades",
                                "Kit de Bienvenida de la Delegación"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 list-none group">
                                    <Check className="w-5 h-5 text-blue mt-1 group-hover:scale-120 transition-transform" />
                                    <span className="text-ice/70 text-base outfit group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </div>

                        <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/5">
                            <p className="text-sm text-ice/30 outfit">
                                <strong className="text-white/60">NOTA:</strong> No incluye pasajes aéreos, alojamiento ni seguros de viaje. Estos deben ser gestionados de forma independiente por cada empresa participante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Investment;
