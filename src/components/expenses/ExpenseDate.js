import "./ExpenseDate.css";
import getFullDate from "../../util/dateExtractor";
function ExpenseDate(props) {
    const {month,year,day} = getFullDate(props.date)
    return (
        <div className="expende-date-container">
            <div className="expense-date-month">{month}</div>
            <div className="expense-date-year">{year}</div>
            <div className="expense-date-day">{day}</div>
        </div>
    );
}

export default ExpenseDate;
