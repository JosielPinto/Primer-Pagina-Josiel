const menuInicio = document.querySelector('.menu-inicio');
const menu = document.querySelector('.menu-navegacion');

menuInicio.addEventListener('click', ()=>{
    menu.classList.toggle('spread')
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != menuInicio){
        menu.classList.toggle('spread')
    }
})