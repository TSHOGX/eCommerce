"use client"

import React from 'react';
import { ShippingForm } from '@/components/shipping/shipping-form/shipping-form';

const ShippingEntry = () => {
    let title = "Shipping Entry Page";

    return (
        <div>
            <h1> {title} </h1>
          < ShippingForm />


        </div>
    );
};

export default ShippingEntry;