import React from "react";
import "./Expenses.css";

export function Expenses(props) {
  return (
    <div>
      <div className="expenseItem">
        <div>March 28th 2021</div>
        <div className="expenseItem__description">
          <h2>Car Insurance</h2>
          <div className="expenseItem__price">$294.67</div>
        </div>
      </div>
    </div>
  );
}
