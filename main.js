const goods =[
    {title:'Shirt', price:'150', img: "./img/download.png", button: "Добавить"},
    {title:'Socks', price:'50', img:  "./img/download.png", button: "Добавить"},
    {title:'Jacket', price:'350', img: "./img/download.png", button: "Добавить"},
    {title:'Shoes', price:'250', img:  "./img/download.png", button: "Добавить"},
];

const $goodsList = document.querySelector('.goods-list');
const renderGoodsItem =({title, price, img, button}) => {
    return `<div class= "goods-item"><img class="goods-img" src="${img}"><h3>${title}</h3><p>${price} &#36;</p><button type="submit">${button}</button></div>`;

}

const renderGoodsList = (list=goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    ).join('\n');
    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}
renderGoodsList();