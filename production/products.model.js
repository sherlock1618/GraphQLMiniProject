const products = [
    {
        id: "Lambo",
        description: "Old Lambo",
        price: 320000.0,
    },
    {
        id: "BMW",
        description: "BMW M3 GTR Need For Speed Special",
        price: 350000.0,
    }
];


function getAllProducts(){
    return products;
}

function filterProductsByPrice(min, max){
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    });
}

function getProductById(id){
    return products.find(item => item.id == id);
}

function addNewProductDB(id, description, price){
    const newProduct = {
        id,
        description,
        price
    };
    products.push(newProduct);
    return newProduct;
}

module.exports = {
    getAllProducts,
    filterProductsByPrice,
    getProductById,
    addNewProductDB
}