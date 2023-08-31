(()=>{

    const gotoTopBtn = document.querySelector('.gototop');
    
    window.addEventListener('scroll', ()=>{
    
        if(window.scrollY > 0) {
            gotoTopBtn.classList.add('show');
        } else if(window.scrollY == 0) {
            gotoTopBtn.classList.remove('show');
        }
    });
    
    
    
    })();