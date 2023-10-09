"use client"

import React from 'react';
import { ShippingForm } from '@/components/shipping/shipping-form/shipping-form';

import { Box, Paper } from '@mui/material';

const ShippingEntry = () => {
    let title = "Shipping Entry Page";

    return (
        <div>
            < Paper>
                <Box p = {4} >
                    < ShippingForm />
                </Box>
            </Paper>
        
        </div>
    );
};

export default ShippingEntry;