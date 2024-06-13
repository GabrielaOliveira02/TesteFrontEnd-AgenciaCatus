

export function cardList (products){
    const listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = ''

    products.forEach(product => {
        const card = createCardProducts(product)

        listContainer.appendChild(card)
    });
}


function createCardProducts(product){
    const li = document.createElement('li');
    const div = document.createElement('div');
    const img = document.createElement('img');

    li.classList.add('card')

    img.src = product.img;
    img.alt = product.description;
    div.appendChild(img);


    const p = document.createElement('p');
    p.textContent = product.description;
    p.classList.add('description')

    const spanPrice = document.createElement('span');
    spanPrice.textContent = ` de R$ ${product.price}`;
    spanPrice.classList.add('price')

    const spanSale = document.createElement('span');
    spanSale.textContent = `R$ ${product.sale}`;
    spanSale.classList.add('sale')

    const divInfo = document.createElement('div');
    divInfo.classList.add('divInfo')

    const span5x = document.createElement('span');
    span5x.textContent = '5x ';
    span5x.classList.add('negrito')

    const spanDe = document.createElement('span');
    spanDe.textContent = 'de';
    spanDe.classList.add('wiped')

    const spanValue = document.createElement('span');
    spanValue.textContent = '  R$ 47,68';
    spanValue.classList.add('negrito')

    const spanJuros = document.createElement('span');
    spanJuros.textContent = '  sem juros'; 
    spanJuros.classList.add('wiped')

    divInfo.append(span5x, spanDe, spanValue, spanJuros);

    const button = document.createElement('button');
    button.textContent = 'Adicionar ao carrinho';
    button.classList.add('addCar')
    

    listContainer.append(li)
    li.appendChild(div);
    li.appendChild(p);
    li.appendChild(spanPrice);
    li.appendChild(spanSale);
    li.appendChild(divInfo);
    li.appendChild(button);
    
    return li
}

export function scrollLeft(){
    const left = document.getElementById('listContainer');
    const button = document.getElementById('left')

    button.addEventListener('click', () => {
        left.scrollBy({
            top: 0,
            left: -350,
            behavior: 'smooth'
        })
    })
    
}
export function scrollRight(){
    const right = document.getElementById('listContainer');
    const button = document.getElementById('right')
    
    button.addEventListener('click', () => {
        right.scrollBy({
            top: 0,
            left: 350,
            behavior: 'smooth'
        })
    })
}