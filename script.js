// Toggle GIF playback on click
document.querySelectorAll(".gif-item img").forEach(img => {
    img.addEventListener("click", () => {
        if (img.src.includes(".gif")) {
            // Replace with a paused version (if available)
            img.src = img.src.replace(".gif", ".png");
        } else {
            // Replace with GIF to resume animation
            img.src = img.src.replace(".png", ".gif");
        }
    });
});
