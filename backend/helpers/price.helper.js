const { Op, literal } = require('sequelize');
const { Product, Sequelize } = require("../models/index");

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = {
    generatePrices: async () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // fetch all those product's which were updated a day before
        const changing = await Product.findAll({
            where: {
                updatedAt: {
                    [Op.lt]: today,
                }
            },
            raw: true
        })
        const data = changing.map(item => ({ ...item, price: random(1, 1000) }));
        if (data?.length < 1) return;

        // update them all with new random prices
        const updated = await Product.bulkCreate(
            data,
            { updateOnDuplicate: ["price"], raw: true }
        )

        // update their updatedAt Value
        await Product.update(
            { updatedAt: new Date() },
            {
                where: {
                    id: {
                        [Op.in]: data.map(item => item.id),
                    },
                }
            }
        )
    }
}