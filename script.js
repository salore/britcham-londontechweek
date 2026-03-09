/* ============================================
   BritCham Chile - London Tech Week 2026
   Main JavaScript
   ============================================ */

// ─── GSAP Setup ───
gsap.registerPlugin(ScrollTrigger);

// ─── Sticky Header ───
(function initStickyHeader() {
    const mainHeader = document.getElementById('main-header');
    const headerContainer = document.getElementById('header-container');
    const headerLogo = document.getElementById('header-logo');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.querySelector('#mobile-menu-btn span');
    let isScrolled = false;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50 && !isScrolled) {
            isScrolled = true;
            gsap.to(mainHeader, { backgroundColor: 'rgba(30, 40, 60, 0.9)', paddingBottom: '0px', duration: 0.3, ease: 'power2.out' });
            gsap.to(headerContainer, { paddingTop: '0.5rem', paddingBottom: '0.5rem', duration: 0.3, ease: 'power2.out' });
            gsap.to(headerLogo, { height: '70px', duration: 0.3, ease: 'power2.out' });
            gsap.to(navLinks, { color: '#ffffff', duration: 0.3 });
            gsap.to(mobileMenuBtn, { color: '#ffffff', duration: 0.3 });
            headerLogo.src = 'logos/logos empresas/britwhite.png';
            mainHeader.style.borderBottomColor = '#0071ce';
        } else if (window.scrollY <= 50 && isScrolled) {
            isScrolled = false;
            gsap.to(mainHeader, { backgroundColor: '#ffffff', duration: 0.3, ease: 'power2.out' });
            gsap.to(headerContainer, { paddingTop: '1rem', paddingBottom: '1rem', duration: 0.3, ease: 'power2.out' });
            gsap.to(headerLogo, { height: window.innerWidth >= 768 ? '91px' : '62px', duration: 0.3, ease: 'power2.out' });
            gsap.to(navLinks, { color: '#080c41', duration: 0.3 });
            gsap.to(mobileMenuBtn, { color: '#080c41', duration: 0.3 });
            headerLogo.src = 'logos/logos empresas/britblack.png';
            mainHeader.style.borderBottomColor = '#080c41';
        }
    });

    window.addEventListener('resize', () => {
        if (!isScrolled) {
            headerLogo.style.height = window.innerWidth >= 768 ? '91px' : '62px';
        }
    });
})();

// ─── FAQ Toggle ───
function toggleFAQ(element) {
    const content = element.nextElementSibling;
    const inner = content.querySelector('.faq-inner');
    const icon = element.querySelector('.faq-icon');

    if (content.style.gridTemplateRows === '1fr') {
        content.style.gridTemplateRows = '0fr';
        inner.classList.remove('opacity-100');
        inner.classList.add('opacity-0');
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.style.gridTemplateRows = '1fr';
        inner.classList.remove('opacity-0');
        inner.classList.add('opacity-100');
        icon.style.transform = 'rotate(180deg)';
    }
}

