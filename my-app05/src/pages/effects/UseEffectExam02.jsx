import React from 'react';
import { useState } from 'react';
import Sign from './Sign';



function UseEffectExam01(props) {

    const [toggle, setToggle] = useState(false);

    const toggleBtnEvent = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <div>
                <button type='button' onClick={toggleBtnEvent}>
                    { toggle ? '가리기' : '보이기'}
                </button>
            </div>
            <div>
                {toggle && <Sign/>}
            </div>
        </div>
    );
}

export default UseEffectExam01;