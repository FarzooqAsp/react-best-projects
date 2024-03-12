import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false
}) {
  return (
    <>
    <div className='w-full flex flex-wrap justify-center items-center'>
        <div className='p-3 w-full bg-white rounded-lg flex flex-wrap'>
                <div className=' w-1/2 bg-yellow-400'>
                    <label className=''>
                        {label}
                    </label>
                    <input className='outline-none w-full bg-transparent'
                    placeholder='Amount'
                    type='Number'
                    disabled={amountDisable}
                    value = {amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
                <div className='w-1/2 justify-end text-right bg-red-700'>
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none
                "
                value={selectCurrency}
                disabled={currencyDisable}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                </div>
            </div>
        </div>
    </>
  )
}

export default InputBox