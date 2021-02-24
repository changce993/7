const socket = io();

const form = document.querySelector('#form');
const inputName = document.querySelector('#input-name');
const inputPrice = document.querySelector('#input-price');
const inputThumbnail = document.querySelector('#input-thumbnail');

form.addEventListener('submit', e => {
    e.preventDefault();

    if(inputName.value && inputPrice.value && inputThumbnail.value){
        const product = {
            [inputName.name]:inputName.value,
            [inputPrice.name]:inputPrice.value,
            [inputThumbnail.name]:inputThumbnail.value,
        }
        socket.emit('product', product);
    }
})

socket.on('newProd', product => {
    const productsContainer = document.getElementsByClassName('.products');
    const div = document.createElement('div');
    div.setAttribute('class', 'products_item');
    div.innerHTML = `
        <img src="http://localhost:8080/${product.thumbnail}" alt="" class="products_item_image">
            <div class="products_item_info">
                <p>${product.name}</p>
                <p>${product.price}</p>
            </div>
    `;
    productsContainer.appendChild(div);
});