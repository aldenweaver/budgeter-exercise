import { FormControl, Input } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

// Should this just be the same as the DateDue component? Pass props to declare which?
function DatePaidInput({ datePaid, setDatePaid }) {
    return ( 
        <FormControl>
            {/* 
            // Ability to log past bills? Otherwise this is just needed in the grid rows. Would also want isPaid to be & display as true.
            <InputLabel htmlFor="datePaid">Date Paid</InputLabel>
            <DatePicker
                id="amount"
                label="Date Paid"
                value={datePaid}
                onChange={(e) => setDatePaid(e.target)}
            />*/}
        </FormControl>   
     );
}

export default DatePaidInput;