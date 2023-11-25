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

// instancia de ProductManager
let productManager = new ProductManager();

// lista algunos productos
let product1 = new Product('Manzana', 'Fruta ', 50, 'thumbnail1.jpg', 'code1', 15);
let product2 = new Product('Banana', 'Fruta ', 60, 'thumbnail2.jpg', 'code2', 20);
let product3 = new Product('Pera', 'Fruta ', 70, 'thumbnail3.jpg', 'code3', 10);

// Agregar los productos
productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.addProduct(product3);

// producto por id
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));
console.log(productManager.getProductById(3));

// todos los productos
console.log(productManager.getProducts());

