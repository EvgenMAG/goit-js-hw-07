const inputRef = document.querySelector('#name-input')
const nameLableRef = document.querySelector('#name-output')


inputRef.addEventListener('input', handleInputChange)

function handleInputChange(event) {
    event.target.value != "" ? nameLableRef.textContent = event.target.value : nameLableRef.textContent = "незнакомец"; 
    console.log(event.target.value );

}


