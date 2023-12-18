const { check } = require("express-validator");

exports.check = (method) => {
    switch (method) {
        case "add": {
            return [
                check("name")
                    .notEmpty()
                    .withMessage("Name cannot be empty"),
                check("description")
                    .notEmpty()
                    .withMessage("Description cannot be empty"),
                check("price")
                    .notEmpty()
                    .withMessage("Price cannot be empty"),
            ];
        }
        case "update": {
            return [];
        }
    }
};    
