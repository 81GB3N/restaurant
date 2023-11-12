import {menu, about, contact} from "./display.js"

const functionContainer = {
//     menu: function(){
//     console.log("menu");
//   },
//     about: function(){
//     console.log("about");
//   },
//     contact: function(){
//     console.log("contact");
//   },
    menu,
    about,
    contact,
}

const info = {
    main: document.querySelector("main"),
    selected: document.querySelector(".about"),
}

document.addEventListener('click', e => { 
    let accesibleElement = document.elementFromPoint(e.clientX, e.clientY);
    if(accesibleElement.dataset.nav && !accesibleElement.classList.value.includes("selected")){
        info.selected.classList.remove("selected");
        info.main.innerHTML = ``;
        accesibleElement.classList.add("selected");
        info.selected = accesibleElement;
        functionContainer[`${accesibleElement.dataset.nav}`]();
    }
});    

export {info};