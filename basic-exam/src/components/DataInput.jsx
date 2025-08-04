import React, { useState } from 'react';

function DataInput({setDataList}) {

    const [student, setStudent] = useState({});

    const updateStudent = (e)=>{
        const {name, value} = e.target;
        
        setStudent({...student, [name]: value});
    }

    const insertData = ()=>{
        setDataList((prev)=>[...prev, student]);
    }
    
    return (
        <>
            <label htmlFor="myNum">번호 : </label>
            <input type="text" id='myNum' name='id' onChange={updateStudent} /> <br/>
            <label htmlFor="myName">이름 : </label>
            <input type="text" id='myName' name='name' onChange={updateStudent} /> <br/>
            <label htmlFor="age">나이 : </label>
            <input type="text" id='age' name='age' onChange={updateStudent} /> <br/>
            <label htmlFor="gender">성별 : </label>
            <input type="text" id='gender' name='gender' onChange={updateStudent} /> <br/>
            <button type='button' onClick={insertData}>등록</button>
        </>
    );
}

export default DataInput;