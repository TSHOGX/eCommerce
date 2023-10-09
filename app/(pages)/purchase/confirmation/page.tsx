import { Box, Paper } from '@mui/material';

import CheckoutForm from "@/components/checkout/checkout-form";
import { CheckoutFlow } from "@/components/checkout/checkout-flow";

export default function Confirmation() {
  return (
    <div className = 'mt-6'>
      < Paper>
          <Box p = {4} >
            < CheckoutFlow /> 
            <div className="flex flex-col items-center justify-between">
              <div className=" text-2xl pt-8 pb-14">Confirm</div>
              <CheckoutForm />
            </div>
          </Box>
      </Paper> 
    </div>

  );
}
