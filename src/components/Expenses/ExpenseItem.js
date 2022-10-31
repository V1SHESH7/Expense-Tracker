import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem=(props)=> {

const [title, setTitle] = useState(props.title);
const changeHandler=()=>{
  setTitle("update");
}
  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={changeHandler}>Changge title</button>
    </Card>
  );
}
export default ExpenseItem;
