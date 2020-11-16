const inputRef = document.querySelector('#name-input')
const nameLableRef = document.querySelector('#name-output')


inputRef.addEventListener('input', handleInputChange)

function handleInputChange(event) {
    nameLableRef.textContent = event.target.value != "" ? event.target.value :  "незнакомец"; 
}


