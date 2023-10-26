
        const gallery = document.getElementById('image-gallery');
        const images = gallery.getElementsByTagName('img');
        let currentImage = 0;

        function rotateImages() {
            images[currentImage].style.display = 'none';
            currentImage = (currentImage + 1) % images.length;
            images[currentImage].style.display = 'block';
        }

        function startRotation() {
            images[currentImage].style.display = 'block';
            setInterval(rotateImages, 6000);  }

        window.onload = startRotation;

