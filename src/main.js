const menuBTN = document.getElementById('burguer');
const menuBTNAct = document.getElementById('burguer-act');
const menuBurguer = document.getElementById('burguer-menu');
let openMenu = false;

menuBTN.addEventListener('click',()=>{
    console.log(menuBurguer);
    if(!openMenu){
        openMenu = true;
        menuBurguer.classList.toggle('close')
    }else{
        menuBurguer.classList.toggle('close');
        openMenu = false;
    }
})

menuBTNAct.addEventListener('click',()=>{
    console.log(menuBurguer);
    if(!openMenu){
        openMenu = true;
        menuBurguer.classList.toggle('close')
    }else{
        menuBurguer.classList.toggle('close');
        openMenu = false;
    }
})
