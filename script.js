var sind = 1;

function changeSlide(n) {
    showSlides(sind += n);

}

function currentSlide(n) {
    showSlides(sind = n);
}

function showSlides(n) {
    var i;
    var allSlide = document.getElementsByClassName("slides"); //массив слайдов
    var allDots = document.getElementsByClassName("dot"); //массив точек
    if (n > allSlide.length) {
        sind = 1;
    }
    if (n < 1) {
        sind = allSlide.length;
    }
    for (i = 0; i < allSlide.length; i++) {
        allSlide[i].style.display = "none"; //прячем все слайды
    }
    for (i = 0; i < allDots.length; i++) {
        allDots[i].className = allDots[i].className.replace(" active", ""); //все точки неактивные

    }
    allSlide[sind - 1].style.display = "block"; //видим нужный слайд
    allDots[sind - 1].className += " active"; //делаем нужную точку активной
}

function boot() {
    currentSlide(1);
}

function openModal() {
    document.getElementById('myModal').style.display = "block";//видим изображение
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";//прячем окно с изображением
}

var slideIndex = 1;
showSl(slideIndex);

function plusSlides(n) {
    showSl(slideIndex += n);
}

function curSlide(n) {
    showSl(slideIndex = n);
}

function showSl(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); 
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}