
// // //setting up the program for multipule use cases, incase there are more clickable elements
// // const ulMap = new Map();

// // //select all the ul elements
// // const ul = document.querySelectorAll('.clickable');

// // //make a map that has all the ul properties with a corresponding digit
// // ul.forEach(e =>{
// //     let ulIndex = e.dataset.nav;
// //     ulMap.set(ulIndex, `${ulIndex}`);
// // });

// // function menu(){
// //     console.log('1');
// // }
// // //call the function of which element it was selected from
// // document.addEventListener('click', e => { 
// //     console.log(e, window['menu']);
// //     //  if(typeof window[document.elementFromPoint(e.clientX, e.clientY).dataset.nav] === 'function')
// //     //     window[document.elementFromPoint(e.clientX, e.clientY).dataset.nav]()
// // })



// // export { menu };

// // display.js
// export function menu() {
//     console.log('Menu clicked');
// }

// // Call the function based on the data-nav attribute
// document.addEventListener('click', e => { 
//     const targetElement = e.target.closest('.clickable');
//     if (targetElement) {
//         const navFunction = window[targetElement.dataset.nav];
//         console.log(window['menu']);
//         if (typeof navFunction === 'function') {
//             navFunction();
//         }
//     }
// });
// //

// function menu(){
//     console.log('hi');
// }

// document.addEventListener('click', e=>{
//     let menuName = 'menu';
//     window[menuName];
// })
// export {menu};

// document.addEventListener('click', e => { 
//     menu();
//     console.log(window.Function);
//     console.log(window.menu);
//     //  if(typeof window[document.elementFromPoint(e.clientX, e.clientY).dataset.nav] === 'function')
//     //     window[document.elementFromPoint(e.clientX, e.clientY).dataset.nav]()
// })

export default function printMe() {
    console.log('I get called from print.js!', this);
   }