import { object, string } from 'yup';

export const addressFieldsSchema = () => {
    return object().shape({
        // Name fields
        firstName: string()
            .required("This field is required.")
            .max(35, "Field cannot exceed 35 characters."),

        lastName: string()
            .required("This field is required.")
            .max(35, "Field cannot exceed 35 characters."),

        // Address fields
        addressFirstLine: string()
            .required("This field is required.")
            .max(44, "Field cannot exceed 44 characters."),

        addressSecondLine: string()
            .notRequired()
            .max(42, "Field cannot exceed 42 characters."),

        city: string()
            .required("This field is required.")
            .max(50, "Field cannot exceed 50 characters."),

        provinceState: string()
            .required("This field is required.")
            .max(50, "Field cannot exceed 50 characters."),

        country: string()
            .required("This field is required.")
            .max(90, "Field cannot exceed 90 characters."),

        zipCode: string()
            .required("This field is required.")
            .max(18, "Field cannot exceed 18 characters.")
            .min(5, "Field must have at least 5 characters."),


    });
}