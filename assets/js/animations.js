document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    function setupSplitText(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const text = element.innerText.trim();
            const fullWidth = element.offsetWidth;

            element.innerHTML = "";
            element.style.whiteSpace = "nowrap";
            element.style.setProperty('--word-width', fullWidth + 'px'); // Store full text width

            let currentOffset = 0;

            // Split text into individual character spans
            text.split("").forEach((char) => {
                const span = document.createElement("span");
                span.innerText = char === " " ? "\u00A0" : char;
                span.style.display = "inline-block";

                element.appendChild(span);

                // Track character offset for animations
                span.style.setProperty('--char-offset', `-${currentOffset}px`);
                currentOffset += span.offsetWidth;
            });
        });
    }

    window.addEventListener('load', () => {

        // Apply character splitting
        setupSplitText('#split-subtitulo');
        setupSplitText('#split-portfolio');
        setupSplitText('#split-nome-fundo');

        // Make containers visible before animation starts
        gsap.set([
            "#split-subtitulo",
            "#split-portfolio",
            "#sidebar",
            "header button[aria-controls='sidebar']",
            "header a[href*='wa.me']",
            "header .pointer-events-none.absolute.flex-col",
            "#split-nome-fundo"
        ], {
            opacity: 1,
            visibility: "visible"
        });

        const tl = gsap.timeline(); // Main intro animation timeline

        // Subtitle characters animation
        tl.fromTo(
            "#split-subtitulo span",
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.02,
                ease: "power3.out"
            }
        )

            // Portfolio title animation
            .fromTo(
                "#split-portfolio span",
                {
                    y: 100,
                    opacity: 0,
                    rotationX: -90
                },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 1.2,
                    stagger: 0.05,
                    ease: "back.out(1.7)"
                },
                "-=0.4"
            )

            // Background name subtle reveal
            .fromTo(
                "#split-nome-fundo span",
                {
                    y: 40,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 0.02,
                    duration: 1.2,
                    stagger: 0.03,
                    ease: "power2.out"
                },
                "-=1"
            )

            // Sidebar and header UI elements animation
            .fromTo(
                [
                    "#sidebar",
                    "header button[aria-controls='sidebar']",
                    "header a[href*='wa.me']",
                    "header .pointer-events-none.absolute.flex-col"
                ],
                {
                    opacity: 0,
                    x: (i, target) => (target.id === 'sidebar' || target.tagName === 'BUTTON' ? -50 : (target.tagName === 'A' ? 50 : 0))
                },
                {
                    opacity: 1,
                    x: 100,
                    duration: 0.5,
                    ease: "power4.out",
                    clearProps: "transform",

                    // Ensure WhatsApp button stays visible
                    onComplete: function () {
                        gsap.set("header a[href*='wa.me']", {
                            opacity: 1,
                            visibility: "visible"
                        });
                    }
                },
                "-=0.6"
            );

        // Pin header while scrolling into main
        ScrollTrigger.create({
            trigger: "header",
            start: "top top",
            endTrigger: "main",
            end: "top top",
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
        });

        // Fade out intro text on scroll
        gsap.to(
            [
                "#split-subtitulo",
                "#split-portfolio",
                "#split-nome-fundo"
            ],
            {
                scrollTrigger: {
                    trigger: "main",
                    start: "top bottom",
                    end: "top 20%",
                    scrub: true,
                },
                opacity: 0,
                ease: "none"
            }
        );
    });
});