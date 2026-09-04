const lightbox = document.createElement('div')
lightbox.id = 'lightbox'

const closeButton = document.createElement('div')
closeButton.id = 'lightbox-close'
closeButton.innerHTML = '&times;'
lightbox.appendChild(closeButton)

document.body.appendChild(lightbox)

const images = document.querySelectorAll('.gallery-image')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')

        const existingImage = lightbox.querySelector('#lightbox-content')
        if (existingImage) {
            existingImage.remove()
        }

        const galleryImage = document.createElement('img')
        galleryImage.src = image.src
        galleryImage.id = 'lightbox-content'
        lightbox.appendChild(galleryImage)
    })
})

lightbox.addEventListener('click', e => {
    if(e.target === lightbox) {
        lightbox.classList.remove('active')
    }
})

closeButton.addEventListener('click', () => {
    lightbox.classList.remove('active')
})

document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active')
    }
})