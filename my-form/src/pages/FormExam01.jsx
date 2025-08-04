import React from 'react';
import { useForm } from 'react-hook-form'; // react-hook-form 설치해야함.

function FormExam01(props) {

    // register : 필수 처리 등록
    // handleSubmit : submit 이벤트 처리
    // errors : 유효 체크 상태
    const {register, handleSubmit, formState:{errors}} = useForm();
    
    const submitEvt = (data)=>{
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitEvt)}>
                <div>
                    <input type="text" {...register('userId', {required: true})} placeholder='아이디'/>
                    {
                        errors.userId && 
                            <p style={{color: 'red'}}>아이디를 입력하십시오.</p>
                    }
                </div>
                <div>
                    <input type="password" {...register('passwd', {required: true})} placeholder='패스워드'/>
                    {
                        errors.passwd && 
                            <p style={{color: 'red'}}>패스워드를 입력하십시오.</p>
                    }
                </div>
                <button type='submit'>전송</button>
            </form>
        </div>
    );
}

export default FormExam01;