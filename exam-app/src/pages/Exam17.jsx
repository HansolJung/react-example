import React from 'react';
import { useReducer } from 'react';

function Exam17(props) {

    function handler(prevState, nextState) {  

        if (prevState.age === 0) {
            return prevState;
        } else {
            return {...prevState, age: nextState.age};

            // 또는 return {...prevState, ...nextState};
        }
    }
    
    const [person, setPerson] = useReducer(handler, {name: 'Lee', age: 27});  /* dispatch 대신 그냥 set 함수 사용 */
    
    return (
        <div>
            <h3>{person.age}</h3>
            <button onClick={() => setPerson({ age: person.age - 1 })}>   
                Decrease Age
            </button>
        </div>
    );
}

export default Exam17;