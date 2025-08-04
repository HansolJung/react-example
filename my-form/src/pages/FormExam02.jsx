import React from 'react';
import { useForm } from 'react-hook-form'; // react-hook-form 설치해야함.

function FormExam02(props) {

    // register : 필수 처리 등록
    // handleSubmit : submit 이벤트 처리
    // errors : 유효 체크 상태
    const {register, handleSubmit, formState:{errors}, setValue} = useForm();
    
    const submitEvt = (data)=>{
        console.log(data);
    }

    const trimValue = (name, value) =>{
        // shouldValidate 는 공백 처리 한 다음에 다시 유효성 체크 하라는 뜻 
        setValue(name, value.trim(), {shouldValidate: true});
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitEvt)}>
                <div>
                    <input type="text" 
                        {...register('userId', {
                                required: '아이디를 입력하십시오', 
                                validate: value => value.trim().length > 0 || '아이디를 입력하십시오.'
                            })
                        }
                        onBlur={(e)=> trimValue('userId', e.target.value)}
                        placeholder='아이디'/>
                    {
                        errors.userId && 
                            <p style={{color: 'red'}}>{errors.userId.message}</p>
                    }
                </div>
                <div>
                    <input type="password" 
                        {...register('passwd', {
                                required: '패스워드를 입력하십시오', 
                                validate: value => value.trim().length > 0 || '패스워드를 입력하십시오.'
                            })
                        } 
                        onBlur={(e)=> trimValue('passwd', e.target.value)}
                        placeholder='패스워드'/>
                    {
                        errors.passwd && 
                            <p style={{color: 'red'}}>{errors.passwd.message}</p>
                    }
                </div>
                <button type='submit'>전송</button>
            </form>
        </div>
    );
}

export default FormExam02;