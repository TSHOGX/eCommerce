import React from 'react';

import { CheckoutFlow } from '@/components/checkout/checkout-flow';

const PaymentEntry = () => {
    let title = "Payment Entry Page";

    return (
        <div>
            <h1> {title} </h1>
            < CheckoutFlow /> 
        </div>
    );
};

export default PaymentEntry;