import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function UseEffectExam01(props) {

    const [count, setCount] = useState(0);

    const upCount = () => {
        setCount(count + 1);   // count++ 는 쓸 수 없다. 자기 자신을 증가시킬 수 없기 때문.
    }

    // 화면이 갱신(Re-rendering) 될 때 마다 실행 
    useEffect(()=>{
        console.log('실행 1');
    });

    // 의존성에 아무 값도 주지 않고 [ ] 빈 대괄호만 표시하는 경우, 업데이트 할 의존성이 없기 때문에
	// 최초로 컴포넌트가 마운트 된 이후에는 실행되지 않는다.
    useEffect(()=>{
        console.log('실행 2');
    },[]);    

    // count 값에 의존하기. count 값이 증가할 때 마다 실행
    useEffect(()=>{
        console.log('실행 3');
    },[count]);    

    return (
        <div>
            <p>값 : {count}</p>
            <button type='button' onClick={upCount}>증가</button>
        </div>
    );
}

export default UseEffectExam01;