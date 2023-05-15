import { FormControl, Input } from '@mui/material';

// TODO: tags input (multi-select, how to determine tag set?, ability to CRUD tags?)
function TagsInput({ tags, setTags }) {
    return ( 
        <FormControl>
            {/*<Input  
                id="name"
                type="text" 
                margin="dense"
                autoFocus={true}
                required={true}
                placeholder="Expense Name"
                value={name} 
                onChange={(e) => {setName(e.target.value)}}
            />*/}
        </FormControl>
            
     );
}

export default TagsInput;