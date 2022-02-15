const menuIcon = document.querySelector('.menu'),
    menu = document.querySelector('header')
menuIcon.addEventListener('click', ()=>{
    menu.style.cssText = 'left:0'

})
window.addEventListener('click',(e)=>{
    if (e.target === menu){
        menu.style.cssText = 'left:0'
    }
})
