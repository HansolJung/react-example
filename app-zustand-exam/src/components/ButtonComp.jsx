import React from 'react';
import useNumStore from '../store/useNumStore';
import useCounterStore from '../store/useCounterStore';

function ButtonComp(props) {

    const {addCount, minusCount} = useCounterStore();
    const {addNumber, minusNumber} = useNumStore();

    return (
        <>
            <div>
                <button type='button' onClick={addCount}>count 더하기</button>
                <button type='button' onClick={minusCount}>count 빼기</button>
            </div>
            <div>
                <button type='button' onClick={addNumber}>num 더하기</button>
                <button type='button' onClick={minusNumber}>num 빼기</button>
            </div>
        </>
    );
}

export default ButtonComp;