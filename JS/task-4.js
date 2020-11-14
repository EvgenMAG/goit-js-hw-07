const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const counterRef = document.querySelector('#value')
let counterValue = 0;
counterRef.textContent = counterValue;

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(counterRef);
// console.log(counterRef.textContent);

const increment = () => {
    counterValue += 1; 
 
}

const decrement = () => {
    if(counterValue <=0) return
    counterValue  -= 1; 
};

const toSetStartCount=() =>{
    counterRef.textContent = counterValue; 
   
  }

decrementBtn.addEventListener("click", () => {
    decrement(); toSetStartCount()
});
incrementBtn.addEventListener("click", () => {
    increment();toSetStartCount()
}
);

// const decrementBtn = document.querySelector('[data-action="decrement"]')
// const incrementBtn = document.querySelector('[data-action="increment"]')
// const counterRef = document.querySelector('#value')

// let counterValue = 0;

// const decrement = () => {
//   counterValue -= 1;
//   counterRef.textContent = counterValue;
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





