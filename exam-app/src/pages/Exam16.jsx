import React from 'react';
import { useReducer } from 'react';

function Exam16(props) {

    function handler(state, action) {
        switch(action.type) {
            case 'INCREASE':
                return state + 1;
            case 'DECRESE':
                return state - 1;
        }

        // default: return state 대신 throw 사용.
        // INCREASE, DECRESE 가 아닌 type 이 넘어왔다는 건 오타라고 봐야 하기 때문.
        throw new Error('[ERROR] unknown action type');
    }

    const [state, dispatch] = useReducer(handler, 0);

    return (
    <>
        <h3>{state}</h3>
        <button type='button' onClick={() => {dispatch({ type: 'INCREASE' });}}>
            Increase Counter
        </button>
        <button type='button' onClick={() => {dispatch({ type: 'DECRESE' });}}>
            Decrease Counter
        </button>
    </>
  );
}

export default Exam16;