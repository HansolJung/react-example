import React from 'react';
import useCounterStore from './store/useCounterStore';

function ButtonComp(props) {

    //const {addNumber, minusNumber} = useCounterStore();  
    const {addNumber} =  useCounterStore();
    const {minusNumber} = useCounterStore();

    return (
        <div>
            <button type='button' onClick={addNumber}>더하기</button>
            <button type='button' onClick={minusNumber}>빼기</button>
        </div>
    );
}

export default ButtonComp;