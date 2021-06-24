import React from 'react';
import "./ExpenseDate.css"

export default function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expenseDate">
      <div className="expenseDate__year">{year}</div>
      <div className="expenseDate__month">{month}</div>
      <div className="expenseDate__day">
        {day} <sup>th</sup>{" "}
      </div>
    </div>
  );
}
