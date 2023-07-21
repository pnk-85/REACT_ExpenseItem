import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import Expensefilter from "./ExpenseFilter";

const Expenses = (props) => {
  const[filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandeler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear;
  });

  let expenseContet = <p>No expenses found</p>

  if(filteredExpenses.length > 0){
    expenseContet = (filteredExpenses.map((expense) => (
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date} />
     ))
     )
  }

    return (
        <div>
          <Card className="expenses">
      <Expensefilter selected={filteredYear} onChangeFilter={filterChangeHandeler} />       
      {expenseContet}
        </Card>
        </div>
    )
}

export default Expenses;