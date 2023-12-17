import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>{count}</p>
            <p>안녕하세요! 양은지님!</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}
