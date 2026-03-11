document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Splits text into individual characters wrapped in spans for animation control
    function setupSplitText(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const text = element.innerText.trim();
            const fullWidth = element.offsetWidth;
            element.innerHTML = "";
            element.style.whiteSpace = "nowrap";
            element.style.setProperty('--word-width', fullWidth + 'px');

            let currentOffset = 0;
            text.split("").forEach((char) => {
                const span = document.createElement("span");
                span.innerText = char === " " ? "\u00A0" : char;
                span.style.display = "inline-block";
                element.appendChild(span);
                span.style.setProperty('--char-offset', `-${currentOffset}px`);
                currentOffset += span.offsetWidth;
            });
        });
    }

    window.addEventListener('load', () => {
        setupSplitText('#split-subtitulo');
        setupSplitText('#split-portfolio');
        setupSplitText('#split-nome-fundo');
        setupSplitText('.split-h2');

        const tl = gsap.timeline();

        // Main intro timeline for hero text animations
        tl.from("#split-subtitulo span", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.02,
            ease: "power3.out"
        })
            .from("#split-portfolio span", {
                y: 100,
                opacity: 0,
                rotationX: -90,
                duration: 1.2,
                stagger: 0.05,
                ease: "back.out(1.7)"
            }, "-=0.4")
            .from("#split-nome-fundo span", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.03,
                ease: "power2.out"
            }, "-=1")

        // Animate interface elements (sidebar, menu button, contact link, scroll indicator)
        tl.from([
            "#sidebar",
            "header button[aria-controls='sidebar']",
            "header a[href*='wa.me']",
            "header .pointer-events-none.absolute.flex-col"
        ], {
            x: (i, target) => {
                if (target.id === 'sidebar' || target.tagName === 'BUTTON') return -50;
                if (target.tagName === 'A') return 50;
                return 0;
            },
            y: (i, target) => (target.classList.contains('pointer-events-none') ? 20 : 0),
            opacity: 0,
            duration: 0.5,
            stagger: 0,
            ease: "power4.out",
            clearProps: "all",
            onComplete: function () {
                gsap.set("header a[href*='wa.me']", { opacity: 1, visibility: "visible" });
            }
        }, "-=0.6");

        // Pins the header while the next section scrolls underneath (curtain effect)
        ScrollTrigger.create({
            trigger: "header",
            start: "top top",
            endTrigger: "main",
            end: "top top",
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
        });

        // Gradually fades out the hero text during scroll
        gsap.to(["#split-subtitulo", "#split-portfolio", "#split-nome-fundo"], {
            scrollTrigger: {
                trigger: "main",
                start: "top bottom",
                end: "top 20%",
                scrub: true,
            },
            opacity: 0,
            ease: "none"
        });
    });
});