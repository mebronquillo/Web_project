//Sidebar navigator
//For menu button
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  
//For quick search button
function openNav1() {
    document.getElementById("myNav1").style.width = "100%";
  }
  
function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
  }

  
var swiper = new Swiper (".mySwiper1", {
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 2500
  },
});

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      bulletActiveClass: "bulletActive",
      bulletClass: "pagination_bullet",
      clickable: true
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // }
  });





























  