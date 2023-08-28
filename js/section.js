(()=>{
    const sections = document.querySelectorAll('main div');


    window.addEventListener('load', ()=>{

        console.log('ee');
        sections.forEach(section => {
            let divRect = section.getBoundingClientRect();

            if(divRect.top < window.innerHeight && divRect.bottom >=0) {
                section.classList.add('section_on');
            }
        });
    })

    window.addEventListener('scroll', ()=>{
        sections.forEach(section => {
            let divRect = section.getBoundingClientRect();

            if(divRect.top < window.innerHeight && divRect.bottom >=0) {
                section.classList.add('section_on');
            }
        });
    });
})();