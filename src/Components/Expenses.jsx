import React from "react";
import "./Expenses.css";

export function Expenses(props) {
  return (
    <div>
      <div className="expenseItem">
        <div> {props.date.toISOString()} </div>
        <div className="expenseItem__description">
          <h2> {props.title} </h2>
          <div className="expenseItem__price"> ${props.amount} </div>
        </div>
      </div>
    </div>
  );
}
