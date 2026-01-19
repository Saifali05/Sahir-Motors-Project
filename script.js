document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       REVEAL SCROLL
    =============================== */
    const revealElements = document.querySelectorAll('.reveal');

    if ("IntersectionObserver" in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('show'));
    }


    /* ===============================
       STICKY HEADER
    =============================== */
    const header = document.getElementById("header");

    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 50);
        });
    }


    /* ===============================
       HERO SLIDER (ONLY IF EXISTS)
    =============================== */
    const slides = document.querySelectorAll('.slide');

    if (slides.length > 1) {
        let currentSlide = 0;

        slides.forEach(slide => slide.classList.remove('show'));
        slides[0].classList.add('show');

        setInterval(() => {
            slides[currentSlide].classList.remove('show');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('show');
        }, 4000);
    }


    /* ===============================
       GALLERY POPUP (SAFE CHECK)
    =============================== */
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const popup = document.getElementById('galleryPopup');
    const popupImg = document.getElementById('popupImg');
    const popupCaption = document.getElementById('popupCaption');
    const popupClose = document.querySelector('.popup-close');

    if (galleryItems.length > 0 && popup && popupImg && popupClose) {

        galleryItems.forEach(img => {
            img.addEventListener('click', () => {
                popup.classList.add('active');
                popupImg.src = img.src;
                popupCaption.innerText = img.alt || '';
            });
        });

        popupClose.addEventListener('click', () => {
            popup.classList.remove('active');
        });

        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('active');
            }
        });
    }

});
