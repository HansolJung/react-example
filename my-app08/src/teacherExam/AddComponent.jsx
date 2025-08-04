import React, { useContext, useState } from 'react';
import { SumContext } from './SumContext';

function AddComponent() {

    const {add} = useContext(SumContext);

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const addEvent = ()=>{
        add(Number(num1), Number(num2));
    }

    return (
        <div>
            <input type="number" onChange={(e)=>setNum1(e.target.value)}/>
            <input type="number" onChange={(e)=>setNum2(e.target.value)}/>
            <button type='button' onClick={addEvent}>더하기</button>
        </div>
    );
}

export default AddComponent;