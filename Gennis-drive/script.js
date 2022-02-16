const menuIcon = document.querySelector(".menu"),
  menu = document.querySelector(".header"),
  classes = document.querySelectorAll(".classes"),
  leftBtn = document.querySelector(".left-move"),
  rightBtn = document.querySelector(".right-move"),
  moreInfo = document.querySelectorAll(".more-info"),
  close = document.querySelectorAll(".close"),
  posAbs = document.querySelectorAll(".info-frame .pos-abs");
menuIcon.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
const remove = function () {
  classes.classList.remove("current");
};
leftBtn.addEventListener("click", () => {
  classes.forEach((item, id) => {
    remove();
    if (item.previousElementSibling) {
      id = leftBtn.length - 1;
    } else {
      id--;
    }
    console.log(id);
    item[id].classList.add("current");
  });
});
posAbs.forEach((item, id) => {
  moreInfo[id].addEventListener("click", () => {
    item.style.cssText = "left:-220px";
  });
  close[id].addEventListener("click", () => {
    if (id === 1) {
      item.style.cssText = "left:40px";
    } else {
      item.style.cssText = "left:0";
    }
  });
});
