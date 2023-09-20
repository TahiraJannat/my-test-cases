import React, { useEffect, useState } from 'react';

export default function Radio({ items }) {
    const [checked, setChecked] = useState('1');
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setChecked(event.target.id);
        setValue(event.target.value);
    };
    const toggleRadio = () => {
        // Toggle the checked state between '1' and '2' (or any other value)
        const newValue = checked === '1' ? '2' : '1';
        setChecked(newValue);
    };
    useEffect(() => {
        setValue(items.find((item) => item.id === checked)?.value || ' ');
    }, [checked, items]);
    return (
        <>
            {items.map((item) => (
                <div key={item.id}>
                    <input
                        type='radio'
                        name='radioValue'
                        id={item.id}
                        value={item.value}
                        checked={checked === item.id}
                        onChange={handleChange}
                    />
                    <label htmlFor={item.value}>{item.label}</label>
                </div>
            ))}
            <h2>{checked ? value : 'hello'}</h2>
            <button onClick={toggleRadio}>Toggle</button>
        </>
    );
}
