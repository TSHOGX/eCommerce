import { CheckoutFlow } from '@/components/checkout/checkout-flow';
import React from 'react';

const ShippingEntry = () => {
    let title = "Shipping Entry Page";

    return (
        <div>
            <h1> {title} </h1>
            < CheckoutFlow /> 

        </div>
    );
};

export default ShippingEntry;