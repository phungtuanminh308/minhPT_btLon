// KHAI BÁO HÀM FUNCTION
function autoSlide() {
    count += 1;
    slidefun(count);
}

function plusSlide(n) {
    count += n;
    slidefun(count);
    resetTimer()
}

function currentSlide(b) {
    count = b;
    slidefun(count);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 10000);
}

function slidefun(n) {
    let i;
    for (i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove("active")
    }
    if (n > myslide.length) {
        count = 1;
    }
    if (n < 1) {
        count = myslide.length
    }
    myslide[count - 1].style.display = "block";
    dot[count - 1].classList.add("active");
}

// KHAI BÁO BIẾN
let count = 1;
let myslide = document.getElementsByClassName("myslider");
let dot = document.getElementsByClassName("dot");
slidefun(count);
let timer = setInterval(autoSlide, 10000);

// RESET LOCAL STORAGE
localStorage.product0 = 0;
localStorage.product1 = 0;
localStorage.product2 = 0;
localStorage.product3 = 0;
localStorage.product4 = 0;
localStorage.product5 = 0;
localStorage.product6 = 0;
localStorage.product7 = 0;
localStorage.product8 = 0;
localStorage.product9 = 0;
localStorage.product10 = 0;
localStorage.product11 = 0;
localStorage.product12 = 0;
localStorage.product13 = 0;
localStorage.product14 = 0;
localStorage.drink0 = 0;
localStorage.drink1 = 0;
localStorage.drink2 = 0;
localStorage.drink3 = 0;
localStorage.drink4 = 0;
localStorage.total = 0;