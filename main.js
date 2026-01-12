document.addEventListener('DOMContentLoaded', () => {
    const recommendBtn = document.getElementById('recommendBtn');
    const recommendationResult = document.getElementById('recommendationResult');
    const galleryItems = document.querySelectorAll('.gallery-item');

    recommendBtn.addEventListener('click', () => {
        // Show the recommendation container
        recommendationResult.classList.remove('hidden');

        // Hide all gallery items first
        galleryItems.forEach(item => {
            item.style.display = 'none';
        });

        // Select a random item and display it
        const randomIndex = Math.floor(Math.random() * galleryItems.length);
        galleryItems[randomIndex].style.display = 'block';
    });
});
