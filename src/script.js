//Объявляем массив с картинками
let images = [{
    url: "img/img1.png",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don<br> LCD admiral",
    area: "81 m2",
    time: "3.5 months"
  },{
    url: "img/img2.png",
    title: "Sochi Thieves",
    city: "Sochi<br> Thieves",
    area: "105 m2",
    time: "4 months"
  },{
    url: "img/img3.png",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don<br> Patriotic",
    area: "93 m2",
    time: "3 months"
  }
  ]
  
  function initSlider(){
    if (!images || !images.length) return;
  
    let sliderImages = document.querySelector(".slider__images");
    let projectsNav = document.querySelector(".projects_nav");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderCity = document.querySelector(".slider_city");
    let sliderArea = document.querySelector(".slider_area");
    let sliderTime = document.querySelector(".slider_time");
  
    initImages();
    initArrows();
  
    function initImages(){
        images.forEach((image, index) => {
          let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}
            "style="background-image:url(${images[index].url});" data-index = "${index}"></div>`;
          sliderImages.innerHTML += imageDiv;
  
          let dotsDiv = `<div class="dot_item n${index} ${index === 0 ? "dot__active" : ""}" data-index="${index}"></div>`;
              sliderDots.innerHTML += dotsDiv;
  
              sliderDots.querySelectorAll(".dot_item").forEach(dot => {
                  dot.addEventListener("click", function () {
                      moveSlider(this.dataset.index);
                  })
              })
  
          let projectsNavItem = `<div class="projects_nav_item n${index} ${index === 0 ? "nav__active" : ""}" data-index="${index}">${images[index].title}</div>`;
            projectsNav.innerHTML += projectsNavItem;
  
          projectsNav.querySelectorAll(".projects_nav_item").forEach(nav => {
            nav.addEventListener("click", function () {
              moveSlider(this.dataset.index);
            })
          })
  
            let cityDiv = `<p class="paragraph paragraph_project_options n${index} ${index === 0 ? "active_paragraph" : ""}" data-index="${index}">${images[index].city}</p>`;
            sliderCity.innerHTML += cityDiv;
  
            let areaDiv = `<p class="paragraph paragraph_project_options n${index} ${index === 0 ? "active_paragraph" : ""}" data-index="${index}">${images[index].area}</p>`;
            sliderArea.innerHTML += areaDiv;
  
            let timeDiv = `<p class="paragraph paragraph_project_options n${index} ${index === 0 ? "active_paragraph" : ""}" data-index="${index}">${images[index].time}</p>`;
            sliderTime.innerHTML += timeDiv;
        
        })
    }
  
    function initArrows() {
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
          arrow.addEventListener("click", function() {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
              nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
            } else {
              nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
          });
        });
      }
  
    function moveSlider(num){
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        sliderDots.querySelector(".dot__active").classList.remove("dot__active");
        sliderDots.querySelector(".n" + num).classList.add("dot__active");
        projectsNav.querySelector(".nav__active").classList.remove("nav__active");
        projectsNav.querySelector(".n" + num).classList.add("nav__active");
        sliderCity.querySelector(".active_paragraph").classList.remove("active_paragraph");
        sliderCity.querySelector(".n" + num).classList.add("active_paragraph");
        sliderArea.querySelector(".active_paragraph").classList.remove("active_paragraph");
        sliderArea.querySelector(".n" + num).classList.add("active_paragraph");
        sliderTime.querySelector(".active_paragraph").classList.remove("active_paragraph");
        sliderTime.querySelector(".n" + num).classList.add("active_paragraph");
    }
  }
  
  document.addEventListener("DOMContentLoaded", initSlider);
  