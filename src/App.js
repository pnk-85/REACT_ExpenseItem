import React,{ useState} from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
import './App.css';


const Dummy_Expenses = [
  {
    id:'e1',
    title:'Toilet Paper',
    amount:94.12,
    date:new Date(2023, 7, 13),
    location:'pune'
  },
  {
    id:'e2',
    title:'New TV',
    amount:799.12,
    date:new Date(2023, 4, 14),
    location:'mumbai'
  },
  {
    id:'e3',
    title:'Car Insurance',
    amount:294.67,
    date:new Date(2023, 5, 10),
    location:'banglore'
  },
  {
    id:'e4',
    title:'New Desk',
    amount:450,
    date:new Date(2023, 2, 9),
    location:'chennai'
  },
]

const App = () => {
  const[expenses, setExpenses] = useState(Dummy_Expenses);
  

  const addExpenseHandler =(expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  // return React.createElement (
  //   'div',{},React.createElement('h2',{},"Lets get started"),
  //   React.createElement(Expenses, {items: expenses})
  // );
  return (
    <div>
      <NewExpense onaddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
  // return (

  //   <div className='expense-item'>
  //   <ExpenseDate date ={props.date} />
  //   <div>
  //   <h1>Expense 1</h1>
  //   <h1>Expense 1</h1>
  //   </div>
  //   <div>
    
  //   )
}

export default App;
