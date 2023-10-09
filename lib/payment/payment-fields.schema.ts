import { boolean, object } from 'yup';

import { addressFieldsSchema } from '../shipping/address-fields.schema';
import { creditCardSchema } from './credit-card-fields.schema';

export const paymentFieldsSchema = () => 
    object().shape({
        shippingSame: boolean(),

        billingAddress: object().when('shippingSame', {
          is: (shippingSame: boolean) => !shippingSame,
          then: addressFieldsSchema,
        }),
        
        creditCard: creditCardSchema(),

    })