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

var popupChat = document.querySelector(".popup_chat");
// Popup chat 
function openForm(){
  if(popupChat.style.display === "block"){
    popupChat.style.display = "none";  
  }
  else{
    popupChat.style.display = "block";  
  }   
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

var locationnav = document.querySelector(".locations_swipe");
var estatenav = document.querySelector(".estates_swipe");
var propertiesnav = document.querySelector(".properties_swipe");
function openSwipe2(){
    if(locationnav.style.display === "block"){
        locationnav.style.display = "block";  
    }else{
      estatenav.style.display = "none";
      propertiesnav.style.display = "none";
      locationnav.style.display = "block";
    }
}

function openSwipe3(){
    if(estatenav.style.display === "block"){
      estatenav.style.display = "block";
    }else{
      locationnav.style.display = "none";
      propertiesnav.style.display = "none";
      estatenav.style.display = "block";
    }
}

function openSwipe4(){
    if(propertiesnav.style.display === "block"){
      propertiesnav.style.display = "block";
    }else{
      locationnav.style.display = "none";
      estatenav.style.display = "none";
      propertiesnav.style.display = "block";
    }
}


var nav = document.querySelector(".all_nav_items");
var link = document.querySelectorAll(".nav_items");

link.forEach(function (a) {
  a.addEventListener("click", function () {
    nav.querySelector(".active") 
    .classList.remove("active");
    a.classList.add("active");
    
  });
});




    

  

























  