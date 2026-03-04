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
        article.parentElement.classList.add('post-layout');
        article.parentNode.insertBefore(toc, article);
    }
}

document.addEventListener('DOMContentLoaded', generateTOC);
