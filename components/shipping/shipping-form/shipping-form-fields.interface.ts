import { AddressFormFields } from "../address-form/address-form-fields.interface";
import { ShippingMethod } from "../shipping-method";

export interface ShippingFormFields {
    shippingAddres: AddressFormFields;
    shippingMethod?: ShippingMethod;
    //TODO: Guest form
}