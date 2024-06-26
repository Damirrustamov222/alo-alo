const cont = document.querySelector('.container')
const cont_cart = document.querySelector('.box')
const five = document.querySelector('.btn_one')
const all = document.querySelector('.btn_two')
const total_view = document.querySelector('#total_view  ')

let cart =[]

reload(arr, cont, Product)
reload(cart, cont_cart, cart_item)

five.onclick = () => {
    reload(arr.slice(0,5), cont, Product)
}
all.onclick = () => {
    reload(arr, cont, Product)
}

const dialog = document.querySelector('dialog');
const box = dialog.querySelector('.box');
const open_dialog = document.querySelector('.btn_three');
const close_dialog = dialog.querySelector('.shto');
open_dialog.onclick = () => {
    dialog.showModal();
};

close_dialog.onclick = () => {
    dialog.close();
};










