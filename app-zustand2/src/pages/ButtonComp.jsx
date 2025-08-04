import React, { useCallback } from 'react';
import useCounterStore from '../store/useCounterStore';

function ButtonComp(props) {

    const {addCount, minusCount} = useCounterStore();

    const addEvent = useCallback(()=>{
        addCount();
    }, []);

    return (
        <div> 
            <button onClick={addEvent}>더하기</button>
            <button onClick={minusCount}>빼기</button>
        </div>
    );
}

export default ButtonComp;