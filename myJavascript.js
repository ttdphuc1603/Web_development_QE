const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const fullImageModal = document.getElementById('fullImageModal');
   
const images = [
    { src: 'i1.jpg', desc: 'Temple and sky' },
    { src: 'i2.jpg', desc: 'Relief street' },
    { src: 'i3.jpg', desc: 'A corner' },
    { src: 'i4.jpg', desc: 'Dawn' },
    { src: 'i5.jpg', desc: 'A day out' },
    { src: 'i6.jpg', desc: 'Achitect' },
    { src: 'i7.jpg', desc: 'Window through' },
    { src: 'i8.jpg', desc: 'Flight' },
    { src: 'i9.jpg', desc: 'Effiel' },
    { src: 'i10.jpg', desc: 'River side' },
    { src: 'i11.jpg', desc: 'Night street' },
    { src: 'i12.jpg', desc: 'Street' },
    { src: 'i13.jpg', desc: 'Green wall' },
    { src: 'i14.jpg', desc: 'Window one' },
    { src: 'i15.jpg', desc: 'A corner' },
    { src: 'i16.jpg', desc: 'Old station' },
    { src: 'i17.jpg', desc: 'River blue' },
    { src: 'i18.jpg', desc: 'Ocean view' },
    { src: 'i19.jpg', desc: 'Haneul' },
    { src: 'i20.jpg', desc: 'Blue' }

  ];

  
const fullImage = document.getElementById('fullImage');
const fullImageDesc = document.getElementById('fullImageDesc');
const closeModalBtn = document.getElementById('closeModalBtn');

function createImages(start, end) {
    for (let i = start; i < end; i++) {
        const div = document.createElement('div');
        div.classList.add('galleryPhoto');
        div.innerHTML = `<img src="./asset/${images[i].src}" alt="${images[i].desc}">`;

        div.addEventListener('click', () => {
            fullImage.src = './asset/'+images[i].src;
            fullImageDesc.textContent = images[i].desc;
            fullImageModal.style.display = "block";
        });

        gallery.appendChild(div);
    }
}

createImages(0, 8);

loadMoreBtn.addEventListener('click', () => {
    const currentImages = gallery.querySelectorAll('.galleryPhoto');
    const startIndex = currentImages.length;
    const endIndex = Math.min(startIndex + 4, images.length);
    createImages(startIndex, endIndex);

    if (endIndex === images.length) {
        loadMoreBtn.style.display = 'none';
    }
});

closeModalBtn.addEventListener('click', () => {
    fullImageModal.style.display = "none";
    fullImage.src = "";
    fullImageDesc.textContent = "";
});

