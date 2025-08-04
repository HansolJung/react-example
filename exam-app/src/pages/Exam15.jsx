import React, { useRef, useState } from 'react';

function Exam15(props) {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (email.trim().length === 0) {
            alert('이메일을 입력해주세요.');
            emailRef.current.focus();
            return false;
        }
        
        if (password.trim().length === 0) {
            alert('패스워드를 입력해주세요.');
            passwordRef.current.focus();
            return false;
        }
        
        alert(`로그인 성공!!! email: ${email}, password: ${password}`);
    }

    return (
        <div className="App">
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">이메일</label>
                <input id="email" ref={emailRef} />
                </div>
                <div>
                <label htmlFor="password">패스워드</label>
                <input id="password" ref={passwordRef} type="password" />
                </div>
                <div>
                <button>로그인</button>
                </div>
            </form>
        </div>
    );
}

export default Exam15;