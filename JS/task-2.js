const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень'
];


const createItems = ((ingredient) => {
const itemRef = document.createElement('li')
itemRef.textContent = ingredient
return itemRef
})

const itemsList = ingredients.map(item => createItems(item) )

const listRef = document.querySelector('#ingredients')

listRef.append(...itemsList)