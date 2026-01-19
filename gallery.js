const images = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

closeBtn.onclick = () => lightbox.classList.remove('active');
lightbox.onclick = e => e.target !== lightboxImg && lightbox.classList.remove('active');

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.classList.remove('active');
});