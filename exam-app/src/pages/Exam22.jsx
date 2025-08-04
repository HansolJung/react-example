import React, { createContext, useContext, useRef, useState } from 'react';

function Exam22(props) {

    const [result, setResult] = useState(0);

    const add = (num1, num2)=>{
        setResult(num1 + num2);
    }

    return (
        <div>
            <p>합: {result}</p>
            <SumContext.Provider value={{add}}>
                <AddComponent/>
            </SumContext.Provider>
        </div>
    );
}

function AddComponent() {

    const {add} = useContext(SumContext);
    const inputNum1 = useRef(null);
    const inputNum2 = useRef(null);

    const addEvent = ()=>{
        const num1 = inputNum1.current.value;
        const num2 = inputNum2.current.value;
        add(Number(num1), Number(num2));
    }
    
    return (
        <>
            <input type='number' ref={inputNum1}/>
            <input type='number' ref={inputNum2}/>
            <button type='button' onClick={addEvent}>더하기</button>
        </>
    );
}

const SumContext = createContext(null);

export default Exam22;