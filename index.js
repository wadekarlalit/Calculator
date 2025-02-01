// console.log('button', document.createElement('button'));
// const reactButton = React.createElement('button');
// console.log('reactButton', button)

import { App } from "./react-app.js";

const reactRoot = document.getElementById('react-root');
const root = ReactDOM.createRoot(reactRoot);
root.render(React.createElement(App))

console.log('app');


// for counter button using direct dom
// const counterBtn = document.createElement('button');
// counterBtn.setAttribute('class', 'btn btn-primary')
// counterBtn.innerText = 0;
// let counter = 0;

// counterBtn.addEventListener('click', ()=> {
//     counter++;
//     counterBtn.innerText = counter;
// })

// document.body.append(counterBtn)

// for counter button using react
// function reactButton(params) {
//     const [counter, setCounter] = React.useState(0);
//     return React.createElement(
//         'button',
//         {
//             className: "btn btn-primary",
//             onClick: ()=> setCounter(counter + 1),
//         },
//         [counter]
//     )
// }