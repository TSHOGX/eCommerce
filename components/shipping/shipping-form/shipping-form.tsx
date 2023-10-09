import { ShippingMethod } from "./components/shipping-method";
import { AddressForm } from "../address-form/address-form";
import { CheckoutFlow } from "@/components/checkout/checkout-flow";
import { shippingFormSchema } from "@/lib/shipping/shipping-fields.schema";
import { ShippingFormFields } from "./shipping-form-fields.interface";
import { initialShippingFormFields } from "./shipping-form-fields";

import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import { Box, FormControl, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';

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
    };
    //const styles = useStyles();
    
    return (
        <div className = 'mx-auto w-5/6 mb-12'>           
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
                                color = 'primary'
                                type = 'reset'
                                variant = 'outlined'
                                endIcon = { <ClearIcon /> }
                                size = 'large'
                                onClick = {clearForm}
                                sx = {{
                                    fontWeight: 'bold',
                                }}
                            >
                                Clear
                            </Button>
                        </ShippingFormControl>

                        <ShippingFormControl>
                            <Typography variant="h5" component = "legend" gutterBottom>
                                Shipping Address
                            </Typography>
                            <div className = 'mx-auto'>
                            <AddressForm
                                formTitle="shippingAddress"
                                // errors={errors.shippingAddress}
                                // touched={touched.shippingAddress}
                            />
                            </div>                           
                        </ShippingFormControl>

                        <ShippingFormControl>
                            <Typography variant="h5" component="legend" gutterBottom>
                                Shipping Method
                            </Typography>
                            <ShippingMethod />
                        </ShippingFormControl>
                           
                        
                        <Box textAlign="right" mt={2}>
                            < Link href = '/purchase/payment'>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    color="primary"
                                    endIcon={<ArrowRightAltIcon />}
                                    size="large"
                                    sx = {{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Continue
                                </Button>
                            </Link>
                            
                        </Box>
                    </Form>
                {/* }} */}
            </Formik>

        </div>
    )
}
