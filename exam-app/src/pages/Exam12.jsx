import React, { useRef } from 'react';

function Exam12(props) {

    const inputEl = useRef(null);

    return (
        <div style={{ margin: '2em' }}>
            <div>
                <button onClick={() => inputEl.current.click()}>파일</button>
            </div>
            <input ref={inputEl} type="file" 
                onChange={()=>console.log(inputEl.current.files)} hidden/> {/* (e) => e.target.files 와 동일하다. */}

        </div>
    );
}

export default Exam12;