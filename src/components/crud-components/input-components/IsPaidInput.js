import { FormControl, Input } from '@mui/material';

// TODO: make clickable icon
function IsPaidInput({ isPaid, setIsPaid }) {
    return ( 
        <FormControl>
            {/*<Input  
                id="name"
                type="text" 
                margin="dense"
                autoFocus={true}
                required={true}
                placeholder="Expense Name"
                value={isPaid} 
                onChange={(e) => {setIsPaid(e.target.value)}}
            />*/}  
        </FormControl>  
     );
}

export default IsPaidInput;