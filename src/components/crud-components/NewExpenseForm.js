import React, { useState, useEffect, useId } from 'react';

import { Container, FormControl, FormHelperText, Grid, IconButton, Input} from '@mui/material';
import NameInput from './input-components/NameInput';
import AmountInput from './input-components/AmountInput';
import DateDueInput from './input-components/DateDueInput';
// import TagsInput from './input-components/TagsInput';
// import IsPaidInput from './input-components/IsPaidInput';
// import DatePaidInput from './input-components/DatePaidInput';


function NewExpenseForm({ addExpense }) {
    const newId = useId();

    const [newExpense, setNewExpense] = useState({});

    //const [isPaid, setIsPaid] = useState(false);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [dateDue, setDateDue] = useState("");
    //const [datePaid, setDatePaid] = useState("");
    //const [tags, setTags] = useState([]);

    // useEffect(() => {
    //     setNewExpense({
    //         "id":newId,
    //         "isPaid":false, 
    //         "name":"", 
    //         "amount":0, 
    //         "dateDue":"",
    //         "datePaid":"",   
    //         "tags":[]
    //     });
    // }, []);


    function handleSubmit(e) {
        e.preventDefault();

        setNewExpense({
            "id":newId,
            "isPaid":false, 
            "name":name, 
            "amount":amount, 
            "dateDue":dateDue,
            "datePaid":"",   
            "tags":["New"]
        });

        addExpense(newExpense);
    }

    // TODO: 
        // Add error handling via passing error handling function to error attr 
        // Add Context via useFormControlContext hook
    return ( 
        <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
            <FormHelperText>
                What are you doing today to make tomorrow better?
            </FormHelperText>
            <br/>
            
            <Grid container spacing={2}>
                <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                    <NameInput name={name} setName={setName}/>
                    <br/>
                </Grid>

                <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                    <AmountInput amount={amount} setAmount={setAmount}/>
                    <br/>
                </Grid>

                <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                    <DateDueInput dateDue={dateDue} setDateDue={setDateDue}/>
                    <br/>
                </Grid>

                {/*<TagsInput tags={tags} setTags={setTags}/><br/>*/}

                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                    <IconButton onChange={(e) => {
                        handleSubmit(e)
                    }}>
                        Add Expense
                    </IconButton>
                </Grid>
            </Grid>
        </form>
        </Container>
    );
}

export default NewExpenseForm;