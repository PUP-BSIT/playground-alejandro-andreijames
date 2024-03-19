var phone = {
    name: "Smartphone",
    price: 500,
    quantity: 3,
    getDescription: function () {
        console.log("This is a ".concat(this.name, " priced at ").concat(this.price, " each"));
    }
};
var laptop = {
    name: "Laptop",
    price: 1000,
    quantity: 2,
    getDescription: function () {
        console.log("This is a ".concat(this.name, " priced at ").concat(this.price, " each"));
    }
};
var order1 = {
    orderId: "ORD123",
    products: [phone, laptop],
    getTotal: function () {
        var total = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            total += product.price * product.quantity;
        }
        return total;
    }
};
var ordId = order1.orderId;
var price = order1.getTotal();
phone.getDescription();
laptop.getDescription();
console.log("The total price of the", ordId, "is", price);
