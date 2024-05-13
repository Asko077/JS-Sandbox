const currentMainImage = document.querySelector(".gallery-image4 img");
const imagesToChooseForm = document.querySelectorAll(".gallery img");


imagesToChooseForm.forEach(img => img.addEventListener("click", imageClick));

function imageClick(e) {
    
    imagesToChooseForm.forEach(img => img.style.opacity = 1);

    currentMainImage.src = e.target.src;
    e.target.style.opacity = 0.5;
}