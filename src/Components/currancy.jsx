import React from "react";
import "./currency.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { inputActions } from "../ReduxState/Features/userInput";
import { dataActions } from "../ReduxState/Features/data";

const Currancy = ({ submit }) => {
    const dispatch = useDispatch();
    const currencySymbols = useSelector((state) => state.data.symbol);

    const FromCurrency = (event) => {
        dispatch(inputActions.InputFrom(event.target.value));
        dispatch(dataActions.GetCurrency({ value: 0 }));
    };
    const ToCurrency = (event) => {
        dispatch(inputActions.InputTo(event.target.value));
        dispatch(dataActions.GetCurrency({ value: 0 }));
    };

    const amountHandler = (event) => {
        dispatch(inputActions.InputAmount(event.target.value));
    };

    return (
        <form onSubmit={submit} className="form">
            <input
                onChange={amountHandler}
                type="number"
                step="0.01"
                placeholder="Amount"
            />
            <h4>From</h4>
            <select onChange={FromCurrency}>
                {currencySymbols.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <h4>To</h4>
            <select onChange={ToCurrency}>
                {currencySymbols.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button type="submit">Convert </button>
        </form>
    );
};

export default Currancy;
