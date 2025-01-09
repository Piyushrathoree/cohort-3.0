import InputBox from "./InputBox";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { z } from "zod";


function App() {
    const [amount, setAmount] = useState();
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState();

    const currencyOptions = useCurrencyInfo(from);
    const options = Object.keys(currencyOptions);

    function convert() {
        setConvertedAmount(amount * currencyOptions[to]);
    }
    function swap(){
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }

    return (
        <div
            className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/009/484/991/original/money-currency-exchange-and-money-transfer-on-stock-exchange-currencies-dollar-euro-pound-yen-banking-international-trading-financial-concept-illustration-free-vector.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                currencyOptions={options}
                                onAmountChange={(value) => {
                                    setAmount(value);
                                }}
                                onCurrencyChange={(value) => {
                                    setFrom(value);
                                }}
                                amount={amount}
                                selectCurrecy={from}
                                currencyOptionsDisable
                                placeholder="Enter Amount"
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                onClick={swap}
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                currencyOptions={options}
                                onCurrencyChange={(currency) => {
                                    setTo(currency);
                                }}
                                amount={convertedAmount}
                                selectCurrecy={to}  
                                amountDisable
                                placeholder="Converted Amount"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default App;
