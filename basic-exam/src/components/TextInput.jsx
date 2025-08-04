import React, { useState } from 'react';

function TextInput({setList, myId}) {

    const [text, setText] = useState('');

    const insertText = ()=>{
        setList((prev)=>[...prev, {id: myId.current++, text: text}])
    }

    return (
        <>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <button type='button' onClick={insertText}>입력</button>
        </>
    );
}

export default TextInput;