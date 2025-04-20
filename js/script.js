let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBTN = document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
menus.classList.add("active");



})

closeBTN.addEventListener("click",function(){

    menus.classList.remove("active");
})


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop:true,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0:{
      slidesPerView: 1,
    },
  768:{
    slidesPerView: 2,
  },

968:{
  slidesPerView: 3,
},


  }


});




// dynamic images

const SectionCenter = document.querySelector('.menus_items_container');
const filterBtns = document.querySelectorAll('.btn-cat');

filterBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const Category = e.currentTarget.dataset.id;

    // remove active class from all
    filterBtns.forEach(function(button) {
      button.classList.remove('active_btn');
    });
    // add active class to current
    e.currentTarget.classList.add('active_btn');

    const menuCategory = menu.filter(function(menuItem) {
      return menuItem.category === Category;
    });

    if (Category === "All") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});


const menu = [
  {
    id: 1,
    title: "Trungo's Burger",
    category: "Dinner", 
    price: 18,
    img: "./imgs/food1.JPG"
  },
  {
    id: 2,
    title: "Spicy Curry",
    category: "Dinner",
    price: 20,
    img: "./imgs/food2.png"
  },
  {
    id: 3,
    title: "Tri-Tip",
    category: "Dinner",
    price: 22,
    img: "./imgs/food11.jpg"
  },
  {
    id: 4,
    title: "Jamaican Chicken",
    category: "Dinner",
    price: 18,
    img: "./imgs/food12.JPG"
  },
  {
    id: 5,
    title: "Seafood Special",
    category: "Dinner",
    price: 10,
    img: "./imgs/food5.png"
  },
  {
    id: 6,
    title: "Pulled Pork Nachos",
    category: "Starter",
    price: 15,
    img: "./imgs/food10.jpg"
  },
  {
    id: 7,
    title: "Pulled Pork Platter",
    category: "Dinner",
    price: 24,
    img: "./imgs/food7.jpg"
  },
  {
    id: 8,
    title: "Shrimp Mix",
    category: "Dinner",
    price: 19,
    img: "./imgs/food8.png"
  },
  {
    id: 9,
    title: "Bratwurst",
    category: "Dinner",
    price: 8,
    img: "./imgs/food9.jpg"
  },

  {
    id: 10,
    title: "ipa",
    category: "Drinks",
    price: 8,
    img: "./imgs/drink1.jpg"
  },

  {
    id: 11,
    title: "Liquid Barley",
    category: "Drinks",
    price: 8,
    img: "./imgs/drink2.jpg"
  },

  {
    id: 12,
    title: "Salad ",
    category: "Starter",
    price: 8,
    img: "./imgs/salad.jpg"
  },

  {
    id: 13,
    title: "Schnitzel ",
    category: "Dinner",
    price: 8,
    img: "./imgs/food13.jpg"
  },

  {
    id: 13,
    title: "Mousse Au Chocolat ",
    category: "Dessert",
    price: 8,
    img: "./imgs/creme1.jpg"
  },

  {
    id: 14,
    title: "Tea",
    category: "Drinks",
    price: 8,
    img: "./imgs/drink3.jpg"
  },

  {
    id: 15,
    title: "Cheesecake ",
    category: "Dessert",
    price: 8,
    img: "./imgs/creme2.jpg"
  },
];

window.addEventListener("DOMContentLoaded", function () {
  const defaultCategory = "Dinner";
  const defaultItems = menu.filter(item => item.category === defaultCategory);
  displayMenuItems(defaultItems);

  // Set "Dinner" button as active
  filterBtns.forEach(btn => {
    if (btn.textContent === defaultCategory) {
      btn.classList.add("active_btn");
    } else {
      btn.classList.remove("active_btn");
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="img_cards">
              <img src="${item.img}" alt="${item.title}">
              <p class="price">Only $${item.price}</p>
              <p>${item.title}</p>
            </div>`;
  });
  displayMenu = displayMenu.join(""); // join array of HTML strings
  SectionCenter.innerHTML = displayMenu;
}

const nav = document.querySelector("header");

window.addEventListener("scroll",  function(){

  if(this.document.documentElement.scrollTop> 20){
nav.classList.add("sticky");
  }

else{
  nav.classList.remove("sticky");
}


})

const Parallax = document.querySelector('#showcase');
window.addEventListener("scroll", function(){
  let offset = this.window.pageYOffset;
  Parallax.style.backgroundPositionY = offset * 0.7 * "px";
})