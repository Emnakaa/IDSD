    let index = 0;
    const slides = document.querySelector('.carousel-images');
    const images = slides.querySelectorAll('img:not(.clone)');
    const totalSlides = images.length;
    
    function goToSlide(n) {
        // Désactive les transitions temporairement pour les réinitialisations
        if (n >= totalSlides || n < 0) {
            slides.style.transition = 'none';
        } else {
            slides.style.transition = 'transform 0.5s ease-in-out';
        }
        
        index = n;
        slides.style.transform = `translateX(${-index * 100}%)`;
        
        // Réinitialisation invisible après être arrivé au clone
        if (index >= totalSlides) {
            setTimeout(() => {
                slides.style.transition = 'none';
                index = 0;
                slides.style.transform = `translateX(0)`;
                // Réactive les transitions après la réinitialisation
                setTimeout(() => {
                    slides.style.transition = 'transform 0.5s ease-in-out';
                }, 20);
            }, 500);
        }
    }
    
    function nextSlide() {
        goToSlide(index + 1);
    }
    
    function prevSlide() {
        if (index <= 0) {
            // Va au clone de fin (pour l'effet infini vers la gauche)
            slides.style.transition = 'none';
            slides.style.transform = `translateX(${-totalSlides * 100}%)`;
            setTimeout(() => {
                slides.style.transition = 'transform 0.5s ease-in-out';
                goToSlide(totalSlides - 1);
            }, 20);
        } else {
            goToSlide(index - 1);
        }
    }
