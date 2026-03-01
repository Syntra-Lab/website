// Card Tilt + Click-to-Navigate

document.addEventListener('cardsInitialized', () => {
    const cards = document.querySelectorAll('.tarot-card:not(.draft)');

    cards.forEach(card => {
        let isAnimating = false;

        card.addEventListener('mousemove', (e) => {
            if (isAnimating) return;

            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100 - 50;
            const y = ((e.clientY - rect.top) / rect.height) * 100 - 50;

            const tiltX = -y / 7;
            const tiltY = x / 7;

            card.style.setProperty('--tilt-x', `${tiltX}deg`);
            card.style.setProperty('--tilt-y', `${tiltY}deg`);
        });

        card.addEventListener('mouseleave', () => {
            if (isAnimating) return;

            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');
        });

        const cardLink = card.querySelector('.card-rotator');
        cardLink.addEventListener('click', (e) => {
            e.preventDefault();
            const href = cardLink.href;

            isAnimating = true;
            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');

            const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
            const fadeColor = isDark ? '#000' : '#fff';

            // Full-screen overlay for the fade
            const overlay = document.createElement('div');
            Object.assign(overlay.style, {
                position: 'fixed',
                inset: '0',
                backgroundColor: fadeColor,
                opacity: '0',
                zIndex: '10000',
                pointerEvents: 'none'
            });
            document.body.appendChild(overlay);

            const tl = gsap.timeline({
                onComplete: () => {
                    window.location.href = href;
                }
            });

            // Glow builds up
            tl.to(card, {
                filter: "drop-shadow(0 0 5px white)",
                duration: 0.8,
                ease: "power2.out"
            }, 0);

            // Glow eases out slowly
            tl.to(card, {
                filter: "drop-shadow(0 0 0px white)",
                duration: 3.0,
                ease: "power2.out"
            }, 0.8);

            // Page fades out
            tl.to(overlay, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.in"
            }, 0.8);
        });
    });
});
