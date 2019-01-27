class Module  {

    constructor(product) {
        this.result += product.price;
        this.data = [];
        this.data.push(product)
    }

    printData () {
        this.data.forEach((item) => console.log(item))
    }
}

const test = {
    price: 15,
    type: 'test'
};

let a = new Module(test);
a.printData();
