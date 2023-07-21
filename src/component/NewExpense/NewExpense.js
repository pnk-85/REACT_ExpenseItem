import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
   const [isEditing, setIsEditing] = useState(false);

    const expenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onaddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);    
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onExpenseData={expenseDataHandler} onCancel={stopEditingHandler}/>}

        </div>
    )
};

export default NewExpense;