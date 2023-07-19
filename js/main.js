(()=>{
    const sections = document.querySelectorAll('main div');

    window.addEventListener('load', ()=>{
        sections.forEach(section => {
            let divRect = section.getBoundingClientRect();

            if(divRect.top < window.innerHeight && divRect.bottom >=0) {
                section.classList.add('section_on');
            }
        });
    })
})();