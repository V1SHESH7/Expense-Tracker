import ExpensesForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpenses=(props)=>{
    const expenseDataHandler =(expenseData)=>{
const expenseDataCollected={
    ...expenseData,
    id:Math.random().toString()
};
//console.log(expenseDataCollected);
props.onAddExpense(expenseDataCollected);
    }
    
return(
    <div className="new-expense">
<ExpensesForm onSaveExpense={expenseDataHandler}/>
    </div>
)
}
export default NewExpenses