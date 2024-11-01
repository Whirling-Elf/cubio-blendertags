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

// Change the image on mouse over and mouse leave
document.querySelectorAll(".gif-item").forEach(item => {
    const img = item.querySelector("img");
    const spinner = document.createElement("div");
    spinner.className = "spinner"; // Add the spinner class
    item.appendChild(spinner); // Add the spinner to the item

    const pngSrc = img.src.replace(".gif", ".png"); // Assuming the PNG is named the same as the GIF
    const gifSrc = img.src;

    // Preload both images
    preloadImages([gifSrc, pngSrc], () => {
        img.style.display = "block"; // Show the image after preloading
        spinner.style.display = "none"; // Hide the spinner
    });

    // Show spinner while the GIF is loading
    img.addEventListener("mouseover", () => {
        img.src = gifSrc; // Load the GIF
        spinner.style.display = "block"; // Show the spinner
        img.onload = () => {
            spinner.style.display = "none"; // Hide the spinner when GIF is loaded
        };
    });

    img.addEventListener("mouseleave", () => {
        img.src = pngSrc; // Load the PNG
    });

    img.addEventListener("click", () => {
        if (img.src.includes(".gif")) {
            img.src = img.src.replace(".gif", ".png");
        } else {
            img.src = img.src.replace(".png", ".gif");
        }
    });
});
