

const inputRef = document.querySelector('[type="number"]')
const createBtn = document.querySelector('[data-action="render"]')
const removeBtn = document.querySelector('[data-action="destroy"]')
const divRef = document.querySelector('#boxes')

divRef.style.paddingBottom = '150px'


createBtn.addEventListener('click', () => {
    divRef.innerHTML = ""
    createBoxes(inputRef.value)
})

removeBtn.addEventListener('click', destroyBoxes)

function createBoxes(a) {   
    const arr = [];
    let x = 30
    for (let i = 1; i <= a; i++){
        x += 10
        const divChild = document.createElement('div')
        divChild.classList.add('divList')
        divChild.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
        divChild.style.marginTop = '10px'
        divChild.style.marginRight = 'auto'
        divChild.style.marginLeft = 'auto'
        divChild.style.width = x +'px'
        divChild.style.height = x +'px'
      
        arr.push(divChild)
    }

    divRef.append(...arr)
}


function destroyBoxes() {
    divRef.innerHTML = ""
    inputRef.value = ""
}