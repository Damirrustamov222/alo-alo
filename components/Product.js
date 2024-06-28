
function Product(item) {
    const box_cloth = document.createElement('div')
    const box_white = document.createElement('div')
    const img = document.createElement('img')
    const h1 = document.createElement('h1')
    const h6 = document.createElement('h6')
    const cost = document.createElement('div')
    const elem_one = document.createElement('div')
    const elem_two = document.createElement('div')
    const boxinthebox = document.createElement('div')
    const elem_three = document.createElement('div')
    const dollar = document.createElement('img')
    const star = document.createElement('img')
    const box = document.createElement('img')
    const dollar_a = document.createElement('a')
    const star_a = document.createElement('a')
    const box_a = document.createElement('a')

    const button = document.createElement('button')
    
    
    box_cloth.id = `selector_${item.id}`
    
    button.innerHTML = 'В избранное'
    box_cloth.classList.add('box_cloth')
    box_white.classList.add('box_white')
    h1.classList.add('h1')
    h6.classList.add('h6')
    h1.innerHTML = item.category
    h6.innerHTML = item.description.length > 100 ? item.description.slice(0, 100) + "...a" : item.description
    h6.title = item.description
    cost.classList.add('cost')
    dollar.src = './public/svg/dollar.svg'
    star.src = './public/svg/star.svg'
    box.src = './public/svg/box.svg'
    dollar_a.classList.add('a')
    star_a.classList.add('a')
    box_a.classList.add('a')
    boxinthebox.classList.add(`pad`)
    dollar_a.innerHTML = item.price
    star_a.innerHTML = item.rating.rate
    box_a.innerHTML = item.rating.count
    button.classList.add('btn_cloth')
    img.src = item.image
    img.classList.add('img_cloth')
    dollar.classList.add('img_svg')
    star.classList.add('img_svg')
    box.classList.add('img_svg')
    box_cloth.append(box_white, h1,  cost, )
    box_white.append(img)
    cost.append( h6,boxinthebox, button )
    boxinthebox.append( elem_one, elem_two, elem_three, )
    elem_one.append(dollar, dollar_a)
    elem_two.append(star, star_a)
    elem_three.append(box, box_a)

    h6.style.color = `white`

    button.onclick = () => {
        const selector = Boolean(cart.find(el => el.id === item.id));
    
        if (selector  ) {
            let idx =cart.indexOf(item)
            cart.splice(idx, 1 )
            button.classList.remove('active-btn');
            button.innerHTML = "В избранное";
        } else {
            cart.push(item);
            button.classList.add('active-btn');
            button.innerHTML = "Добавлено";
        }
        total_view.innerHTML = cart.length;
        cart_total = 0
        reload(cart, cont_cart, cart_item)
    }

    
    return box_cloth
}