import { Container, FormControl, Input } from '@mui/material';

function NameInput({ name, setName }) {
    return ( 
        <Container>
            <FormControl>
                <Input  
                    id="name"
                    type="text" 
                    margin="dense"
                    autoFocus={true}
                    required={true}
                    placeholder="Expense Name"
                    value={name} 
                    onChange={(e) => {setName(e.target.value)}}
                />
            </FormControl>
        </Container>
            
     );
}

export default NameInput;