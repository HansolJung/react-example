import React, { useState } from 'react';

function FuncExam(props) {

    const [user, setUser] = useState({});

    const updateInfo = (e)=>{
        const {name, value} = e.target;

        // user.name = value 또는 user[name] = value;
        // 전자는 key 값을 알고 있을 때 사용하고 후자는 key 값을 모를 때 사용한다.
        // 객체의 갱신은 주소의 변경. 즉, 새로운 객체를 대입해야 한다.
        // 하지만 내용은 유지해야 하기 때문에 새로운 객체에 기존 객체의 내용을 삽입하는데 이 과정에서 구조분해 할당.
        setUser({...user, [name]: value});
    }

    const outPutPrint = ()=>{
        console.log(user);
    }

    return (
        <div>
            <label htmlFor="myName">이름 : </label>
            <input type="text" id='myName' name='myName' onChange={updateInfo}/><br />
            <label htmlFor="age">나이 : </label>
            <input type="text" id='age' name='age' onChange={updateInfo}/><br />
            <label htmlFor="gender">성별 : </label>
            <input type="text" id='gender' name='gender' onChange={updateInfo}/><br />

            <button type='button' onClick={outPutPrint}>출력</button>
        </div>
    );
}

export default FuncExam;