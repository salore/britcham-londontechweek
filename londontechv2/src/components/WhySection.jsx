import React from 'react';
import { Globe, Cpu, Handshake } from 'lucide-react';

const WhySection = () => {
    const cards = [
        {
            title: "EL EVENTO",
            icon: <Globe className="w-8 h-8" />,
            desc: "30,000+ participantes de 128 países, el evento de innovación y tecnología más importante del Reino Unido.",
            color: "blue"
        },
        {
            title: "LA AGENDA",
            icon: <Cpu className="w-8 h-8" />,
            desc: "Enfocada en el impacto masivo de la IA, la evolución hacia la AGI y Deep Tech soberano para escalar empresas.",
            color: "red"
        },
        {
            title: "TU RED",
            icon: <Handshake className="w-8 h-8" />,
            desc: "Corporates globales, fondos de VC, aceleradoras y universidades de clase mundial, todos en el mismo ecosistema.",
            color: "blue"
        }
    ];

    return (
        <section className="py-40 px-4 bg-navy relative border-t border-white/5">
            <div className="container mx-auto">
                <div className="max-w-4xl mb-24">
                    <h2 className="text-5xl md:text-8xl font-extrabold mb-10 font-clash leading-[0.95] tracking-tight">
                        5 DÍAS QUE PUEDEN <br />
                        <span className="text-red">CAMBIAR EL RUMBO</span> <br />
                        DE TU EMPRESA
                    </h2>
                    <div className="h-1 w-32 bg-blue"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
                    {cards.map((card, i) => (
                        <div key={i} className="glass p-12 group hover:border-blue/50 transition-all duration-700 bg-white/[0.02]">
                            <div className={`mb-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 bg-white/5 group-hover:bg-${card.color}/10 group-hover:text-${card.color}`}>
                                {React.cloneElement(card.icon, { className: "w-8 h-8 transition-transform group-hover:scale-110" })}
                            </div>
                            <h3 className="text-3xl font-bold mb-6 font-display tracking-tight text-white">{card.title}</h3>
                            <p className="text-ice/50 leading-relaxed outfit text-lg">{card.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Cinematic Montage Placeholder */}
                <div className="relative h-[600px] md:h-[800px] rounded-[48px] overflow-hidden glass border-white/5 group">
                    <img
                        src="/london_night_abstract.png"
                        alt="London Tech Scene"
                        className="w-full h-full object-cover opacity-30 transition-all duration-[3000ms] ease-out group-hover:scale-110 group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                        <div className="w-px h-24 bg-gradient-to-t from-blue to-transparent mb-8"></div>
                        <h4 className="text-white/40 uppercase tracking-[0.8em] font-clash text-2xl mb-4">Cinematic Experience</h4>
                        <p className="text-white/20 outfit max-w-md uppercase tracking-[0.2em] text-sm">Tech • Capital • Talent • London</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySection;
