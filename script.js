const button = document.getElementById("btn__first");
const container = document.getElementById("hiddenblocks__first");
const rotatedImage = document.getElementById("rotatedImage__first");
let isFlipped = false;

const btnOrder = document.getElementsByClassName("btn-order")
const buttonOpenMenu = document.getElementById("btn-burger")
const menu = document.getElementById("menu")
const buttonCloseMenu = document.getElementById("btn-burger-close")
const modalCall = document.getElementById("modalCall")
const modalChat = document.getElementById("modalChat")
const buttonOpenCall = document.getElementsByClassName("btn-call")
const buttonOpenChat = document.getElementsByClassName("btn-chat")
let buttonCloseModal = document.getElementsByClassName("button-close")
const overlay = document.getElementById("overlay")


const readMoreButton = document.getElementById("readMore");
const readMoreText = document.getElementById("readMoreText");
const readMoreImage = document.getElementById("readMoreImage");


function openMenu() {
    menu.style.left = "0";
    overlay.style.display = "block";
    menu.style.position = "fixed"
}
function closeMenu() {
   menu.style.left = "-400px";
   overlay.style.display = "none"
   menu.style.position = "relative"
}
function openCall() {
  modalCall.style.right = "0";
  overlay.style.display = "block";
  modalChat.style.right = "-500px";
  menu.style.left = "-400px";
}
function openChat() {
  modalChat.style.right = "0";
  overlay.style.display = "block";
  modalCall.style.right = "-500px";
  menu.style.left = "-400px";
}
function closeModalCall() {
  modalCall.style.right = "-500px";
  overlay.style.display = "none";
}
function closeModalChat() {
  modalChat.style.right = "-500px";
  overlay.style.display = "none";
}

overlay.addEventListener("click", closeModalCall);
overlay.addEventListener("click", closeModalChat);
overlay.addEventListener("click", closeMenu);
buttonOpenMenu.addEventListener("click", openMenu);
buttonCloseMenu.addEventListener("click", closeMenu);

Array.from(buttonOpenCall).forEach(btn => {
  btn.addEventListener("click", openCall);
});
Array.from(buttonOpenChat).forEach(btn => {
  btn.addEventListener("click", openChat);
});
Array.from(buttonCloseModal).forEach(btn => {
  btn.addEventListener("click", closeModalCall);
});
Array.from(buttonCloseModal).forEach(btn => {
  btn.addEventListener("click", closeModalChat);
});
Array.from(btnOrder).forEach(btn => {
  btn.addEventListener("click", openChat);
});


button.addEventListener("click", () => {
    isFlipped = !isFlipped;
    if (container.style.display === "none") {
        container.style.display = "grid";
        button.querySelector("span").textContent = "Скрыть";
        
    } else {
        container.style.display = "none";
        button.querySelector("span").textContent = "Показать все";
    }
    
    rotatedImage.style.transform = isFlipped ? "rotate(180deg)" : "rotate(0deg)";
});



readMoreButton.addEventListener("click", () => { 
  isFlipped = !isFlipped;
  if (readMoreText.style.display === "none") {
    readMoreText.style.display = "block";
    readMoreButton.querySelector("span").textContent = "Скрыть";
      
  } else {
    readMoreText.style.display = "none";
    readMoreButton.querySelector("span").textContent = "Читать далее";
  }
  
  readMoreImage.style.transform = isFlipped ? "rotate(180deg)" : "rotate(0deg)";
});

let swiperFirst;
let swiperSecond;
let swiperThird;

function initSwiper() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    if (!swiperFirst) {
      swiperFirst = new Swiper(".swiper-first", {
        pagination: {
          el: ".swiper-first .swiper-pagination",
          clickable: true,
        },
        watchSlidesProgress:true,
        centerSlides: false,
        freeMode: false,
        loop: false,
        breakpoints: {
          320: {
            slidesPerView: 'auto', 
            spaceBetween: 10,
          },
        },
      });
    }
  } else {
    if (swiperFirst) {
      swiperFirst.destroy(true, true);
      swiperFirst = null;
    }
  }
}

initSwiper()

function initSwipertwo() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      if (!swiperSecond) {
        swiperSecond = new Swiper(".swiper-second", {
          pagination: {
            el: ".swiper-second .swiper-pagination",
            clickable: true,
          },
          watchSlidesProgress:true,
          centerSlides: false,
          freeMode: false,
          loop: false,
          breakpoints: {
            320: {
              slidesPerView: 'auto', 
              spaceBetween: 10,
            },
          },
        });
      }
    } else {
      if (swiperSecond) {
        swiperSecond.destroy(true, true);
        swiperSecond = null;
      }
    }
  }

initSwipertwo()

function initSwiperthree() {
  swiperThird = new Swiper(".swiper-third", {
    pagination: {
      el: ".swiper-third .swiper-pagination",
      clickable: true,
    },
    watchSlidesProgress:true,
    centerSlides: false,
    freeMode: false,
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 'auto', 
        spaceBetween: 10,
      },
    },
  });
}
initSwiperthree()


const button2 = document.getElementById("btn__second");
const container2 = document.getElementById("hiddenblocks__second");
const rotatedImage2 = document.getElementById("rotatedImage__second");

button2.addEventListener("click", () => {
    isFlipped = !isFlipped;
    if (container2.style.display === "none") {
        container2.style.display = "grid";
        button2.querySelector("span").textContent = "Скрыть";
        
    } else {
        container2.style.display = "none";
        button2.querySelector("span").textContent = "Показать все";
    }
    
    rotatedImage2.style.transform = isFlipped ? "rotate(180deg)" : "rotate(0deg)";
});


window.addEventListener("resize", initSwiper);
window.addEventListener("resize", initSwipertwo);
