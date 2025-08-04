import React, { useState } from 'react';

function NumberInput({setList}) {

    const [num, setNum] = useState(0);

    const addNum = ()=>{
        setList((prev)=>([...prev, num]));
    }

    return (
        <>
            <label htmlFor="inputNumber">숫자 : </label>
            <input type="number" id='inputNumber' onChange={(e)=>setNum(Number(e.target.value))}/>
            <button type='button' onClick={addNum}>입력</button>
        </>
    );
}

export default NumberInput;