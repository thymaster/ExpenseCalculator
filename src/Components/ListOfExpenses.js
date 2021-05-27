import React from "react";

export function Expense(props) {
  return (
    <div>
      <div className="expenseItem">
        <h2>{props.title}</h2>
      </div>
      <div>
        <h2>{props.amount}</h2>
      </div>
    </div>
  );
}
