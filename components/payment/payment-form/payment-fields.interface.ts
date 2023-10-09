import { AddressFormFields } from "@/components/shipping/address-form/address-form-fields.interface";
import { CreditCardFields } from "../credit-card-form/credit-card-fields.interface";

export interface PaymentFields {
    billingAddress: AddressFormFields;
    shippingSame: boolean;
    creditCard: CreditCardFields;
};