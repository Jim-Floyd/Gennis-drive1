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
function remove() {
  classes.forEach( classe =>{
    classe.classList.remove('current')
  })
}
function addCurrentleft() {
  const current = document.querySelector('.current');
  remove()
  if (current.previousElementSibling){
    current.previousElementSibling.classList.add('current')
  } else {
    classes[classes.length - 1].classList.add('current')
  }
} 
function addCurrentright() {
  const current = document.querySelector('.current');
  remove()
  console.log(current.nextElementSibling)
  if (current.nextElementSibling){
    current.nextElementSibling.classList.add('current')
  } else {
    classes[0].classList.add('current')
  }
}
leftBtn.addEventListener("click", () => { 
 
  addCurrentleft()
});
rightBtn.addEventListener('click', ()=>{
  addCurrentright()
})
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
