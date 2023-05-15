import { Card, Container, IconButton, Typography } from "@mui/material";
import { Done, Cancel } from "@mui/icons-material";

import DeleteDialog from "./DeleteDialog";

function Expense({ index, expense, markPaid, deleteOneExpense }) {
    const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid",
        borderRadius: "5px",
        height: "100%",
    };

    return ( 
        <Container style={containerStyle}>
            <IconButton
            onClick={() => markPaid(index)}
            style={{ color: "#50fa7b" }}>
                {/* Cancel/done icons */}
                { expense.isPaid ? <Cancel></Cancel> : <Done></Done>}
            </IconButton>

            {/* Expense Text, styled based on if it is done */}
            <Typography
                variant="h5"
                style={
                    expense.isPaid 
                    ? {
                        textDecoration: "line-through",
                        color: "gray"
                      }
                    : {}
                }
            >
                {expense.content}
            </Typography>

            <DeleteDialog index={index} deleteOne={deleteOneExpense}></DeleteDialog>
        </Container>
     );
}

export default Expense;