import * as yup from "yup";

//Signin
export const starAddValidation = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    name: yup.string().required("Name is required"),
    rating: yup.string().required("Rating is required"),
    product: yup.string().required("Product is required"),
});