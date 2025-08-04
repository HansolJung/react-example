import React from 'react';
import { useRef } from 'react';

function Exam06(props) {

    const inputEl = useRef(null); // 초기값은 null
    const onButtonClick = ()=> {
        inputEl.current.focus(); // input 요소에 포커스를 설정
    }

    return (
        <div>
            
            <input type="text" ref={inputEl}/>  {/* input 요소의 ref 속성에 inputEl 을 전달하여 DOM 요소와 연결 */}
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}

export default Exam06;