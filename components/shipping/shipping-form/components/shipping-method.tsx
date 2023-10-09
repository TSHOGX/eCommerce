import { FormControlLabel, Radio } from '@mui/material';
import { Field } from 'formik';
import { RadioGroup } from 'formik-mui';
import React, { FunctionComponent } from 'react';

import { ShippingMethod as Methods } from './shipping-method.enum';

export interface ShippingMethodProps {
  formTitle?: string;
}

export const ShippingMethod: FunctionComponent<ShippingMethodProps> = ({
  formTitle = 'shippingMethod',
}) => {


  return (
    <Field component = {RadioGroup} name = {formTitle}>
      <FormControlLabel
        value = {Methods.free}
        control = {<Radio />}
        label =  'Free Shipping (Arrives in 5-7 business days)'
      />
      <FormControlLabel
        value = {Methods.express}
        control = {<Radio />}
        label = 'Express Shipping (Arrives in 3-5 business days)'
      />
      <FormControlLabel
        value = {Methods.nextDay}
        control = {<Radio />}
        label = 'Next Day Shipping (Arrives in 1-2 business days)'
      />
    </Field>
  );
};