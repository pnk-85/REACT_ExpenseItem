import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const expenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onaddExpense(expenseData);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onExpenseData={expenseDataHandler}/>

        </div>
    )
};

export default NewExpense;