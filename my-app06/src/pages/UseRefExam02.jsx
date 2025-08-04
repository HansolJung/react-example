import React from 'react';
import '../assets/css/ref.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseRefExam02(props) {

    const idRef = useRef();
    const passwdRef = useRef();

    const [userId, setUserId] = useState('');
    const [passwd, setPasswd] = useState('');

    // 시작할 때 한 번만 실행
    useEffect(()=>{
        idRef.current.focus();
    }, []);

    const goLogin = ()=>{
        if(userId.trim().length === 0) {
            alert('아이디를 입력하십시오');
            idRef.current.focus();
            return false;
        }

        if(passwd.trim().length === 0) {
            alert('패스워드를 입력하십시오');
            passwdRef.current.focus();
            return false;
        }

        alert('로그인!!');
    }

    return (
        <div>
            <main className='login-form'>
                <section className='login-contents'>
                    <header className='header'>
                        <h2>로그인</h2>
                    </header>
                    <section className='input-form'>
                        <div className='form-box'>
                            <label htmlFor="userId">아이디: </label>
                            <input id='userId' 
                                ref={idRef}
                                onChange={(e)=>setUserId(e.target.value)}
                                type="text" 
                                className='input-text' />
                        </div>
                        <div className='form-box'>
                            <label htmlFor="password">패스워드: </label>
                            <input id='password' 
                                ref={passwdRef}
                                onChange={(e)=>setPasswd(e.target.value)}
                                type="text" 
                                className='input-text' />
                        </div>
                    </section>
                    <section className='btn-box'>
                        <button type='button' className='btn-login' onClick={goLogin}>로그인</button>
                        <button type='button' className='btn-join'>회원가입</button>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default UseRefExam02;