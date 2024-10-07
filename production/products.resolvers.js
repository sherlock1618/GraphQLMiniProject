const { getAllProducts, filterProductsByPrice, getProductById, addNewProductDB } = require("./products.model");

module.exports = {
    Query: {
        products: () => {
            return getAllProducts();
        },
        productsByPrice: (_, args) => {
            return filterProductsByPrice(args.min, args.max);
        },
        productById: (_, args) => {
            return getProductById(args.id);
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return addNewProductDB(args.id, args.description, args.price);
        }
    }
};