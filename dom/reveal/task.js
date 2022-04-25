
let reval =Array.from(document.getElementsByClassName('reveal'));

reval.forEach(el => {
    window.addEventListener('scroll', function() {
        console.log(el.getBoundingClientRect());
        if(el.getBoundingClientRect().top < 500) {
            el.classList.add('reveal_active');
        }
      });  
});
