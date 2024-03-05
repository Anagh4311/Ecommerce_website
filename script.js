const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
nav.classList.remove('active');
    })
}

var mainImg = document.querySelector(".main-img");
var smallImgs = document.querySelectorAll(".small-img");

smallImgs.forEach(function (smallImg) {
    smallImg.addEventListener("click", function () {
        mainImg.src = smallImg.src;
    });
});
