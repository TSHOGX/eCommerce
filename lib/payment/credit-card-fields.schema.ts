import { string, object } from 'yup';

const cardRegEx = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
const expDateRegEx = /(0[1-9]|1[0-2])\/[0-9]{2}/;
const securityRegEx = /[0-9]{3}/

export const creditCardSchema = () => 
    object().shape({
        cardNumber: string()
            .required("This field is required")
            .matches(cardRegEx, "Invalid, please enter a valid card number."),

        expirationDate: string()
            .required("This field is required.")
            .matches(expDateRegEx, "Please enter a valid expiration date."),
        securityCode: string()
            .required("This field is required.")
            .matches(securityRegEx, "Please enter a valid security code."),

    });