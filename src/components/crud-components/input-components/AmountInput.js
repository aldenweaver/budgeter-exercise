import { Container, FormControl, Input } from '@mui/material';

function AmountInput({ amount, setAmount }) {
    return ( 
        <Container>
            <FormControl>
                <Input  
                    id="name"
                    type="text" 
                    margin="dense"
                    required={true}
                    placeholder="Expense Amount"
                    value={amount} 
                    onChange={(e) => {setAmount(e.target.value)}}
                />
            </FormControl>
        </Container>
            
     );
}

export default AmountInput;