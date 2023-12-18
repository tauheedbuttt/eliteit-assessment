const { Product } = require("../models/index");

module.exports = {
    getProduct: async (req, res) => {
        const products = await Product.findAll({});
        return res.success("Product fetched successfully", products)
    },

    addProduct: async (req, res) => {
        const { name, description, price } = req.body;

        const count = await Product.count();
        if (count == 3) return res.forbidden("Products cannot be more than 3.")

        const product = await Product.create({
            name, description, price
        });

        return res.success("Product added successfully")
    },

    updateProduct: async (req, res) => {
        const { id } = req.params;
        const { name, description, price } = req.body;

        const product = await Product.update(
            { name, description, price },
            { where: { id } }
        );
        if (!product[0]) return res.notFound("Product not found.");

        return res.success("Product Updated Successfully")
    },

    deleteProduct: async (req, res) => {
        const { id } = req.params;

        const product = await Product.destroy(
            { where: { id } }
        );
        if (!product[0]) return res.notFound("Product not found.");

        return res.success("Product deleted successfully")
    }
};