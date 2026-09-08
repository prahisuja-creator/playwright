class Order {
    public productName: string
    public orderId: string
    private price: number

    constructor(amzon: string) {

        this.orderId = 'ord123'
        this.productName = 'iPhone 16'
        this.price = 75000

        console.log("Order created successfully for iPhone 16");

    }

    placeOrder() {
        console.log("Order placed for iPhone 16 with order id ORD123");

    }

    cancelOrder() {
        console.log("Order cancelled for iPhone 16 ");

    }


}

const orderObj = new Order('amazon')
orderObj.placeOrder()
orderObj.cancelOrder()
