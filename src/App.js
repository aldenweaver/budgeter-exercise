/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';

import NewExpenseForm from './components/crud-components/NewExpenseForm'
import ExpenseGrid from './components/ExpenseGrid';
// import MoveAllPaid from './components/MoveAllPaid';

import { Typography } from '@mui/material';
import { ChakraProvider, extendTheme as chakraExtendTheme } from '@chakra-ui/react';
import { ThemeProvider as MaterialThemeProvider, createTheme as muiCreateTheme, THEME_ID, } from '@mui/material/styles';

const chakraTheme = chakraExtendTheme();
const materialTheme = muiCreateTheme();

function App() {
  {/* useState */}
  // useState() on App level to contain the Todos state
  const[expenses, setExpenses] = useState(
    // Checks if any todos are in local storage
    !localStorage.getItem("expenses") 
    ? []
    : JSON.parse(localStorage.getItem("expenses"))
  );

  const[paidExpenses, setPaidExpenses] = useState(
    // Checks if any todos are in local storage
    !localStorage.getItem("paid-expenses") 
    ? []
    : JSON.parse(localStorage.getItem("paid-expenses"))
  );

  {/*
  {
    "id":"44b3b08c-0d15-4eed-a883-4d4397e5d2a2",
    "isPaid":true, 
    "name":"Car", 
    "amount":"250", 
    "dateDue":"2023-05-04T03:40:10Z",
    "datePaid":"2023-04-08T11:21:27Z",   
    "tags":["Transportation"]
  }
  */}

  {/* useEffect */}
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("paidExpenses", JSON.stringify(paidExpenses))
  }, [expenses, paidExpenses]);


  {/* CRUD functions */}

  function addExpense(newExpense) {
    setExpenses([newExpense, ...expenses]);
  }
  
  function markPaid(index) {
    expenses[index].isPaid = !expenses[index].isPaid;
  
    // Modifying one member of the array, so need to update array via useState/set
    setExpenses([...expenses]);
  
    // Move it to paid
    moveOnePaid(index);
  }
  
  function deleteOneExpense(index){
    // Start at given index & only delete one item
    expenses.splice(index, 1);
  
    setExpenses([...expenses]);
  }
  
  function deleteOnePaid(index){
    // Start at given index & only delete one item
    paidExpenses.splice(index, 1);
  
    setPaidExpenses([...paidExpenses]);
  }
  
  function moveOnePaid(index){
    paidExpenses.push(expenses[index]);
    setPaidExpenses(paidExpenses);
  
    // Start at given index & only delete one item
    expenses.splice(index, 1);
  
    // Update state var
    setExpenses([...expenses]);
  }
  
  // function moveAllPaid() {
  //   for(let i = 0; i < expenses.length - 1; i++) {
  //     if(expenses[i].isPaid) {
  //       moveOnePaid(i);
  //     }
  //   }
  // }
  

  {/* JSX Component */}
  return (
    <div className="App">
      <ChakraProvider theme={chakraTheme} resetCSS>
        <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
            <Typography variant="h3">Budgeter App</Typography>
            <br/>

            <NewExpenseForm addExpense={addExpense}/>
            <br/>

            <ExpenseGrid expenses={expenses} gridTitle="Expenses" deleteRow={deleteOneExpense}/>
            <br/>

            {/*
            <MoveAllPaid moveAllPaid={moveAllPaid}/>
            */}

            <ExpenseGrid expenses={paidExpenses} gridTitle="Paid Expenses" deleteRow={deleteOnePaid}/>
            <br/>

            {/* Start with 2 weeks, then add ability to customize interval */}
            {/* <UpcomingExpenses upcoming={upcoming} payOne={payOne}></UpcomingExpenses> */}

            {/*
            //import { expensesData } from './data/expensesData';
            //import Expense from './components/crud-components/Expense';
            //import ExpensesDisplay from './components/ExpensesDisplay';
            //import PaidExpenses from './components/crud-components/PaidExpenses';
            
            <div>
              {expenses.map((expense, index) => {
                  return <Expense key={index} expense={expense} index={index} markPaid={markPaid} deleteOneExpense={deleteOneExpense}></Expense>
              })}
            </div>
            <br/>
            <ExpensesDisplay expenses={expensesData}/>
            <br/>
            <PaidExpenses paidExpenses={paidExpenses} deleteOnePaid={deleteOnePaid}></PaidExpenses>
            <br/>
            */}

          </MaterialThemeProvider>
        </ChakraProvider>
    </div>
  );
}

export default App;
