// Preload function to ensure both images are ready
function preloadImages(sources, callback) {
    let loadedImages = 0;
    const totalImages = sources.length;

    sources.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                callback();
            }
        };
    });
}

// Change the image on click
document.querySelectorAll(".gif-item").forEach(item => {
    const img = item.querySelector("img");
    const spinner = item.querySelector(".spinner");

    img.addEventListener("click", () => {
        const currentSrc = img.src;
        const pngSrc = currentSrc.includes(".gif") ? currentSrc.replace(".gif", ".png") : currentSrc.replace(".png", ".gif");
        
        // Show the spinner while the new image is loading
        spinner.style.display = "block"; // Show spinner
        
        // Create a new image to preload the GIF
        const newImage = new Image();
        newImage.src = pngSrc;

        newImage.onload = () => {
            img.src = pngSrc; // Set the image source to the newly loaded image
            spinner.style.display = "none"; // Hide the spinner after loading
        };
    });
});

