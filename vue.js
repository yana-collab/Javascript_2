Vue.component ('hello', {
    template: '<h1>Hello {{username}} </h1>',
    data() {
        return {
        }
    },
        props:[
            'username'
        ]
    
});


const vue = new Vue ({
    el: '#app',
    data: {
        name:'Yana'
    }

})




/*const vue = new Vue({
el: '#app',
data: {
    name: '',
    title: '',
    price: 0,
    goods: [
        { title:"Shirt", price: 150 },
        { title:"Socks", price: 50},
        { title:"Jacket", price: 350},
        { title:"Shoes", price: 250}
    ]
},
methods: {
    add() {
        this.goods.push({title:this.title, price: this.price })
    }
},
computed: {
    fullName() {
        return this.name + 'Doe';
    }
},
mounted() {
    setTimeout(()=> {
        this.goods = [
        { title:"Shirt", price: 150},
        { title:"Socks", price: 50},
        { title:"Jacket", price: 350},
        { title:"Shoes", price: 250}]
    }, 3000);
}

});*/