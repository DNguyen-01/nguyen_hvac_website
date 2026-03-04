const reviews = document.querySelectorAll('.review-card');
let currentIndex = 0;

function showNextReview() {
    reviews[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % reviews.length;
    reviews[currentIndex].classList.add('active');
}

// Rotate every 5 seconds
setInterval(showNextReview, 5000);