import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function Exam10(props) {

    const [inputs, setInputs] = useState({
        username: '',
        nickname: ''
    });
    

    const nameFocus = useRef();

    const {username, nickname} = inputs;

    const onChange = (e)=>{
        console.log(e.target);
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const onReset = ()=>{
        setInputs({
            username: "",
            nickname: "",
        });
        nameFocus.current.focus();
    }

    return (
        <div>
            <input
                name="username"
                placeholder="이름쓰세요"
                onChange={onChange}
                value={username}
                ref={nameFocus}
            />
            <input
                name="nickname"
                placeholder="닉네임쓰세요"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {username}({nickname})
            </div>
        </div>
    );
}

export default Exam10;