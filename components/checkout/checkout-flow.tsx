"use client"

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FunctionComponent } from 'react';
import { usePathname } from 'next/navigation';

import { Step, Stepper, StepLabel, createTheme, ThemeProvider } from '@mui/material';
import { blueGrey, teal } from '@mui/material/colors';


export const CheckoutFlow: FunctionComponent = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    let currPath = usePathname();
    const theme = createTheme({
        palette: {
            primary: teal,
            secondary: blueGrey

        }
    })


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
            <ThemeProvider theme={ theme } >
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
            </ThemeProvider>           
         </div>
    ) ;
};
