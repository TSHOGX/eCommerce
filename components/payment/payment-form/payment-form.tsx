import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import { Box, FormControl, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { initialPaymentFields } from './payment-fields';
import { AddressForm } from '@/components/shipping/address-form/address-form';
import { CheckoutFlow } from '@/components/checkout/checkout-flow';
import { CreditCardForm } from '../credit-card-form/credit-card-form';
import { paymentFieldsSchema } from '@/lib/payment/payment-fields.schema';
import { PaymentFields } from './payment-fields.interface';
import { initialCreditCardFields } from '../credit-card-form/credit-card-fields';

const PaymentFormControl = styled(FormControl)(({ theme }) => ({
    display: 'block',
    marginTop: theme.spacing(2),
}));


export const PaymentForm = ({
    // shippingForm,
    // submitShippingForm,
    // clearShippingForm
}) => {
    const submitForm = (values: PaymentFields) => {
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
                validationSchema = { paymentFieldsSchema } 
                initialValues = { initialPaymentFields }
                onSubmit = {submitForm}
            >
                {/* { ({errors, touched, values}) => { */}
                    <Form>
                        <PaymentFormControl>
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
                        </PaymentFormControl>

                        <PaymentFormControl>
                            <Typography variant="h5" component = "legend" gutterBottom>
                                Billing Address
                            </Typography>
                            <div className = 'mx-auto'>
                            <AddressForm
                                formTitle="billingAddress"
                                // errors={errors.shippingAddress}
                                // touched={touched.shippingAddress}
                            />
                            </div>                           
                        </PaymentFormControl>

                        <PaymentFormControl>
                            <Typography variant="h5" component="legend" gutterBottom>
                                Credit Card
                            </Typography>
                            <CreditCardForm formTitle='creditCard' values = {initialCreditCardFields} />
                        </PaymentFormControl>
                           
                        
                        <Box 
                            textAlign="right" 
                            mt={2}
                            display = 'flex'
                            justifyContent = 'space-between'
                        >

                            < Link href = '/purchase/shipping'>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    color="secondary"
                                    startIcon={<ArrowBackIcon />}
                                    size="large"
                                    sx = {{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Previous
                                </Button>
                            </Link> 

                            < Link href = '/purchase/confirmation'>
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
