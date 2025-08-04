import React from 'react';
import { useState } from 'react';

function StateExam02(props) {
    const[val, setVal] = useState(0);   // val 은 변수 이름, setVal 은 val 변수의 setter, useState 에 들어가는 0 은 초기값
    const[result, setResult] = useState(0);

    const add = () => {
        //setResult(result + Number(val));

        // set 함수는 비동기는 아니지만 로직 절차에 따라서 타이밍이 비동기 같이 보임.
        // 그래서 set 함수 사용 후 값을 바로 사용하는 경우 주의해야함.
        // 가장 편한 방법은 아래와 같이 별도의 변수에 결과를 받아서 set 함수에 넣고  바로 사용하는 것.
        const resultVal = result + Number(val);
        setResult(resultVal);
        console.log(resultVal);
    }

    
    return (
        <>
            <p>값: {result}</p>
            <div>
                <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            </div>
            <div>
                <button type='button' onClick={add}>더하기</button>
            </div>
        </>
    );
}

export default StateExam02;