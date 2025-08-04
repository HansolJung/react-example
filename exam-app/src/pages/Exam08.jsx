import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function Exam08(props) {

    const [count, setCount] = useState(0);
    const prevCountRef = useRef();  // 이전 상태를 저장할 ref

    useEffect(()=>{
        prevCountRef.current = count; // 매 렌더링 시 현재 count를 저장
    }, [count]); // count가 변경될 때마다 실행

    return (
        <div>
            <p>Current count: {count}</p>
            <p>Previous count: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Exam08;