import ExpenseItem from "./component/ExpenseItem";

function App() {

  const expenses = [
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
  return (
    <div>
      <h2>Lets get started</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} location={expenses[0].location}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} location={expenses[1].location}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} location={expenses[2].location}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} location={expenses[3].location}></ExpenseItem>
      
    </div>
  );
}

export default App;
