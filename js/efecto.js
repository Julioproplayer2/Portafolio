document.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.hidden');
        const scrollPosition = window.innerHeight + window.scrollY;
    
        elements.forEach((el) => {
            if (el.offsetTop < scrollPosition) {
                el.classList.add('visible');
            }
        });
    });
    
