import { ShippingMethod } from "../shipping-method";
import { AddressForm } from "../address-form/address-form";
import { CheckoutFlow } from "@/components/checkout/checkout-flow";
import { shippingFormSchema } from "@/lib/shipping/shipping-form.schema";
import { ShippingFormFields } from "./shipping-form-fields.interface";
import { initialShippingFormFields } from "./shipping-form-fields";

import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import { Box, FormControl, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const ShippingFormControl = styled(FormControl)(({ theme }) => ({
    display: 'block',
    marginTop: theme.spacing(2),
}));

// export type ShippingFormProps = {
//     formTitle: string,
//     errors?: FormikErrors<AddressFormFields>,
//     touched?: FormikTouched<AddressFormFields>
// };

export const ShippingForm = ({
    // shippingForm,
    // submitShippingForm,
    // clearShippingForm
}) => {
    const submitForm = (values: ShippingFormFields) => {
        console.log('Submit shipping form');
    };
    const clearForm = () => {
        console.log('Clear shipping form.');
    }
    
    return (
        <div>
            < CheckoutFlow />
            < Formik 
                enableReinitialize = {true}
                validationSchema = {shippingFormSchema}
                initialValues = { initialShippingFormFields }
                onSubmit = {submitForm}
            >
                {/* { ({errors, touched, values}) => { */}
                    <Form>
                        <ShippingFormControl>
                            < Button
                                type = 'reset'
                                variant = 'contained'
                                endIcon = { <ClearIcon /> }
                                size = 'large'
                                onClick = {clearForm}
                            >
                                Clear
                            </Button>
                        </ShippingFormControl>

                        <ShippingFormControl>
                            <Typography variant="h5" component="legend" gutterBottom>
                               Shipping Address
                            </Typography>
                            <AddressForm
                                formTitle="shippingAddress"
                                // errors={errors.shippingAddress}
                                // touched={touched.shippingAddress}
                            />
                        </ShippingFormControl>

                        
                        <Box textAlign="right" mt={2}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                endIcon={<ArrowRightAltIcon />}
                                size="large"
                            >
                                Continue
                            </Button>
                        </Box>
                    </Form>
                {/* }} */}
            </Formik>
        </div>
    )
}
