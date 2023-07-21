import React from "react";
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';





const ExpenseItem = (props) => {

    // const [amount, setAmount] = useState(props.amount);

    // const submit = () => {
    // setAmount('100$'); 
    // console.log(amount);
// }

    return (
        <Card className='expense-item'>
            <ExpenseDate date ={props.date} />
            <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
            {/* <button onClick={submit}>Change Amount</button> */}
        </Card>
        
        
    
    );
}

export default ExpenseItem; 