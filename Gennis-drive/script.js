const menuIcon = document.querySelector(".menu"),
  menu = document.querySelector(".header");
menuIcon.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

// window.addEventListener("click", (e) => {
//   console.log(e);
//   if (e.target === menu) {
//     menu.style.cssText = "left:0";
//   }
// });
