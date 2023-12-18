// Controllers
const StarController = require("../controllers/star.controller");

const { validate } = require("../validations/validator");
const { check } = require("../validations/star.validation");

const router = require("express").Router();

router.get(
    '/',
    StarController.getStar
)

router.post(
    '/add',
    validate(check('add')),
    StarController.addStar
)

router.put(
    '/update/:id',
    validate(check('update')),
    StarController.updateStar
)

router.delete(
    '/delete/:id',
    StarController.deleteStar
)

module.exports = router
