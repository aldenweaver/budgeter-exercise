/* eslint-disable no-lone-blocks */
import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import NewExpenseForm from "./crud-components/NewExpenseForm";
//import { expensesData } from "../data/expensesData";

function ExpenseGrid({ expenses, gridTitle, deleteRow }) {
    const [rows, setRowsState] = useState([]);
    const [cols, setColsState] = useState([]);

    const columns = [
        { field: 'isPaid', headerName: 'Paid?', width: 75 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'amount', headerName: 'Amount', width: 150 },
        { field: 'due', headerName: 'Due', width: 125 },
        { field: 'paid', headerName: 'Paid', width: 125 },
        { field: 'tags', headerName: 'Categories', width: 100 }
    ];


    {/* Custom column components */}
    // https://mui.com/x/react-data-grid/editing/#full-featured-crud-component
    // GridActionsCellItem

    // Is Paid checkbox

    // Text Input columns

    // DatePicker Columns

    // Tags Multi-Select

    // Delete expense column
    // <DeleteDialog index={index} deleteFunc={deleteRow}></DeleteDialog>

 
    useEffect(() => {
        expensesToRows();
        setColsState(columns);
    }, []); // 
    // Empty: useEffect runs once on component load
    // putting rows or cols in there wouldn't allow for setState
    
    function expensesToRows() {
        // Can't use push on state var
        const newRows = [];

        expenses.map((expense, index) => {
            newRows.push({ 
                id: index,
                isPaid: expense.isPaid, 
                name: expense.name, 
                amount: expense.amount, 
                due: JSON.stringify(expense.dateDue),
                paid: JSON.stringify(expense.datePaid),
                tags: JSON.stringify(expense.tags)
            });
        });

        setRowsState(newRows);
    }

    
    return ( 
        <Container>
            <Typography variant="h7">{gridTitle}</Typography>
            <br/>

            <DataGrid 
                rows={rows} 
                columns={columns} 
                baseFormControl={NewExpenseForm}/>
            
        </Container>
     );
}

export default ExpenseGrid;