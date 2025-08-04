import React, { useEffect, useRef, useState } from 'react';

function UseRefExam01(props) {

    useEffect(()=>{
        console.log('mount'); // 컴포넌트가 mount 될 때 실행
    });
    
    let count1 = 0;
    const count2 = useRef(0);
    const [text, setText] = useState('');

    // state 가 변하면 화면이 재 갱신됨
    // 그래서 일반 자바스크립트 변수는 초기화 되지만
    // ref 로 선언한 변수는 이전 내용을 저장하고 있어 유지 가능
    const print = ()=>{
        count1++;       // 일반변수 증가
        count2.current++; // ref 변수 증가

        console.log(`일반 변수 count: ${count1}, ref 변수 count: ${count2.current}`);
    }

    return (
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button type='button' onClick={print}>출력</button>
        </div>
    );
}

export default UseRefExam01;