function cart_item(item) {
    const box2 = document.createElement('div');
    const first = document.createElement('div');
    const minus = document.createElement('div');
    const itemName = document.createElement('h6');
    const minusButton = document.createElement('button');
    const count = document.createElement('span');
    const img = document.createElement('img');
    const plusButton = document.createElement('button');
    const second = document.createElement('div');
    const cart_div = document.createElement('div');
    const price = document.createElement('span');
    const removebtn = document.createElement('div');
    const remove = document.createElement('button');
    const img_blanket = document.createElement('div');
    let cart = []
    img.src = item.image
    img.alt = item.title;
    

  

    img_blanket.classList.add('img'); 
    first.classList.add('first');
    box2.classList.add('box2');
    minus.classList.add('minus');
    second.classList.add('second');
    cart_div.classList.add('item'); 
    removebtn.classList.add('removeContainer'); 
    itemName.innerHTML = item.category ;
    minusButton.innerHTML = '-';
    count.innerHTML = 1;
    plusButton.innerHTML = '+';
    price.innerHTML = item.price;
    remove.innerHTML = 'Remove';
    
    img_blanket.append(img);
    minus.append(itemName);
    minus.append(minusButton);
    minus.append(count);
    minus.append(plusButton);
    cart_div.append(price);
    removebtn.append(remove);
    first.append(img_blanket);
    first.append(minus);
    second.append(cart_div);
    second.append(removebtn);
    
    box2.append(first);
    box2.append(second);
    
    box.append(box2);



    plusButton.addEventListener('click', () => {
        count.innerHTML = parseInt(count.innerHTML) + 1;
    });

    minusButton.onclick = () => {
        if (parseInt(count.innerHTML) > 1) {
            count.innerHTML = parseInt(count.innerHTML) - 1;
        }
    };

    remove.onclick = () => {
        const selector = cart.findIndex(el => el.id === item.id);

        cart.splice(selector, 1 )
        button.classList.remove('active-btn');
        button.innerHTML = "В избранное";
    };
    
}
