import { Card, CardHeader, CardContent } from '@mui/material';

function ExpenseCard({ expense }) {
    return ( 
        <Card>
            <CardHeader>
            Name: {expense.name}
            </CardHeader>

            <CardContent>
            <div>
                ID: {expense.id}
                <br/>
                amount: ${expense.amount}
                <br/>
                dateDue: {expense.dateDue}
                <br/>
                datePaid: {expense.datePaid}
                <br/>
                isPaid: {JSON.stringify(expense.isPaid)}
                <br/>
                tags: {JSON.stringify(expense.tags)}
                </div>
            </CardContent>
        </Card>
     );
}

export default ExpenseCard;