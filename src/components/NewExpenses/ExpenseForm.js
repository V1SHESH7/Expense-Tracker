import { useState } from "react";
import "./ExpenseForm.css";

const ExpensesForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
//using one state
//const[enteredInput,setEnteredInput]=useState({enteredTitle:'',enteredAmount:'',enteredDate:''})
  const titleChangeHandler = (e) => {
   setEnteredTitle(e.target.value);
    // setEnteredInput((prevState)=>{
    //     return {...prevState,enteredTitle: e.target.value}
    // });

  };

  const amountChange = (e) => {
    setenteredAmount(e.target.value);
   // setEnteredInput({...enteredInput, enteredAmount: e.target.value,});

  };
  const dateChanger = (e) => {
    setEnteredDate(e.target.value);
   // setEnteredInput({...enteredInput, enteredDate: e.target.value,});
  };
  const submitHandler=(e)=>{
e.preventDefault();
const expenseData={
    title:enteredTitle,
    amount:enteredAmount,
    date: new Date(enteredDate)
}
//console.log(expenseData);
props.onSaveExpense(expenseData)
setenteredAmount('');
setEnteredTitle('');
setEnteredDate('')

  };
 
 

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value ={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value ={enteredAmount}onChange={amountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value ={enteredDate} //clearing form through 2 way binding
            onChange={dateChanger}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpensesForm;
