// //select all the ul elements
// const ul = document.querySelectorAll('.clickable');

// export { menu };

// Call the function based on the data-nav attribute
document.addEventListener('click', e => { 
    functionContainer[`${document.elementFromPoint(e.clientX, e.clientY).dataset.nav}`]();
});

const functionContainer = {
    menu: function(){
    console.log("menu");
  }
}

  
//   document.body.appendChild(functionContainer['menu']());