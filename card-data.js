// Card data structure for Syntra blog posts
const cardData = [
    {
        title: 'Hello World',
        description: 'First blog post — testing Markdown rendering',
        image: '',
        slug: 'hello-world',
        date: '2026-03-01',
        draft: false,
        type: 'md'
    }
];

// Generate card HTML from data
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = card.draft ? 'tarot-card draft' : 'tarot-card';

    const link = card.type === 'md' ? `posts/index.html?p=${card.slug}` : `posts/${card.slug}.html`;
    const rotatorTag = card.draft ? 'div' : 'a';
    const rotatorAttrs = card.draft ? '' : `href="${link}"`;

    cardDiv.innerHTML = `
        <${rotatorTag} ${rotatorAttrs} class="card-rotator">
            <div class="card-inner">
                <div class="card-image">
                    <img src="${card.image}" alt="${card.title}" class="card-art">
                </div>
                <div class="card-scrim"></div>
                <div class="card-content">
                    <h2 class="card-title">${card.title}</h2>
                    <p class="card-description">${card.description}</p>
                </div>
                <div class="card-meta">
                    <span class="card-date">${card.date}</span>
                </div>
            </div>
        </${rotatorTag}>
    `;

    return cardDiv;
}

// Keep card aspect ratio in sync with the viewport
function syncViewportRatio() {
    document.documentElement.style.setProperty('--vp-w', window.innerWidth);
    document.documentElement.style.setProperty('--vp-h', window.innerHeight);
}
syncViewportRatio();
window.addEventListener('resize', syncViewportRatio);

// Initialize cards on page load
function initializeCards() {
    const postGrid = document.querySelector('.post-grid');
    if (!postGrid) return;

    postGrid.innerHTML = '';

    cardData.forEach(card => {
        const cardElement = createCardElement(card);
        postGrid.appendChild(cardElement);
    });

    // Signal that cards are in the DOM
    document.dispatchEvent(new CustomEvent('cardsInitialized'));
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCards);
} else {
    initializeCards();
}
