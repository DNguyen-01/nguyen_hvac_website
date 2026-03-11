const reviews = document.querySelectorAll('.review-card');
let currentIndex = 0;

function showNextReview() {
    reviews[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % reviews.length;
    reviews[currentIndex].classList.add('active');
}

// Rotate every 5 seconds
setInterval(showNextReview, 5000);

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

// Gallery population script
// Define the folder containing images and an array of filenames. Update the list when you add/remove pictures.
const galleryFolder = 'hvac_units/photos/'; // Update this path as needed
const galleryFiles = [
    'img_10.jpeg',
    'img_2.jpeg',
    'img_16.jpeg',
    'img_4.jpeg',
    'img_13.jpeg',
    'img_6.jpeg',
    'img_7.jpeg',
    'img_8.jpeg',
    'img_17.jpeg',
    'img_12.jpeg',
    'img_14.jpeg',
    'img_15.jpeg',
    // add more filenames here as needed
];

const initialDisplay = 4; // Number of images to show initially
let allImagesLoaded = false;

const galleryGrid = document.getElementById('galleryGrid');
const viewMoreBtn = document.getElementById('viewMoreBtn');

if (galleryGrid) {
    galleryFiles.forEach((file, index) => {
        const img = document.createElement('img');
        img.src = galleryFolder + file;
        img.alt = file;
        img.classList.add('gallery-image');
        
        // Hide images beyond the initial display count
        if (index >= initialDisplay) {
            img.classList.add('hidden-image');
        }
        
        img.addEventListener('click', () => openModal(galleryFolder + file));
        galleryGrid.appendChild(img);
    });
    
    // Hide the View More button if there are 4 or fewer images
    if (galleryFiles.length <= initialDisplay) {
        viewMoreBtn.style.display = 'none';
    }
}

// View More button functionality
if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
        const hiddenImages = document.querySelectorAll('.hidden-image');
        hiddenImages.forEach(img => {
            img.classList.remove('hidden-image');
        });
        allImagesLoaded = true;
        viewMoreBtn.style.display = 'none';
    });
}

// Modal functionality
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-modal');

function openModal(imageSrc) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});
