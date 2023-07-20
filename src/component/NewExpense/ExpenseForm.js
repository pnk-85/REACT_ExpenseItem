import React, { useState } from 'react';

import './ExpenseForm.css';
import userEvent from '@testing-library/user-event';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const ExpenseForm = (props) => {
    const [enteredTitle, setenteredTitle] = useState('')
    const [enteredAmount, setenteredAmount] = useState('')
    const [enteredDate, setenteredDate] = useState('')

    // const [userInput, setUserInput]= useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
    };

    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
    };

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:eventWrapper.target.value
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
        };
        props.onExpenseData(expenseData);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('')
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min='2016-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;