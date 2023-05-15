import { Container, Typography } from "@mui/material";

import DeleteDialog from "./DeleteDialog";

function PaidExpense({ index, paidExpense, deleteOnePaid }) {
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
            <Typography
                variant="h5">
                {paidExpense.content}
            </Typography>
            <DeleteDialog index={index} deleteOne={deleteOnePaid}></DeleteDialog>
        </Container>
     );
}

export default PaidExpense;