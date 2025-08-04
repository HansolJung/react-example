import React from 'react';
import useCounter from './useCounter';

function Exam04(props) {

    const {count, increment, decrement, reset} = useCounter(0);

    return (
        <div>
            <h1>App</h1>
            <p>Count : {count}</p>
            <button type='button' onClick={increment}>증가</button>
            <button type='button' onClick={decrement}>감소</button>
            <button type='button' onClick={reset}>초기화</button>
        </div>
    );
}

export default Exam04;