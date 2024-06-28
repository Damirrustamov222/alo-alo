function cart_item(item) {

    let quantity = 1;
    cart_total += Number((item.price * quantity).toFixed(2));
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
    count.innerHTML = quantity ;
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


    plusButton.onclick = () => {
        if (quantity < item.rating.count) {
            quantity++;
            count.textContent = quantity;
            calc_total_amount("plus");
            return;
        }
        alert('В наличии нет');
    };
    
    minusButton.onclick = () => {
        if (quantity > 0) {
            quantity--;
            count.textContent = quantity;
            calc_total_amount("minus");
        }
    };
    
    function calc_total_amount(param) {
        price.innerHTML = (item.price * quantity).toFixed(2);
        if (param === "plus") {
            cart_total += Number(item.price.toFixed(2));
        } else {
            cart_total -= Number(item.price.toFixed(2));
        }
        all_total.innerHTML = cart_total
    }
    remove.onclick = () => {
        const idx = cart.indexOf(item);
        const counter = document.querySelector('#total_view');
        const productDiv = document.querySelector(`#selector_${item.id}`);
        const btn = productDiv.querySelector('.btn_cloth');
    
        btn.classList.remove("active-btn");
        btn.innerHTML = `В избранное`;
    
        cart.splice(idx, 1);
        counter.innerHTML = cart.length;
        box2.remove(item);
    };
    
    return box2;
    
}
