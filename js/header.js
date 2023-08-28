(()=>{


    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.top-visual');
    let = prevScrollPosition = window.scrollY;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition === 0) {
            header.style.transform = 'translateY(0)';
            header.classList.remove('white-bg');
        } else if (scrollPosition > heroSection.offsetHeight) {
            header.classList.add('white-bg');
        } else {
            header.style.transform = 'translateY(0)';
            header.classList.remove('white-bg');
        }

        if(scrollPosition > 300) {
            header.classList.add('hidden');
        }

        if(scrollPosition < prevScrollPosition) {
            header.classList.remove('hidden');
        }

        prevScrollPosition = scrollPosition;
    });

})();