const { check } = require("express-validator");

exports.check = (method) => {
    switch (method) {
        case "add": {
            return [
                check("product")
                    .notEmpty()
                    .withMessage("Product cannot be empty"),
                check("name")
                    .notEmpty()
                    .withMessage("Name cannot be empty"),
                check("email")
                    .notEmpty()
                    .withMessage("Email cannot be empty"),
                check("rating")
                    .notEmpty()
                    .withMessage("Rating cannot be empty"),
            ];
        }
        case "update": {
            return [];
        }
    }
};    
