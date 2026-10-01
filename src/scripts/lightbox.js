const preview = document.createElement('div');
preview.id = 'image-preview';

const previewImg = document.createElement('img');
previewImg.id = 'image-preview-content';
preview.appendChild(previewImg);

document.querySelector('.rhs').appendChild(preview);

document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('mouseenter', () => {
        previewImg.src = image.currentSrc || image.src;
        previewImg.alt = image.alt;
        preview.classList.add('active');
    });

    image.addEventListener('mouseleave', () => {
        preview.classList.remove('active');
    });
});