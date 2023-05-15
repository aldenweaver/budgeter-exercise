import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { expensesData } from "../data/expensesData";

function BudgetGrid() {
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

    useEffect(() => {
        expensesToRows();
        setColsState(columns);
    }, []); // 
    // Empty: useEffect runs once on component load
    // putting rows or cols in there wouldn't allow for setState

    // Can't use push on state var
    function expensesToRows() {
        const newRows = [];
        expensesData.map((expense, index) => {
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
        <div>
            <DataGrid rows={rows} columns={columns} />
        </div>
     );
}

export default BudgetGrid;