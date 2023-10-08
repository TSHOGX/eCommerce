"use client"
import { AddressFormFields } from './address-form-fields.interface';

import { Grid } from '@mui/material';
import { Field, FormikErrors, FormikTouched } from 'formik';
import { TextField } from 'formik-mui';
import React, { FunctionComponent } from 'react';

export type AddressFormProps = {
    formTitle: string,
    errors?: FormikErrors<AddressFormFields>,
    touched?: FormikTouched<AddressFormFields>
};

export const AddressForm: FunctionComponent<AddressFormProps> = ({
    formTitle = 'addressFields',
    errors,
    touched,
}) => {

    return (
        <div className = 'w-5/6 text-center'>
            < Grid container spacing = {3}>
                < Grid item xs = {12} sm = {6}>
                    <Field
                        component = { TextField }
                        label = "First Name"
                        name = {`${formTitle}.firstName`}
                        variant = 'outlined'
                        error = {touched?.firstName && !!errors?.firstName}
                        helperText   = { touched?.firstName && errors?.firstName}
                        fullWidth
                    />

                </Grid>

                <Grid item xs = {12} sm = {6}>
                    <Field
                    component = {TextField}
                    label= 'Last Name'
                    name = {`${formTitle}.lastName`}
                    variant = "outlined"
                    error = {touched?.lastName && !!errors?.lastName}
                    helperText = {touched?.lastName && errors?.lastName}
                    fullWidth
                    />
                </Grid>
                <Grid item xs = {12}>
                    <Field
                    component = {TextField}
                    label = "Address Line 1"
                    name = {`${formTitle}.addressFirstLine`}
                    variant = "outlined"
                    error = {touched?.addressFirstLine && !!errors?.addressFirstLine}
                    helperText = {touched?.addressFirstLine && !!errors?.addressFirstLine}
                    fullWidth
                    />
                </Grid>
                <Grid item xs = {12}>
                    <Field
                    component = {TextField}
                    label = 'Address Line 2'
                    name = {`${formTitle}.addressSecondLine`}
                    variant = "outlined"
                    error = {touched?.addressSecondLine && !!errors?.addressSecondLine}
                    helperText = {touched?.addressSecondLine && errors?.addressSecondLine}
                    fullWidth
                    />
                </Grid>
                <Grid item xs = {12} sm = {6}>
                    <Field
                    component = {TextField}
                    label = 'City'
                    name = {`${formTitle}.city`}
                    variant = "outlined"
                    error = {touched?.city && !!errors?.city}
                    helperText = {touched?.city && errors?.city}
                    fullWidth
                    />
                </Grid>
                <Grid item xs = {12} sm = {6}>
                    <Field
                    component = {TextField}
                    label = "State/Province"
                    name = {`${formTitle}.provinceState`}
                    variant = "outlined"
                    error = {touched?.provinceState && !!errors?.provinceState}
                    helperText = {touched?.provinceState && errors?.provinceState}
                    fullWidth
                    />
                </Grid>
                <Grid item xs = {12} sm = {6}>
                    <Field
                    component = {TextField}
                    label = 'Country'
                    name = {`${formTitle}.country`}
                    variant = "outlined"
                    error = {touched?.country && !!errors?.country}
                    helperText = {touched?.country && errors?.country}
                    fullWidth
                    />
                </Grid>
                <Grid item xs = {12} sm = {6}>
                    <Field
                    component = {TextField}
                    label = 'Zip Code'
                    name = {`${formTitle}.zipCode`}
                    variant = "outlined"
                    error = {touched?.zipCode && !!errors?.zipCode}
                    helperText = {touched?.zipCode && errors?.zipCode}
                    fullWidth
                    />
                </Grid>
            </Grid>
        </div>
    )
};