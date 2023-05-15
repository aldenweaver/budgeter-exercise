import { Container } from '@mui/material';
import PaidExpense from './PaidExpense';

function PaidExpenses({ paidExpenses, deleteOnePaid }) {
    const containerStyle = {
        border: "1px solid #50fa7b"
    }

    return ( 
        <Container style={containerStyle}>
            <h1>Paid Expenses</h1>
            {console.log(paidExpenses)}
            {paidExpenses.map((paidExpense, index) => {
                return <PaidExpense key={index} index={index} paidExpense={paidExpense}  deleteOnePaid={deleteOnePaid}></PaidExpense>
            })}
        </Container>
     );
}

export default PaidExpenses;