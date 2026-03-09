import React from 'react';

const Institutional = () => {
    const logos = [
        { name: "BRITCHAM CHILE", role: "Organizador Principal" },
        { name: "CORFO", role: "Apoyo Gubernamental" },
        { name: "INVESTCHILE", role: "Promoción de Exportaciones" },
        { name: "SCS", role: "Sociedad Chilena de Software" },
        { name: "STARTUP CHILE", role: "Ecosistema Emprendedor" },
        { name: "LONDRES TECH WEEK", role: "Sede Oficial" }
    ];

    return (
        <section className="py-24 px-4 bg-navy relative border-t border-white/5">
            <div className="container mx-auto">
                <div className="flex items-center gap-6 mb-16">
                    <div className="h-px w-12 bg-blue"></div>
                    <span className="text-sm font-bold tracking-[0.5em] text-blue/60 uppercase">Ecosistema Institucional</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {logos.map((logo, i) => (
                        <div key={i} className="glass p-8 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-all duration-500 border-white/5">
                            <div className="text-white/20 font-black font-clash text-lg tracking-tighter mb-2 group-hover:text-white/60 transition-colors">
                                {logo.name}
                            </div>
                            <div className="text-[10px] text-ice/20 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                {logo.role}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Institutional;
