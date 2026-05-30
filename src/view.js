document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.dr-profile-card');

    blocks.forEach(block => {
        const toggleBtn = block.querySelector('.dr-toggle-btn');
        const contentWrap = block.querySelector('.dr-about-content');

        if (toggleBtn && contentWrap) {
            toggleBtn.addEventListener('click', () => {
                const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
                
                if (isExpanded) {
                    contentWrap.style.display = 'none';
                    toggleBtn.setAttribute('aria-expanded', 'false');
                    toggleBtn.textContent = 'Show More';
                } else {
                    contentWrap.style.display = 'block';
                    toggleBtn.setAttribute('aria-expanded', 'true');
                    toggleBtn.textContent = 'Show Less';
                }
            });
        }
    });
});