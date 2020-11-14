// const inputRef = document.querySelector('#validation-input')

// inputRef.addEventListener('blur', hendleInputFocus)

// function hendleInputFocus(event) {
//     // console.dir(event.target.value.length);
//     const inputLength = Number(inputRef.dataset.length);
    
//     if (event.target.value.length == 0) {
//         inputRef.classList.remove("valid");
//         inputRef.classList.remove("invalid");
//     } else if (inputLength !== event.target.value.length) {
//         inputRef.classList.add("invalid");
//         inputRef.classList.remove("valid");

//     } else {
//         inputRef.classList.add("valid");
//         inputRef.classList.remove("invalid");
//     }      
    
// }

// _____________________________

const inputRef = document.querySelector('#validation-input');
const inputLength = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', hendleInputFocus);

function hendleInputFocus() {
    inputRef.classList.remove('valid', 'invalid');
    
    inputRef.value.length === 0 ? inputRef.classList.remove('valid', 'invalid') : inputLength !== inputRef.value.length ? 
        inputRef.classList.add('invalid') : inputRef.classList.add('valid');

//   inputLength !== inputRef.value.length
//     ? inputRef.classList.add('invalid')
//     : inputRef.classList.add('valid');
}

// ___________________________________

// const inputRef = document.querySelector('#validation-input');
// const inputRefLength = parseInt(inputRef.getAttribute('data-length'));

// inputRef.addEventListener('blur', validationCheck);
// inputRef.addEventListener('click', clearInput);

// function validationCheck() {
//   inputRefLength === inputRef.value.length
//     ? inputRef.classList.toggle('valid')
//     : inputRef.classList.toggle('invalid');
// }

// function clearInput() {
//   inputRef.value = '';
//   inputRef.classList.remove('valid', 'invalid');
// }