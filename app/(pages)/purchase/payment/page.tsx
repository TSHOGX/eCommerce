"use client"

import React from 'react';
import { Box, Paper } from '@mui/material';

import { CheckoutFlow } from '@/components/checkout/checkout-flow';
import { PaymentForm } from '@/components/payment/payment-form/payment-form';


const PaymentEntry = () => {
    let title = "Payment Entry Page";

    return (
        <div>
            < Paper>
                <Box p = {4} >
                    < PaymentForm />
                </Box>
            </Paper>
        </div>
    );
};

export default PaymentEntry;