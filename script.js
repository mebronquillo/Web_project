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


//Swiper Gallery//
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});



  