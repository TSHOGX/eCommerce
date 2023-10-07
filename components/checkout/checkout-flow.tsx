"use client"

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FunctionComponent } from 'react';
import { usePathname } from 'next/navigation';

import { Step, Stepper, StepLabel } from '@mui/material';


export const CheckoutFlow: FunctionComponent = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    let currPath = usePathname();

    useEffect(() => {
        if (currPath.includes("shipping")){
            setActiveStep(0);
        } else if (currPath.includes("payment")){
            setActiveStep(1);
        } else {
            setActiveStep(2);
        }
    })
    return (
        <div> 
            < Stepper alternativeLabel activeStep= {activeStep} >
                <Step key = '/purchase/shipping'>
                    <StepLabel> Delivery </StepLabel>
                </Step>

                <Step key = '/purchase/payment'>
                    <StepLabel> Payment </StepLabel>
                </Step>

                <Step key = '/purchase/confirmation'>
                    <StepLabel> Confirmation </StepLabel>
                </Step>
            </Stepper>
         </div>
    ) ;
};
