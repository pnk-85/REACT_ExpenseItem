import React from "react";
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';





const ExpenseItem = (props) => {
const submit = () => {
    console.log('Delete Expense');
}

    return (
        <Card className='expense-item'>
            <ExpenseDate date ={props.date} />
            <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
            <button onClick={submit}>Delete Expense</button>
        </Card>
        
        
    
    );
}

export default ExpenseItem; 