import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  let filteredValues = props.filteredResult;

  return (
    <div>
      {filteredValues.length > 0 ? (
        <ul className="expenses-list">
          {filteredValues.map(({ id, title, amount, date }) => {
            return (
              <ExpenseItem
                key={id}
                id={id}
                title={title}
                amount={amount}
                date={date}
              />
            );
          })}
        </ul>
      ) : (
        <h2 className="expenses-list__fallback">Found no expenses.</h2>
      )}
    </div>
  );
};

export default ExpenseList;
