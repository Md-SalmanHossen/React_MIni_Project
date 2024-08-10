import React from 'react';

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
}) => {
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label className="text-gray-400 mb-2 block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5 border border-gray-300 rounded-lg"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          style={{ padding: '8px' }} // Example inline style for padding
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end">
        <p className="text-gray-400 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none border border-gray-300"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          style={{ padding: '8px' }} // Example inline style for padding
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
