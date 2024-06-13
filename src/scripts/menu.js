
export function toggleMenu(){

    const menuBurguer = document.getElementById('menuOptions')
    const button = document.getElementById('btn-mobile')


    button.addEventListener('click', () => {
        if(menuBurguer.style.display === 'none'){
            menuBurguer.classList.add('animationMenu')
            menuBurguer.style.display = 'flex'
        } else {
            menuBurguer.style.display = 'none'
        }
    })


}


