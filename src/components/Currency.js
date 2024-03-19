import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState("$ Dollar");

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setSelectedCurrency(newCurrency); // Update local state
        dispatch({
            type: 'SET_CURRENCY',
            payload: newCurrency, // Update global state
        });
    };

    return (
        <div className="container-fluid"> {/* Optional: For full-width or specific layout integration */}
            <div className="mb-3 form-group"> {/* Use form-group for structure */}
                <label htmlFor="currency-selector" className="form-label d-block mb-2">
                    Currency: <strong>{selectedCurrency}</strong>
                </label>
                <select 
                    id="currency-selector" 
                    onChange={handleCurrencyChange} 
                    className="form-select" 
                    value={selectedCurrency}
                >
                    <option value="$">($) Dollar</option>
                    <option value="£">(£) Pound</option>
                    <option value="€">(€)Euro</option>
                    <option value="₹">(₹) Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default CurrencySelector;
