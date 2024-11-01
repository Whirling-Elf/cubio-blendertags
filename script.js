// Change the image on mouse over and mouse leave
document.querySelectorAll(".gif-item img").forEach(img => {
   /* img.addEventListener("mouseover", () => {
        if (img.src.includes(".png")) {
            img.src = img.src.replace(".png", ".gif");
        }
    });

    img.addEventListener("mouseleave", () => {
        if (img.src.includes(".gif")) {
            img.src = img.src.replace(".gif", ".png");
        }
    });*/

    img.addEventListener("click", () => {
        if (img.src.includes(".gif")) {
            img.src = img.src.replace(".gif", ".png");
        } else {
            img.src = img.src.replace(".png", ".gif");
        }
    });
});
