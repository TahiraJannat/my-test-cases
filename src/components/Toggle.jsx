import React, { useState } from 'react';

export default function Toggle({ items }) {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleRadioClick = (itemValue) => {
        if (selectedValue === itemValue) {
            // If the clicked radio button is already selected, unselect it.
            setSelectedValue(null);
        } else {
            // Otherwise, select the clicked radio button.
            setSelectedValue(itemValue);
        }
    };

    return (
        <>
            {items.map((item) => (
                <div key={item.value}>
                    <input
                        type='radio'
                        name='radioValue'
                        id={item.value}
                        value={item.value}
                        checked={selectedValue === item.value}
                        onChange={() => {}}
                        onClick={() => handleRadioClick(item.value)}
                    />
                    <label htmlFor={item.value}>{item.label}</label>
                </div>
            ))}
            <h2>{selectedValue}</h2>
        </>
    );
}
