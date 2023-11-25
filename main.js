class Product {
    constructor(title, description, price, thumbnail, code, stock) {
this.title = title;
this.description = description;
this.price = price;
this.thumbnail = thumbnail;
this.code = code;
this.stock = stock;
    }
}

class ProductManager {
    constructor() {
this.products = [];
this.nextId = 1;
    }

    addProduct(product) {
for (let key in product) {
        if (product[key] === undefined || product[key] === '') {
return;
        }
}


if (this.products.some(p => p.code === product.code)) {
        console.error(`Error: El código "${product.code}" ya existe.`);
        return;
}


product.id = this.nextId++;
this.products.push(product);
    }

    getProducts() {
return this.products;
    }

    getProductById(id) {
const product = this.products.find(p => p.id === id);
if (!product) {
        console.error('Not found');
        return;
}
return product;
    }
}
