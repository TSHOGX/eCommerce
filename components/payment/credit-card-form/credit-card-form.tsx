"use client"

import { Grid, TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import React, { ChangeEvent, FunctionComponent } from 'react';
import InputMask from 'react-input-mask';

import { CreditCardFields } from './credit-card-fields.interface';

export interface CreditCardFormProps {
    formTitle?: string;
    errors?: FormikErrors<CreditCardFields>;
    touched?: FormikTouched<CreditCardFields>; 
    values: CreditCardFields;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
};

export const CreditCardForm: FunctionComponent<CreditCardFormProps> = ({
    formTitle = 'creditCard',
    errors,
    touched,
    values,
    handleChange

}) => {

    const creditCardChange = () => {
        console.log("Credit Card Form handle change.")
    }
    return (
        <div>
            < Grid container spacing = {3}>
                < Grid item xs = {12} sm = {12}>
                    < InputMask
                        mask = '0000-0000-0000-0000'
                        maskPlaceholder = '####-####-####-####'
                        name = {`${formTitle}.cardNumber`}
                        value = {values.cardNumber}
                        onChange = {creditCardChange}
                    >
                        <TextField
                            label = 'Card Number'
                            variant ='outlined'
                            error = { touched?.cardNumber && !!errors?.cardNumber }
                            helperText = { touched?.cardNumber && errors?.cardNumber }
                            fullWidth
                        />
                    </InputMask>
                </Grid>

                < Grid item xs = {12} sm = {12}>
                    < InputMask
                        mask = '00/0000'
                        maskPlaceholder = 'mm/yyyy'
                        name = {`${formTitle}.expirationDate`}
                        value = {values.expirationDate}
                        onChange = {creditCardChange}
                    >
                        <TextField
                            label = 'Expiration Date'
                            variant ='outlined'
                            error = { touched?.expirationDate && !!errors?.expirationDate }
                            helperText = { touched?.expirationDate && errors?.expirationDate }
                            fullWidth
                        />
                    </InputMask>
                </Grid>

                < Grid item xs = {12} sm = {12}>
                    < InputMask
                        mask = '000'
                        name = {`${formTitle}.securityCode`}
                        value = {values.securityCode}
                        onChange = {creditCardChange}
                    >
                        <TextField
                            label = 'CVV'
                            variant ='outlined'
                            error = { touched?.securityCode && !!errors?.securityCode }
                            helperText = { touched?.securityCode && errors?.securityCode }
                            fullWidth
                        />
                    </InputMask>
                </Grid>
            </Grid>
        </div>
    )
}