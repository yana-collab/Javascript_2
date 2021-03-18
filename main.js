
class Api {
    constructor () {
        this.url = `/goods.json`;
    }

    fetch (error, success) {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject ("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            } else if (xhr.status > 400) {
                error();
            }
        }
    }  
        xhr.open ('GET', this.url, true);
        xhr.send();
        
    } 
    
    fetchPromise() {
        return new Promise((resolve, reject) => {
            this.fetch(reject, resolve)
        })
} 
}


class GoodsItem {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
        
    }
    getHtml() {
        return `<div class="goods-item"><img src="${this.img}" class="goods-img"><h3>${this.title}</h3><p>${this.price}</p><button id="addCart">Добавить в корзину</button></div>`;
    }
}

class Header {
    constructor() {
        this.$container = document.querySelector('.header');
        this.$button = document.querySelector('.cart');
        this.$search = document.querySelector('#search');
    }
    setSearchHandler(callback) {
        this.$search.addEventListener('input', callback);
    }
    setButtonHandler(callback) {
        this.$button.addEventListener('click', callback);
    }
}


class GoodsList {
    constructor() {
        this.api = new Api;
        this.$goodsList = document.querySelector('.goods-list');
        this.goods = [];
        this.header = new Header;
        this.filteredGoods = [];
        this.header.setSearchHandler((evt) => {
            this.search(evt.target.value);
        })
        
        const fetch = this.api.fetchPromise();
        fetch.then((data) => {this.onFetchSuccess(data)})
        .catch((err) => {this.onFetchError(err)});
        
    }

    search(str) {
        if(str === '') {
            this.filteredGoods = this.goods;
        }
        const regexp = new RegExp(str, 'gi');
        this.filteredGoods = this.goods.filter((good) => regexp.test(good.title));
        this.render();
    }

    fetchPromise() {
        return new Promise((resolve, reject) => {
            this.fetch(reject, resolve)
        })
    }

    onFetchSuccess(data) {
        this.goods = data.map (({title, price, img}) => new GoodsItem(title, price,img));
        this.render();
    }

    onFetchError(err) {
        this.$goodsList.insertAdjacentHTML('beforeend', '<h3>Произошла ошибка</h3>');
    }

    render() {
        this.$goodsList.textContent = '';
        this.filteredGoods.forEach((good) => {
            this.$goodsList.insertAdjacentHTML('beforeend', good.getHtml() );
        })
    }
}
function openCart () {

}
const goodsList = new GoodsList();

/*class Cart {
    constructor() {
       this.goods = [];
    }
    addToCart(good) {
        this.goods.push(good);
        
    }
    totalCartPrice () {
        let totalPrice = document.querySelector('.header-cart');
        let sum = 0;
        this.goods.forEach((good) => {
            sum += good.price;
        });
        totalPrice.insertAdjacentHTML('beforeend', sum);
    }


}*/