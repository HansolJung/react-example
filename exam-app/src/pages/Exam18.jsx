import React from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Exam18(props) {
    const [count, setCount] = useState(0);

    const factorial = useMemo(() => {
        let fact = 1;
        for (let i = 1; i <= count; i++) {
            fact = fact * i;
        }
        
        return fact;
    }, [count]);

    useEffect(() => {
        console.log(`Factorial of ${count} is ${factorial}`);
    }, [factorial]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Factorial: {factorial}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Exam18;