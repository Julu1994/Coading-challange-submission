import React from "react";
import "./home.css";
import Currancy from "../Components/currancy";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dataActions } from "../ReduxState/Features/data";
import Spinner from "../Components/spinner";

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const FromCurrency = useSelector((state) => state.input.from);
    const ToCurrency = useSelector((state) => state.input.to);
    const Amount = useSelector((state) => state.input.amount);

    const convertedAmount = useSelector(
        (state) => Object.values(state.data.concertedCurrency)[0]
    );
    const base = "https://api.frankfurter.app";

    const convertHandler = async (event) => {
        event.preventDefault();
        try {
            if (FromCurrency === ToCurrency || Amount < 0.01) {
                alert("Invalid input!!");
            } else {
                setLoading(true);
                const response = await fetch(
                    `${base}/latest?amount=${Amount}&from=${FromCurrency}&to=${ToCurrency}`
                );
                const data = await response.json();
                data && setLoading(false);
                dispatch(dataActions.GetCurrency(data.rates));
            }
        } catch (err) {
            setLoading(false);
            alert("Something went wrong");
            console.log(err);
        }
    };

    React.useEffect(() => {
        const abortController = new AbortController();
        const getCurrency = async () => {
            try {
                const response = await fetch(`${base}/currencies`, {
                    signal: abortController.signal,
                });
                const data = await response.json();
                const entries = Object.entries(data);
                for (let i = 0; i < entries.length; i++) {
                    dispatch(dataActions.GetSymbol(entries[i][0]));
                }
            } catch (err) {
                alert("Something went wrong..");
                console.log(err);
            }
        };
        getCurrency();
        return () => abortController.abort();
    }, [dispatch]);

    return (
        <div className="home">
            {loading && <Spinner />}
            <h2>Currancy Converter</h2>
            <Currancy submit={convertHandler} />
            {!convertedAmount ? (
                <h2>0.00</h2>
            ) : (
                <h2>{`${convertedAmount} ${ToCurrency}`}</h2>
            )}
        </div>
    );
};

export default Home;
