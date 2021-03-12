// Класс для товара с методом html- разметки

class GoodsItem {
    constructor(title, price, img, button) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.button = button;
    }
    renderHtml () {   
    return `<div class= "goods-item"><img class="goods-img" 
    src="${this.img}"><h3>${this.title}</h3><p>${this.price} &#36;</p><button type="submit">Добавить</button></div>`;
    }
}

// Класс со списком товаров и методом для заполнения списка

class GoodsList {
    constructor () {
        this.goods = [ ];
    }
    fetchGoods () {
        this.goods = [
            {title:'Shirt', price:'150', img: "./img/download.png"},
            {title:'Socks', price:'50', img:  "./img/download.png"},
            {title:'Jacket', price:'350', img: "./img/download.png"},
            {title:'Shoes', price:'250', img:  "./img/download.png"},
        ];
    }
    render () {
        let listHtml = '';
        this.goods.forEach (good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img);
            listHtml+= goodItem.renderHtml();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}


const list = new GoodsList();
list.fetchGoods();
list.render();


// Класс для корзины
const cartBtn = document.querySelector ('.basket');

class Cart {
    constructor() {
        this.goods = [ ];
    }
    addCartGood (cartGood) {
        this.goods.push(cartGood);
    }
    totalCartPrice () {
        let totalPrice = document.querySelector('.summary');
        let sum = 0;
        this.goods.forEach (good => {
            sum+= good.price;
        });
        totalPrice.insertAdjacentText = `Итого ${sum} &#36;`;
    }
    
}

var  renderCart = () => {
    const cart = new Cart();
    cart.addCartGood(list.goods[0]);
    cart.addCartGood(list.goods[1]);
    cart.addCartGood(list.goods[2]);
    cart.totalCartPrice();
    
}

cartBtn.addEventListener('click', renderCart);