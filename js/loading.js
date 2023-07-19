(()=>{
    window.addEventListener('load', () => {
        document.body.classList.remove('before_load');

        
    });


    document.querySelector('.loading').addEventListener('transitionend', (e)=>{
        document.body.removeChild(e.currentTarget);
    })
})();