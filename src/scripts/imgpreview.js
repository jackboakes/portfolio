const preview = document.createElement('div');
preview.id = 'image-preview';

const previewCard = document.createElement('div');
previewCard.id = 'image-preview-card';

const previewText = document.createElement('p');
const previewImg = document.createElement('img');
previewImg.id = 'image-preview-content';

previewCard.append( previewImg, previewText);
preview.appendChild(previewCard);

document.querySelector('.rhs').appendChild(preview);

document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('mouseenter', () => {
        previewImg.src = image.currentSrc || image.src;
        previewImg.alt = image.alt;
        previewText.textContent = image.dataset.caption;
        preview.classList.add('active');
    });

    image.addEventListener('mouseleave', () => {
        preview.classList.remove('active');
    });
});