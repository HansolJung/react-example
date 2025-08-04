import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function FormExam02(props) {

    const [formData, setFormData] = useState( {myName: '', age: '', gender: '', hobbies: []} );   // formData 객체의 기본값 설정
    const [isShow, setIsShow] = useState(false);

    const inputChange = (e) => {

        if(isShow) {  // 키보드 입력이 발생하면 출력된 정보 다시 안보이게 하기
            setIsShow(!isShow);
        }

        const {name, value} = e.target;  // e.target 이 가지고 있는 속성의 이름과 왼쪽에 대응되는 이름은 일치해야 한다.
        
        // setFormData 가 허용하는 callback 함수는 setter 가 지니는 객체 또는 값을 매개변수로 받는다.
        // callback 함수는 반드시 setter 가 지니는 데이터와 같은 헝식의 값을 return 해야한다.
        // 객체를 set 할 때는 새로운 객체를 넣어줘야 한다. 그래야 주소가 바뀌기 때문에 이전과 다르다는 것을 알게 된다.

        // 화살표 함수가 객체를 반환할 때 return을 생략하고 쓰는 경우는 소괄호로 감싸야 한다 (문법 규칙)
        setFormData((prev)=>({...prev, [name]: value}));

        // 객체의 값을 가져오는 방법
        // 1. obj.name
        // 2. obj['name']
    }

    const handlerHobbies = (e) => {

        if(isShow) {  // 키보드 입력이 발생하면 출력된 정보 다시 안보이게 하기
            setIsShow(!isShow);
        }

        const {value, checked} = e.target;  // e.target 이 가지고 있는 속성의 이름과 왼쪽에 대응되는 이름은 일치해야 한다.
        let updated = [...formData.hobbies];  // 배열 복사하기
        if (checked) {
            updated.push(value);
        } else {
            updated = updated.filter(val=>val !== value);
        }
        
        setFormData((prev)=>({...prev, hobbies : updated}));

    }

    const showDataToggle = () => {
        if (!isShow) {
            setIsShow(!isShow);
        }
    }

    return (
        <div>
            <main className='container d-flex flex-column vh-100 mt-5'>
                <section className='d-flex flex-column w-50 vh-75 mx-auto'>
                    <div className='mb-4'>
                        <label htmlFor="myName" className='form-label'>이름 </label>
                        <input id="myName" name='myName' type="text" className='form-control' onChange={inputChange}/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="age" className='form-label'>나이 </label>
                        <input id="age" name='age' type="text" className='form-control' onChange={inputChange}/>
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>성별: </label>
                        <div className='form-check form-check-inline mx-3'>
                            <input type='radio' className='form-check-input'
                                id='man' name='gender' value="남자" 
                                onChange={inputChange} checked={formData.gender === '남자'}/> 
                            <label htmlFor="man" className='form-check-label'>남자</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input type='radio' className='form-check-input'
                                id='woman' name='gender' value="여자" 
                                onChange={inputChange} checked={formData.gender === '여자' || formData.gender === ''}/>   
                            <label htmlFor="woman" className='form-check-label'>여자</label>
                        </div>  
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>취미: </label>
                        <div className='form-check form-check-inline mx-3'>
                            <input type='checkbox' className='form-check-input'
                                id='movie' name='hobby' value="영화"
                                onChange={handlerHobbies}/> 
                            <label htmlFor="movie" className='form-check-label'>영화 보기</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input type='checkbox' className='form-check-input'
                                id='book' name='hobby' value="독서"
                                onChange={handlerHobbies}/> 
                            <label htmlFor="book" className='form-check-label'>독서</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input type='checkbox' className='form-check-input'
                                id='music' name='hobby' value="음악"
                                onChange={handlerHobbies}/> 
                            <label htmlFor="music" className='form-check-label'>음악 감상</label>
                        </div>  
                    </div>
                    <div className='mb-4 text-center'>
                        <button type='button' className='btn btn-primary' onClick={showDataToggle}>출력하기</button>
                    </div>
                    <div className='bg-light'>
                        {
                            isShow && 
                            (
                                <>
                                    <p>이름 : {formData.myName}</p>
                                    <p>나이 : {formData.age}</p>
                                    <p>성별 : {formData.gender || '여자'}</p>
                                    <p>취미 : {formData.hobbies.join(', ')}</p>
                                </>
                            )
                        }
                    </div>
                </section>
            </main>
        </div>
    );
}

export default FormExam02;