import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

var apple = document.getElementById("apple");
var btn_apple = document.getElementById("btn__apple");
function AppleHandleButtonClick() {
  apple.scrollIntoView({ block: "center", behavior: "smooth" });
}
btn_apple.addEventListener("click", AppleHandleButtonClick);

var samsung = document.getElementById("samsung");
var btn_samsung = document.getElementById("btn__samsung");
function SamsungHandleButtonClick() {
  samsung.scrollIntoView({ block: "center", behavior: "smooth" });
}
btn_samsung.addEventListener("click", SamsungHandleButtonClick);

var xiaomi = document.getElementById("xiaomi");
var btn_xiaomi = document.getElementById("btn__xiaomi");
function xiaomiHandleButtonClick() {
  xiaomi.scrollIntoView({ block: "center", behavior: "smooth" });
}
btn_xiaomi.addEventListener("click", xiaomiHandleButtonClick);


window.addEventListener('scroll', function()
{
  var scroll = this.document.querySelector('.upward');
  scroll.classList.toggle("active", this.window.scrollY>1250&&this.window.scrollY<2750);
})



import mobileNav from './modules/mobile-nav.js';
mobileNav();

