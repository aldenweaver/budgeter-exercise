import { Grid } from '@mui/material';
import ExpenseCard from './ExpenseCard';

function ExpensesDisplay({ expenses }) {
    return ( 
        <Grid container>
        { expenses.map((expense) => {
            return(
                <Grid item key={expense.id} xs={12}> 
                    <ExpenseCard expense={expense}/>
                </Grid>
            );
        })

        }

        </Grid>
     );
}

export default ExpensesDisplay;