import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import Expensefilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const[filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandeler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear;
  });

  

    return (
        <div>
          <Card className="expenses">
      <Expensefilter selected={filteredYear} onChangeFilter={filterChangeHandeler} />   
      <ExpenseChart expenses={filteredExpenses} />    
      <ExpenseList items={filteredExpenses}/>
        </Card>
        </div>
    )
}

export default Expenses;