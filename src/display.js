
// //setting up the program for multipule use cases, incase there are more clickable elements
// const ulMap = new Map();

// //select all the ul elements
// const ul = document.querySelectorAll('.clickable');

// //make a map that has all the ul properties with a corresponding digit
// ul.forEach(e =>{
//     let ulIndex = e.dataset.nav;
//     ulMap.set(ulIndex, `${ulIndex}`);
// });

function menu(){
    console.log('1');
}
//call the function of which element it was selected from
document.addEventListener('click', e => { 
    console.log(window['menu']);
     if(typeof window[document.elementFromPoint(e.clientX, e.clientY).dataset.nav] === 'function')
        window[document.elementFromPoint(e.clientX, e.clientY).dataset.nav]()
})



export { menu };

