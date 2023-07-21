import React from "react";



const Expensefilter =(props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='202'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default Expensefilter;