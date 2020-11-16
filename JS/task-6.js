
const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', hendleInputBlur)

function hendleInputBlur() {
    const inputLength = Number(inputRef.dataset.length);
    
    if (inputRef.value.length == 0) {
        inputRef.classList.remove("valid","invalid");
    } else if (inputLength !== inputRef.value.length) {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");

    } else {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    }      
    
}

// ______________Another Option____________


// const inputRef = document.querySelector('#validation-input');
// const inputLength = Number(inputRef.getAttribute('data-length'));

// inputRef.addEventListener('blur', hendleInputBlur);

// function hendleInputBlur() {
//     inputRef.classList.remove('valid', 'invalid');
    
//     inputRef.value.length === 0 ? inputRef.classList.remove('valid', 'invalid') : inputLength !== inputRef.value.length ? 
//         inputRef.classList.add('invalid') : inputRef.classList.add('valid');

// }



// ______________Another Option____________

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