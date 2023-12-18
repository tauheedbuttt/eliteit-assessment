const { Star, Product } = require("../models/index");

module.exports = {
    getStar: async (req, res) => {
        const { id, text, deleted } = req.query;
        const stars = await Star.findAll({
            include: [
                {
                    model: Product,
                    attributes: ["name"],
                },
            ],
        });
        return res.success("Star fetched successfully", stars)
    },

    addStar: async (req, res) => {
        const { product, name, email, rating } = req.body;

        const existing = await Product.findOne({ where: { id: product } });
        if (!existing) return res.notFound("Product not found.");

        const star = await Star.create({
            product,
            name,
            email,
            rating,
        });

        return res.success("Star added successfully")
    },

    updateStar: async (req, res) => {
        const { id } = req.params;
        const { product, name, email, rating } = req.body;

        if (product) {
            const existing = await Product.findOne({ where: { id: product } });
            if (!existing) return res.notFound("Product not found.");
        }

        const star = await Star.update(
            { product, name, email, rating },
            { where: { id } }
        );
        if (!star[0]) return res.notFound("Star not found.");

        return res.success("Star Updated Successfully")
    },

    deleteStar: async (req, res) => {
        const { id } = req.params;

        const star = await Star.destroy(
            { where: { id } }
        );
        if (!star) return res.notFound("Star not found.");

        return res.success("Star deleted successfully")
    }
};