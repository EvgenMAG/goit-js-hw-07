// const titleRef = document.createElement('h1')
// titleRef.textContent = 'Динамический заголовок! Фак оф!'
// titleRef.classList.add('main-title')
// titleRef.id = 'title'
// console.log(titleRef);
const price = 2000;

const containerRef = document.createElement('div')
containerRef.classList.add('product-card')
// console.log(containerRef);

const titelRef = document.createElement('h2')
titelRef.textContent = 'product name'
titelRef.classList.add('product-card__name')
console.log(titelRef);

const descrRef = document.createElement('p')
descrRef.textContent = 'product description'
 
console.log(descrRef);

const priceRef = document.createElement('p')
priceRef.textContent = ` Цена: ${price} кредитов`
console.log(priceRef);

// containerRef.appendChild(titelRef)
// containerRef.appendChild(descrRef)
// containerRef.appendChild(priceRef)

containerRef.append(titelRef, descrRef, priceRef)
console.log(containerRef);

const rootRef = document.querySelector('#main')
console.log(rootRef);

rootRef.appendChild(containerRef)