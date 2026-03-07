// Table of Contents generator

function generateTOC() {
    const content = document.querySelector('.post-content');
    if (!content) return;

    const headings = content.querySelectorAll('h2');
    if (headings.length < 2) return;

    // Remove existing TOC if present
    const existing = document.querySelector('.post-toc');
    if (existing) existing.remove();

    const toc = document.createElement('nav');
    toc.className = 'post-toc';
    toc.innerHTML = '<div class="post-toc-title">Contents</div><ul></ul>';

    const ul = toc.querySelector('ul');

    headings.forEach((heading, index) => {
        const id = heading.id || 'section-' + index;
        heading.id = id;

        const li = document.createElement('li');
        li.innerHTML = `<a href="#${id}">${heading.textContent}</a>`;
        ul.appendChild(li);
    });

    const article = content.closest('article');
    if (article) {
        // Create a wrapper div to hold both TOC and article
        const wrapper = document.createElement('div');
        wrapper.className = 'post-layout';
        
        // Insert wrapper before article
        article.parentNode.insertBefore(wrapper, article);
        
        // Move both TOC and article into wrapper
        wrapper.appendChild(toc);
        wrapper.appendChild(article);
        
        // Prevent scroll propagation from TOC to main page
        toc.addEventListener('wheel', (e) => {
            const { scrollTop, scrollHeight, clientHeight } = toc;
            const scrollableHeight = scrollHeight - clientHeight;
            
            // If at top and scrolling up, or at bottom and scrolling down, pass to parent
            if ((scrollTop === 0 && e.deltaY < 0) || 
                (scrollTop >= scrollableHeight && e.deltaY > 0)) {
                // Let the event propagate to the main page
            } else {
                // Stop propagation - TOC handles the scroll
                e.stopPropagation();
            }
        }, { passive: true });
        
        // Also prevent touch scroll propagation on mobile
        let touchStartY = 0;
        toc.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        toc.addEventListener('touchmove', (e) => {
            const { scrollTop, scrollHeight, clientHeight } = toc;
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            const scrollableHeight = scrollHeight - clientHeight;
            
            if ((scrollTop === 0 && deltaY < 0) || 
                (scrollTop >= scrollableHeight && deltaY > 0)) {
                // Let the event propagate
            } else {
                e.stopPropagation();
            }
        }, { passive: true });
    }
}

document.addEventListener('DOMContentLoaded', generateTOC);
