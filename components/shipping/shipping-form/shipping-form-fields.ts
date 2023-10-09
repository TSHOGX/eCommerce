import { initialAddressFormFields } from "../address-form/address-form-fields";
import { ShippingMethod } from "./components/shipping-method.enum";
import { ShippingFormFields } from "./shipping-form-fields.interface";

export const initialShippingFormFields: ShippingFormFields = {
    shippingAddres: initialAddressFormFields,
    shippingMethod: ShippingMethod.free,
    //TODO: Guest form
}