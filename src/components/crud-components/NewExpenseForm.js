import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { RemoveDone } from '@mui/icons-material';

function NewExpenseForm({ addExpense, moveAllPaid }) {
    const [formValue, setFormValue] = useState({
        content: "",
        isPaid: false
    });

    function handleSubmit(e) {
        e.preventDefault();

        addExpense(formValue);
        setFormValue({content: "", isPaid: false});
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={formValue.content} 
                onChange={(e) => {setFormValue({ ...formValue, content: e.target.value })}}>
            </input>
            <IconButton variant="contained" color="primary" onClick={moveAllPaid}>
                <RemoveDone color="primary">
                </RemoveDone>
            </IconButton>
            
        </form>
    );
}

export default NewExpenseForm;