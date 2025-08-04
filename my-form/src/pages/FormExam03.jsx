import React from 'react';
import { useForm } from 'react-hook-form';   // react-hook-form 설치해야함.
import { yupResolver } from '@hookform/resolvers/yup';  // @hookform/resolvers 설치해야함.
import * as yup from 'yup';  // yup 설치해야함.


const schema = yup.object().shape({
    // 필수값에서 제외하려면 required 만 제거하면 됨.
    userId: yup.string().trim()
        .min(2, '아이디는 최소 2자 이상이어야 합니다.')
        .max(11, '아이디는 최대 11자 이하이어야 합니다.')
        .required('아이디를 입력하십시오.'),
    passwd: yup.string().trim()
        .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
        .max(12, '비밀번호는 최대 12자 이하이어야 합니다.')
        .required('패스워드를 입력하십시오.'),
    passwdConfirm: yup.string().trim()
        .required('패스워드를 확인하십시오.')
        .oneOf([yup.ref('passwd'), null], '패스워드 확인이 일치하지 않습니다.')
});

function FormExam03(props) {

    // resolver 는 실제로 일을 수행하는 대상을 의미한다.
    // mode 는 onSubmit 이 기본값이다. mode 를 onChange 로 바꾸면 유효성 체크를 키보드 입력이 들어올 때마다 하게 된다.
    const {register, handleSubmit, watch, formState:{errors}} = useForm({resolver: yupResolver(schema), mode: 'onChange'});

    const submitEvent = (data)=>{
        console.log(data);
    }

    return (
        <div>
            <main>
                <form autoComplete='off' onSubmit={handleSubmit(submitEvent)}>
                    <div>
                        <label htmlFor="userId">아이디: </label>
                        <input type="text" 
                            id='userId'
                            {...register('userId')}/>
                        {
                            errors.userId && 
                                <p style={{color: 'red'}}>{errors.userId.message}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="passwd">패스워드: </label>
                        <input type="password" 
                            id='passwd'
                            {...register('passwd')}/>
                        {
                            errors.passwd && 
                                <p style={{color: 'red'}}>{errors.passwd.message}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="passwdConfirm">패스워드 확인: </label>
                        <input type="password" 
                            id='passwdConfirm'
                            {...register('passwdConfirm')}/>
                        {
                            errors.passwdConfirm && 
                                <p style={{color: 'red'}}>{errors.passwdConfirm.message}</p>
                        }
                    </div>
                    <button type='submit'>전송</button>
                </form>
            </main>
        </div>
    );
}

export default FormExam03;