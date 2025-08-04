import React from 'react';
import '../assets/css/login.css';

function Login({users, logUser, selected, setSelected, loginUser}) {

    return (
        <>
            <section className='login-form'>
                <select className='select form-control' 
                    onChange={(e)=>setSelected(e.target.value)}
                    value={selected}>
                    {
                        users?.map((userName, index)=>(
                            <option key={index} value={userName}>{userName}</option>
                        ))
                    }
                </select>
                <div>
                    <button type='button' className='btn btn-success'
                        onClick={loginUser}>
                        로그인
                    </button>
                </div>
                <div>{logUser ? logUser : '로그인'}</div>
            </section>
        </>
    );
}

export default Login;