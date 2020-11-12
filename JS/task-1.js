
const itemsRefs = document.querySelectorAll('.item')
console.log(`В списке ${itemsRefs.length} категории.`);
itemsRefs.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
})




