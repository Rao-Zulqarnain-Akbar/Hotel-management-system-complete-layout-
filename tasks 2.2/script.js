
let images = document.querySelectorAll(".box img");
let container = document.querySelector(".container");

images.forEach(function(image) {

    image.addEventListener("click", function() {

        container.appendChild(image);

    });

});