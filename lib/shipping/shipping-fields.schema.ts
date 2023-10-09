import { mixed, object } from 'yup';

import { addressFieldsSchema } from './address-fields.schema';
import { ShippingMethod } from '@/components/shipping/shipping-form/components/shipping-method.enum';

export const shippingFormSchema = () => 
    object().shape({
        shippindAddress : addressFieldsSchema(),
        ShippingMethod: mixed<ShippingMethod>().oneOf(
            Object.values(ShippingMethod) as ShippingMethod[]
        ), 
        // TODO: Guest form for email
    });

