import React, { useContext, useState } from 'react';
import { SumContext } from './SumContext';

function SubLayout() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const {setResult} = useContext(SumContext);

    return (
        <>
            <input type="number" onChange={(e)=>setNum1(e.target.value)}/>
            <input type="number" onChange={(e)=>setNum2(e.target.value)}/>   
            <button type='button' onClick={()=>setResult(Number(num1) + Number(num2))}>더하기</button>
        </>
    );
}

export default SubLayout;