// ─── GSAP Scroll Animations (DOMContentLoaded) ───
document.addEventListener('DOMContentLoaded', () => {

    // Hero Banner Evaporation (Parallax on scroll)
    const heroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: 'section.relative.min-h-screen',
            start: 'top top',
            end: 'bottom 20%',
            scrub: true
        }
    });
    heroTimeline
        .to('#hero-logo', { opacity: 0, y: -100, duration: 1 }, 0)
        .to('#hero-mision', { opacity: 0, scale: 0.8, y: -50, duration: 0.8 }, 0.1)
        .to('#hero-title', { opacity: 0, y: -150, duration: 1.2 }, 0)
        .to('#hero-year-container', { opacity: 0, y: -80, duration: 1 }, 0.2)
        .to('#hero-desc-container', { opacity: 0, y: -60, duration: 1 }, 0.3)
        .to('#hero-cta-btn', { opacity: 0, scale: 0.7, y: -40, duration: 0.8 }, 0.4);

    // Parallax Effects
    gsap.to('#sumate-parallax-bg', {
        y: 50, ease: 'none',
        scrollTrigger: { trigger: '#sumate', start: 'top bottom', end: 'bottom top', scrub: true }
    });
    gsap.to('#final-parallax-bg', {
        x: window.innerWidth < 768 ? -75 : -160, y: 160, ease: 'none',
        scrollTrigger: { trigger: '#se-parte', start: 'top bottom', end: 'bottom top', scrub: true }
    });

    // Súmate Section
    const sumateTimeline = gsap.timeline({
        scrollTrigger: { trigger: '#sumate', start: 'top 85%', toggleActions: 'play none none none' }
    });
    sumateTimeline
        .fromTo('#final-mission-title', { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
        .fromTo('.stat-block', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }, '-=0.4')
        .fromTo('#sumate .lg\\:sticky', { opacity: 0, scale: 0.9, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6');

    // Sé Parte Section
    const seParteTimeline = gsap.timeline({
        scrollTrigger: { trigger: '#se-parte', start: 'top 80%', toggleActions: 'play none none none' }
    });
    seParteTimeline
        .fromTo('.se-parte-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' })
        .fromTo('#final-cta-btn', { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.4');

    // Section Titles Entrance
    gsap.fromTo(['#quienes-somos-title', '#agenda-title', '#novas-solo-title'],
        { opacity: 0, y: 40 },
        {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2,
            scrollTrigger: { trigger: '#quienessomos, #agenda, #se-parte', start: 'top 85%', toggleActions: 'play none none none' }
        }
    );

    // Quienes Somos - Scroll Reveal
    gsap.set('#quienessomos p, #quienessomos h3, #respaldados-title, #quienessomos span, .network-logos img', { opacity: 0, y: 30 });
    const qsTimeline = gsap.timeline({
        scrollTrigger: { trigger: '#quienessomos', start: 'top 60%', toggleActions: 'play none none none' }
    });
    qsTimeline.to('#quienessomos p, #quienessomos h3, #respaldados-title, #quienessomos span', {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out'
    });

    // Institutional Network Logos
    gsap.fromTo('.network-logos img',
        { opacity: 0, scale: 0.8 },
        {
            opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: '#institutional-network', start: 'top 90%', toggleActions: 'play none none none' }
        }
    );

    // FAQ Section
    const faqTimeline = gsap.timeline({
        scrollTrigger: { trigger: '#faq', start: 'top 85%', toggleActions: 'play none none none' }
    });
    faqTimeline.fromTo('#faq-title',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: window.innerWidth < 768 ? 0.5 : 0.8, ease: 'power3.out' }
    );
    faqTimeline.fromTo('.faq-item',
        { autoAlpha: 0, x: -30 },
        { autoAlpha: 1, x: 0, duration: window.innerWidth < 768 ? 0.4 : 0.6, stagger: 0.1, ease: 'power2.out' },
        '+=0.2'
    );

    // Inversión Section
    const inversionTimeline = gsap.timeline({
        scrollTrigger: { trigger: '#inversion', start: 'top 85%', toggleActions: 'play none none none' }
    });
    inversionTimeline.fromTo('#inversion-title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    gsap.utils.toArray('.inversion-card').forEach((card, index) => {
        const tl = gsap.timeline({
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
        });
        tl.fromTo(card,
            { opacity: 0, y: 50, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7, delay: index * 0.15, ease: 'back.out(1.7)', borderLeftColor: '#00A4EF' }
        );
        const icon = card.querySelector('.material-symbols-outlined');
        if (icon) {
            tl.fromTo(icon, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' }, '-=0.4');
        }
        const contentEls = card.querySelectorAll('h3, p, ul');
        tl.fromTo(contentEls, { opacity: 0 }, { opacity: 1, duration: 0.6, stagger: 0.1 }, '-=0.3');
    });

    // Why UK Section
    const whyUkTimeline = gsap.timeline({
        scrollTrigger: { trigger: '#por-que-ltw', start: 'top 85%', toggleActions: 'play none none none' }
    });
    whyUkTimeline.fromTo('#why-uk-title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    gsap.utils.toArray('.why-uk-card').forEach((card, index) => {
        const tl = gsap.timeline({
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
        });
        tl.fromTo(card,
            { opacity: 0, y: 50, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7, delay: index * 0.15, ease: 'back.out(1.7)', borderLeftColor: '#00A4EF' }
        );
        const icon = card.querySelector('svg');
        if (icon) {
            tl.fromTo(icon, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' }, '-=0.4');
        }
        const texts = card.querySelectorAll('h3, p');
        tl.fromTo(texts, { opacity: 0 }, { opacity: 1, duration: 0.6, stagger: 0.1 }, '-=0.3');
    });

    // Agenda Section (Responsive)
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
        const agendaTl = gsap.timeline({
            scrollTrigger: { trigger: '#agenda', start: 'top 75%', toggleActions: 'play none none none' }
        });
        agendaTl
            .fromTo('#agenda-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
            .fromTo('#countdown', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.4')
            .fromTo('#agenda-legend', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.3')
            .fromTo('.agenda-card', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.7, stagger: 0.2, ease: 'power2.out' }, '-=0.2');

        const whyTl = gsap.timeline({
            scrollTrigger: { trigger: '#por-que-ltw', start: 'top 75%', toggleActions: 'play none none none' }
        });
        whyTl
            .fromTo('#why-uk-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
            .fromTo('#why-ltw-subtitle', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.4')
            .fromTo('.why-card', { opacity: 0, scale: 0.9, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'back.out(1.2)' }, '-=0.2');
    });

    mm.add('(max-width: 1023px)', () => {
        const introTl = gsap.timeline({
            scrollTrigger: { trigger: '#agenda', start: 'top 85%', toggleActions: 'play none none none' }
        });
        introTl
            .fromTo('#agenda-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
            .fromTo('#countdown', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.3')
            .fromTo('#agenda-legend', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.3');

        gsap.utils.toArray('.agenda-card').forEach((card) => {
            gsap.fromTo(card,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' } }
            );
        });

        const whyIntroTl = gsap.timeline({
            scrollTrigger: { trigger: '#por-que-ltw', start: 'top 85%', toggleActions: 'play none none none' }
        });
        whyIntroTl
            .fromTo('#why-uk-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
            .fromTo('#why-ltw-subtitle', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.3');

        gsap.utils.toArray('.why-card').forEach((card) => {
            gsap.fromTo(card, { opacity: 0, x: -30 }, {
                opacity: 1, x: 0, duration: 0.8,
                scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' }
            });
        });
    });

});

// ─── Countdown Timer ───
(function initCountdown() {
    const targetDate = new Date(2026, 5, 8, 9, 0, 0).getTime();

    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const countdownEl = document.getElementById('countdown');

        if (distance < 0) {
            if (countdownEl) countdownEl.innerHTML = "<span class='text-primary font-black uppercase tracking-widest text-sm'>¡EL EVENTO HA COMENZADO!</span>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');

        if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
})();

// ─── Hero Data Stream (Particle Network) ───
(function initDataStream() {
    const canvas = document.getElementById('hero-data-stream');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let particleCount = 100;
    let maxDistance = 250;
    let mouse = { x: null, y: null };

    function init() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;

        if (window.innerWidth < 768) {
            particleCount = 40;
            maxDistance = 150;
        } else {
            particleCount = 100;
            maxDistance = 250;
        }

        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });
        }
    }

    window.addEventListener('resize', init);
    canvas.parentElement.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    canvas.parentElement.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 113, 206, 0.5)';
            ctx.fill();

            // Mouse connections
            if (mouse.x !== null) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 250) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(0, 113, 206, ${0.45 * (1 - dist / 250)})`;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            }

            // Particle-to-particle connections
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < maxDistance) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(0, 113, 206, ${0.75 * (1 - dist / maxDistance)})`;
                    ctx.lineWidth = 1.0;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();
})();
