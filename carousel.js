    document.querySelectorAll('.carousel').forEach(carousel => {
        const images = carousel.querySelector('.carousel-images');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');

        let index = 0;

        const showImage = (idx) => {
            const width = carousel.offsetWidth;
            images.style.transform = `translateX(${-idx * width}px)`;
        };

        prevButton.addEventListener('click', () => {
            index = (index > 0) ? index - 1 : images.children.length - 1;
            showImage(index);
        });

        nextButton.addEventListener('click', () => {
            index = (index < images.children.length - 1) ? index + 1 : 0;
            showImage(index);
        });

        // Initialize first image
        showImage(index);
    });
