// Controllers
const ProductController = require("../controllers/product.controller");

const { validate } = require("../validations/validator");
const { check } = require("../validations/product.validation");

const router = require("express").Router();

router.get(
    '/',
    ProductController.getProduct
)

router.post(
    '/add',
    validate(check('add')),
    ProductController.addProduct
)

router.put(
    '/update/:id',
    validate(check('update')),
    ProductController.updateProduct
)

router.delete(
    '/delete/:id',
    ProductController.deleteProduct
)

module.exports = router
