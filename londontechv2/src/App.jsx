import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tension from './components/Tension';
import WhySection from './components/WhySection';
import Delegation from './components/Delegation';
import Agenda from './components/Agenda';
import Institutional from './components/Institutional';
import Investment from './components/Investment';
import FinalCTA from './components/FinalCTA';

function App() {
    return (
        <div className="relative min-h-screen bg-[#0A0F2C] text-white selection:bg-[#1E6FFF] selection:text-white scroll-smooth">
            {/* Premium Overlays */}
            <div className="grain"></div>
            <div className="grid-lines"></div>

            <Navbar />

            <main>
                <Hero />
                <Tension />
                <WhySection />
                <Delegation />
                <Agenda />
                <Institutional />
                <Investment />
                <FinalCTA />
            </main>
        </div>
    );
}


export default App;
