// import { menu } from './display.js';
import _ from 'lodash';
import printMe from './display.js';

const functionContainer = {
    menu: function(){
        const element = document.createElement('div');
  const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = "press me";
  btn.onclick = printMe;
//   btn.onclick = menu();
  element.appendChild(btn);

   return element;
    }
  };

  
  document.body.appendChild(functionContainer['menu']());
  
  //  function menu() {
  //    const element = document.createElement('div');
  //   const btn = document.createElement('button');
  
  //    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  //   btn.innerHTML = "press me";
  //   btn.onclick = printMe;
  // //   btn.onclick = menu();
  //   element.appendChild(btn);
  
  //    return element;
  //  }
  
// const functionName = 'menu';
// const dynamicFunction = window[functionName];

// if (typeof dynamicFunction === 'function') {
//   document.body.appendChild(dynamicFunction());
// } else {
//   console.error(`${functionName} is not a function or is not defined.`);
// }

//  for(let x in window){
//     (typeof window[x]).toString() === 'function' ? console.log(window[x].name) : '';
//  }