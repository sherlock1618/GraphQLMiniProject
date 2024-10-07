const orders = [
    {
        date: '2005-10-22',
        subtotal: 700000.0,
        items: [
            {
                product: {
                    id: "BMW",
                    description: "BMW M3 GTR Need For Speed Special",
                    price: 350000.0,
                },
                quantity: 2,
            }
        ]
    }
];

function getAllOrders(){
    return orders;
}


module.exports = {
    getAllOrders,
}