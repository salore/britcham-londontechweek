import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Tension = () => {
    const sectionRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
        statsRef.current.forEach((stat) => {
            if (!stat) return;
            const target = parseInt(stat.getAttribute('data-target'));
            gsap.fromTo(stat,
                { innerText: 0 },
                {
                    innerText: target,
                    duration: 2.5,
                    ease: 'power3.out',
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: stat,
                        start: 'top 90%',
                    }
                }
            );
        });
    }, []);

    const stats = [
        { label: '#1 EN EUROPA PARA FDI', value: 1, suffix: '', desc: 'El Reino Unido atrae más inversión extranjera directa que cualquier otro país europeo.' },
        { label: '#1 EN UNICORNIOS EN EUROPA', value: 1, suffix: '', desc: 'Más startups valuadas en +$1B que cualquier otra economía europea.' },
        { label: '+170,000 EMPRESAS TECH', value: 170000, suffix: '+', desc: 'Un ecosistema masivo, diverso y altamente conectado.' }
    ];

    return (
        <section ref={sectionRef} className="py-32 px-4 overflow-hidden relative bg-navy">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                {/* Left: Stats */}
                <div className="space-y-32">
                    {stats.map((stat, i) => (
                        <div key={i} className="group relative border-l-2 border-white/5 pl-10 hover:border-blue transition-colors duration-500 pb-2">

                            <div className="text-7xl md:text-9xl font-extrabold tracking-tighter text-white mb-6 flex items-baseline font-clash">
                                <span ref={el => statsRef.current[i] = el} data-target={stat.value}>0</span>
                                <span className="text-blue">{stat.suffix}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 tracking-[0.2em] text-blue/80">{stat.label}</h3>
                            <p className="text-ice/50 max-w-sm leading-relaxed text-lg outfit">{stat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Right: Editorial */}
                <div className="lg:sticky lg:top-40">
                    <div className="glass p-12 md:p-16 border-l-4 border-red relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <p className="text-4xl md:text-6xl font-bold leading-[1.1] mb-12 text-white font-clash">
                            "LAS EMPRESAS QUE LIDERAN MAÑANA SON LAS QUE <span className="text-blue">CONSTRUYEN SUS REDES</span> HOY."
                        </p>
                        <p className="text-xl text-ice/60 leading-relaxed mb-12 outfit max-w-xl">
                            El Reino Unido no es solo un mercado — es la puerta estratégica hacia EE.UU., Europa y Medio Oriente desde una sola ciudad global.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="h-0.5 w-16 bg-red"></div>
                            <span className="text-white font-bold tracking-[0.3em] text-xs">LONDRES 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tension;
