
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

