// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит 
// количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('[type="number"]')
const createBtn = document.querySelector('[data-action="render"]')
const removeBtn = document.querySelector('[data-action="destroy"]')
const divRef = document.querySelector('#boxes')
divRef.style.display = 'flex'
divRef.style.flexWrap = 'wrap'
divRef.style.alignItems = 'center'
divRef.style.paddingBottom = '150px'



let amount = Number(inputRef.value)
console.log(amount);


inputRef.addEventListener('input', () => {
    console.log('Hello')
    amount = Number(inputRef.value)
    divRef.innerHTML =""
})

createBtn.addEventListener('click', () => { createBoxes (amount)})

function createBoxes(a) {   
    let x = 30
    for (let i = 1; i <= a; i++){
        x += 10
        const divChild = document.createElement('div')
        divChild.classList.add('divList')
        divChild.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
        divChild.style.marginTop = '10px'
        divChild.style.marginLeft = x + 'px'
        divChild.style.width = x +'px'
        divChild.style.height = x +'px'
        divRef.append(divChild)
    }
    inputRef.value = ""
}

removeBtn.addEventListener('click', () => {
    destroyBoxes()
})

function destroyBoxes() {
    divRef.innerHTML =""
}