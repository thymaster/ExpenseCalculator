import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <Card className="expenseItem">
      <ExpenseDate date={props.date} />
      <div className="expenseItem__description">
        <h2> {props.title} </h2>
        <div className="expenseItem__price"> ${props.amount} </div>
      </div>
    </Card>
  );
}
