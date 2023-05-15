import { Container, FormControl } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

// MUI Date Picker onChange vs onAccept
function DateDueInput({ dateDue, setDateDue }) {
    return ( 
        <Container>
            <FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        id="amount"
                        label="Date Due"
                        required={true}
                        value={dateDue}
                        onChange={(e) => setDateDue(e.target)} // e.target.value throws an error for DatePicker
                    />
                </LocalizationProvider>
            </FormControl>
        </Container>
            
     );
}

export default DateDueInput;