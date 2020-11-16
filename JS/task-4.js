const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const counterRef = document.querySelector('#value')
let counterValue = 0;

const increment = () => counterValue += 1; 
 
const decrement = () => counterValue <=0 ? 0: counterValue -= 1; 

const toSetStartCount=() => counterRef.textContent = counterValue; 

decrementBtn.addEventListener("click", () => {
    decrement(); toSetStartCount()
});
incrementBtn.addEventListener("click", () => {
    increment();toSetStartCount()
});

// ________________the Second Option _____________________


// const decrementBtn = document.querySelector('[data-action="decrement"]')
// const incrementBtn = document.querySelector('[data-action="increment"]')
// const counterRef = document.querySelector('#value')

// let counterValue = 0;

// const decrement = () => {
     
//      if(counterValue <=0) return
//     counterValue  -= 1; 
//  counterRef.textContent = counterValue;
// };
// const increment = () => {
//   counterValue += 1;
//   counterRef.textContent = counterValue;
// };

// decrementBtn.addEventListener('click', () => {
//   decrement();
// });
// incrementBtn.addEventListener('click', () => {
//   increment();
// });





