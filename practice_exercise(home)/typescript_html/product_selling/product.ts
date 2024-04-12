type Product = {
    name: string,
    price: number,
    quantity: number,
    getDescription(): void,
}

type Order = {
    orderId: string,
    products: Product[],
    getTotal(): number,
}

const phone: Product = {
    name: "Smartphone",
    price: 500,
    quantity: 3,
    getDescription():void {
        console.log(
            `This is a ${this.name} priced at ${this.price} each`
        );
    }
} 

const laptop: Product = {
    name: "Laptop",
    price: 1000,
    quantity: 2,
    getDescription():void {
        console.log(
            `This is a ${this.name} priced at ${this.price} each`
        )
    }
}

const order1: Order = {
    orderId: "ORD123",
    products: [phone, laptop],
    getTotal(){
        let total = 0;
        for(const product of this.products) {
            total += product.price * product.quantity;
        }
        return total;
    } 
}

let ordId = order1.orderId;
let price = order1.getTotal();

phone.getDescription();
laptop.getDescription();

console.log("The total price of the", ordId, "is", price);









