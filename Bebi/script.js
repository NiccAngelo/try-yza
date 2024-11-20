const photoContainer = document.querySelector('.photo-container');

// Array of image URLs (replace with your own images)
const imageUrls = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'];

// Create and append images dynamically
imageUrls.forEach((url, index) => {
  const img = document.createElement('img');
  img.src = url;
  img.className = 'photo';
  img.style.top = `${10 + index * 20}%`; // Positioning the images
  img.style.left = `${20 + index * 20}%`;
  photoContainer.appendChild(img);
});

// Track mouse movement
photoContainer.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;

  // Display and animate each photo
  document.querySelectorAll('.photo').forEach((photo, index) => {
    const delay = index * 100; // Delay between each image animation
    setTimeout(() => {
      const offsetX = (clientX - window.innerWidth / 2) / 10;
      const offsetY = (clientY - window.innerHeight / 2) / 10;

      photo.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.2)`;
      photo.style.opacity = 1; // Reveal the photo
    }, delay);
  });
});

// Hide photos when the cursor leaves the area
photoContainer.addEventListener('mouseleave', () => {
  document.querySelectorAll('.photo').forEach((photo) => {
    photo.style.transform = 'translate(0, 0) scale(1)';
    photo.style.opacity = 0; // Hide the photo
  });
});
