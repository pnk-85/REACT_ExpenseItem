import './ExpenseItem.css'

function ExpenseItem () {
    const LocationOfExpenditure = 'Pune';
    const expenseTitle ={name:'FOOd',name1:'PETROL',name2:'MOVIE'};
    const expensePrice ={price:'RS10',price1:'RS100', price2:'RS200'};
    return (
        <div>
            <div className='expense-item'>
            <div>13/07/2023 </div>
            <div className='expense-item__description'>
            <h2>{expenseTitle.name}</h2>
            <div className='expense-item__location'>{LocationOfExpenditure}</div>
            <div className='expense-item__price'>{expensePrice.price}</div>
            </div>
            </div>
            <br></br>
            <div className='expense-item'>
            <div>13/07/2023 </div>
            <div className='expense-item__description'>
            <h2>{expenseTitle.name1}</h2>
            <div className='expense-item__location'>{LocationOfExpenditure}</div>
            <div className='expense-item__price'>{expensePrice.price1}</div>
            </div>
            </div>
            <br></br>
            <div className='expense-item'>
            <div>13/07/2023 </div>
            <div className='expense-item__description'>
            <h2>{expenseTitle.name2}</h2>
            <div className='expense-item__location'>{LocationOfExpenditure}</div>
            <div className='expense-item__price'>{expensePrice.price2}</div>
            </div>
            </div>
        </div>
        
    
    );
}

export default ExpenseItem; 