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

// Popup chat 
function openForm(){
    document.getElementById("myChat").style.display = "block";
}

function closeForm(){
    document.getElementById("myChat").style.display = "none";
}

var menu =['Slide 1','Slide 2','Slide 3','Slide 4']
var swiper = new Swiper (".mySwiper1", {
  speed: 1500,
  loop: true,
  parallax: true,
  autoplay: {
    delay: 2500
  },
  pagination:{
    el:".swiper-pagination1",
    bulletClass: "pagination_bullet",
    clickable: true,
    renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
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

var swiper = new Swiper (".mySwiper2",{
  slidesPerView: 2.8,
  spaceBetween: 40,
});

var swiper = new Swiper (".mySwiper3",{
  slidesPerView: 4,
  spaceBetween: 30,
});

var swiper = new Swiper (".mySwiper4", {
  slidesPerView: 4,
  spaceBetween: 30,
})


function openSwipe2(){
    document.getElementById("swipe2Form").style.display = "block"; 
}
function closeSwipe2(){
  document.getElementById("swipe2Form").style.display = "none";
}

function openSwipe3(){
    document.getElementById("swipe3Form").style.display = "block"; 
}
function closeSwipe3(){
  document.getElementById("swipe3Form").style.display = "none";
}

function openSwipe4(){
    document.getElementById("swipe4Form").style.display = "block"; 
}
function closeSwipe4(){
  document.getElementById("swipe4Form").style.display = "none";
}

var nav = document.querySelector(".all_nav_items");
var link = document.querySelectorAll(".nav_items");
link.forEach(function (a) {
  a.addEventListener("click", function () {
    nav.querySelector(".active").classList.remove("active");
    a.classList.add("active");
  });
});


    

  

























  