import { initialAddressFormFields } from "@/components/shipping/address-form/address-form-fields";
import { initialCreditCardFields } from "../credit-card-form/credit-card-fields";

import { PaymentFields } from "./payment-fields.interface";

export const initialPaymentFields: PaymentFields = {
    billingAddress: initialAddressFormFields, 
    shippingSame: false,
    creditCard: initialCreditCardFields
};