import React, { useState } from 'react';

function UseStateExam(props) {

    

    // react hook 에서 배열 구조분해 할당으로 선언 하는 이유: 배열은 순서만 맞으면 되기 때문.
    // useState 가 반환하는 함수 기능을 모르기 때문에 배열 순서에 맞게 배치를 하여 받도록 한다.
    const [num01, setNum01] = useState(0);
    const [num02, setNum02] = useState(0);
    const [result, setResult] = useState(0);

    const add = ()=>{
        setResult(Number(num01) + Number(num02));
    }

    const minus = ()=>{
        setResult(Number(num01) - Number(num02));
    }

    return (
        <>
            <p>결과: {result}</p>
            <div>
                {/* 리액트에서 onChange. 순수 스크립트에서는 oninput 기능.
                    리액트에서는 id 를 잘 사용하지 않기 때문에 name 을 더 많이 사용한다.
                    input 창에 초기값을 설정하고 싶을 때 value 를 사용한다.
                */}
                <input type="text" name='num01' value={num01} onChange={(e)=>setNum01(e.target.value)} />
                <input type="text" name='num02' value={num02} onChange={(e)=>setNum02(e.target.value)} />
   
            </div>

            <button type='button' onClick={add}>더하기</button>
            <button type='button' onClick={minus}>빼기</button>
        </>
    );
}

export default UseStateExam;