import React, { useRef, useState } from 'react';

function Exam14(props) {

    const [formData, setFormData] = useState({ email: '', password: ''});
    const emailEl = useRef(null);
    const passwordEl = useRef(null);

    const handleFormData = (e)=>{
        const {id, value} = e.target;

        setFormData({...formData, [id]: value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (formData.email.trim().length === 0) {
            alert('이메일을 입력해주세요.');
            emailEl.current.focus();
            return false;
        }

        if (formData.password.trim().length === 0) {
            alert('패스워드를 입력해주세요.');
            passwordEl.current.focus();
            return false;
        }
            
        alert(`로그인 성공!!! email: ${formData.email}, password: ${formData.password}`);
    }
    
    return (
        <div className="App">
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">이메일</label>
                <input id="email" onChange={handleFormData} ref={emailEl} />
                </div>
                <div>
                <label htmlFor="password">패스워드</label>
                <input id="password" type="password" onChange={handleFormData} ref={passwordEl}/>
                </div>
                <div>
                <button>로그인</button>
                </div>
            </form>
        </div>
    );
}

export default Exam14;