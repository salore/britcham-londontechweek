import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Agenda = () => {
    const [activeDay, setActiveDay] = useState(0);

    const days = [
        {
            date: "JUN 08",
            title: "LLEGADA Y BRIEFING",
            activities: [
                { time: "18:00", type: "Welcome Night", title: "Cena de Bienvenida en The Shard", location: "Hutong at The Shard" },
                { time: "20:00", type: "Briefing", title: "Orientación Estratégica: El Paisaje Tech 2026", location: "Hospitality Suite" }
            ]
        },
        {
            date: "JUN 09",
            title: "LTW MAIN SUMMIT",
            activities: [
                { time: "09:00", type: "Keynote", title: "Opening Plenary: Future of Global Tech", location: "Main Stage" },
                { time: "13:00", type: "Networking", title: "Business Lunch: Chile-UK Tech Bridge", location: "Delegation Lounge" },
                { time: "16:00", type: "Panel", title: "Deep Tech & AI Sovereignty", location: "Tech Arena" }
            ]
        },
        {
            date: "JUN 10",
            title: "CAPITAL & TALENT",
            activities: [
                { time: "10:00", type: "Venture Day", title: "Meetings with Tier-1 VCs (London & Global)", location: "City of London" },
                { time: "15:00", type: "Talent Hub", title: "High-Skilled Talent Networking", location: "The City" }
            ]
        },
        {
            date: "JUN 11",
            title: "ECOSISTEMAS",
            activities: [
                { time: "09:30", type: "Site Visit", title: "Innovation Tour: DeepMind & King's Cross Heritage", location: "King's Cross" },
                { time: "14:00", type: "B2B", title: "Matchmaking Sessions with UK Corporates", location: "Business Centre" }
            ]
        },
        {
            date: "JUN 12",
            title: "CLOSING & ROI",
            activities: [
                { time: "10:00", type: "Workshop", title: "Scaling from London to the World", location: "UK House" },
                { time: "13:00", type: "Closing", title: "Farewell ROI Review & Next Steps", location: "Thames Cruise" }
            ]
        }
    ];

    return (
        <section id="programa" className="py-40 px-4 bg-navy relative border-t border-white/5">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-6xl md:text-8xl font-bold font-clash leading-none tracking-tighter mb-8">PROGRAMA <br /><span className="text-blue">ESTRATÉGICO</span></h2>
                        <p className="text-xl text-ice/50 outfit">Una agenda curada para maximizar el retorno de inversión y conexiones críticas.</p>
                    </div>
                    <div className="flex items-center gap-4 text-white/40 uppercase tracking-[0.3em] font-bold text-xs">
                        <Calendar className="w-4 h-4" />
                        <span>JUNIO 8 – 12, 2026</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Selectores de día */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {days.map((day, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveDay(i)}
                                className={`group p-8 rounded-3xl text-left transition-all duration-500 border relative overflow-hidden ${activeDay === i
                                        ? 'bg-blue border-blue text-white shadow-[0_20px_40px_rgba(30,111,255,0.2)]'
                                        : 'bg-white/5 border-white/5 text-ice/40 hover:bg-white/[0.08] hover:border-white/10'
                                    }`}
                            >
                                {activeDay === i && (
                                    <motion.div layoutId="activeBG" className="absolute left-0 top-0 w-1 h-full bg-white" />
                                )}
                                <span className={`block text-xs font-bold tracking-[0.3em] mb-2 ${activeDay === i ? 'text-white/80' : 'text-blue'}`}>{day.date}</span>
                                <span className="block text-xl font-bold font-clash tracking-tight">{day.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Contenido del día */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeDay}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="glass p-10 md:p-16 border-white/5 min-h-[500px]"
                            >
                                <div className="space-y-12">
                                    {days[activeDay].activities.map((item, j) => (
                                        <div key={j} className="flex flex-col md:flex-row gap-8 md:items-center group">
                                            <div className="flex items-center gap-4 text-blue font-bold tracking-widest outfit border-r border-white/10 pr-8 min-w-[140px]">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.time}</span>
                                            </div>
                                            <div className="flex-1">
                                                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-ice/40 uppercase tracking-widest mb-3">{item.type}</span>
                                                <h4 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-blue transition-colors">{item.title}</h4>
                                                <div className="flex items-center gap-2 text-ice/30 text-sm">
                                                    <MapPin className="w-3 h-3" />
                                                    <span>{item.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agenda;
