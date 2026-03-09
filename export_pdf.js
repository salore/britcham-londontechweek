const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 1. Set a standard desktop viewport
  await page.setViewport({ width: 1440, height: 1080 });

  console.log('Connecting to http://127.0.0.1:8080...');

  // 2. Go to page and wait for everything to load
  await page.goto('http://127.0.0.1:8080/', {
    waitUntil: 'networkidle0'
  });

  // 3. Emulate screen
  await page.emulateMediaType('screen');

  // 4. DEFENSIVE OVERRIDES + PDF READABILITY OPTIMIZATION
  await page.evaluate(() => {
    // Kill GSAP
    if (window.gsap) {
      window.gsap.globalTimeline.clear();
      window.gsap.set("*", { clearProps: "all" });
    }
    if (window.ScrollTrigger) {
      window.ScrollTrigger.getAll().forEach(t => t.kill());
    }

    const style = document.createElement('style');
    style.innerHTML = `
      /* Universal Reset */
      * { 
        opacity: 1 !important; 
        visibility: visible !important; 
        transform: none !important; 
        transition: none !important;
        animation: none !important;
        filter: none !important;
        backdrop-filter: none !important;
      }

      /* PDF READABILITY: Hide background images in sections with white text on blue background */
      #sumate-parallax-bg, #final-parallax-bg {
        display: none !important;
      }
      
      /* Force flat dark blue background for these sections in PDF */
      #sumate, #se-parte {
        background-color: #0F2548 !important; /* The primary navy color */
        background-image: none !important;
      }

      /* Force standard layout behavior */
      html, body {
        width: 1440px !important;
        overflow-x: hidden !important;
        overflow-y: visible !important;
      }

      /* Fix clipping and expansion */
      .max-w-[1440px], .container, section {
        max-width: 1440px !important;
        width: 1440px !important;
        overflow: visible !important;
      }

      /* Stats section specifics */
      .stat-block {
        display: block !important;
        padding-left: 2rem !important;
        margin-left: 0 !important;
        width: 100% !important;
      }

      /* FAQ Expansion */
      .faq-content { display: block !important; height: auto !important; max-height: none !important; overflow: visible !important; }
      .faq-inner { display: block !important; opacity: 1 !important; }

      /* Prevent stretches */
      section.min-h-screen, .min-h-screen { height: 1080px !important; min-height: 1080px !important; }

      /* Print settings */
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    `;
    document.head.appendChild(style);
  });

  // Wait for layout
  await new Promise(r => setTimeout(r, 3000));

  // 5. Measure actual content height
  const height = await page.evaluate(() => {
    return document.documentElement.offsetHeight;
  });

  console.log(`Final Export Height (Clean Background): ${height}px`);

  // 6. Final PDF Export
  await page.pdf({
    path: 'landing_page_full.pdf',
    printBackground: true,
    width: '1440px',
    height: (height + 50) + 'px',
    pageRanges: '1',
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log('PDF exported successfully: landing_page_full.pdf');
})();
