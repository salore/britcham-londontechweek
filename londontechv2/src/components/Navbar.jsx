import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-navy/80 backdrop-blur-xl border-b border-white/5' : 'py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue rounded-lg flex items-center justify-center font-black text-white">CH</div>
                    <span className="text-xl font-extrabold tracking-tighter font-clash flex items-center gap-2">
                        CHILE <span className="text-white/30">→</span> LONDON
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-12">
                    {['INICIO', 'PROGRAMA', 'DELEGACIÓN', 'INVERSIÓN'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs font-bold tracking-[0.3em] text-white/50 hover:text-blue transition-colors hover:scale-105 transform duration-300"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="shimmer-btn bg-red text-white text-[10px] font-bold px-8 py-3 rounded-xl tracking-[0.2em] hover:scale-105 transition-all shadow-[0_10px_30px_rgba(200,16,46,0.2)]">
                        INSCRIBIRSE
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
