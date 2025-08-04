import React, { useCallback, useState } from 'react';

function Exam19() {

    const [count, setCount] = useState(0);

    // useCallback을 사용하여 increment 함수를 메모이제이션합니다.
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []); // 빈 배열은 이 함수가 처음 마운트될 때만 생성됨을 의미합니다.

    return (
        <div>
            <p>Count: {count}</p>
            {/* ChildComponent에 increment 함수를 props로 전달합니다. */}
            <ChildComponent onClick={increment}/>
        </div>
    );
}

function ChildComponent({ onClick }) {
    console.log('ChildComponent 렌더링'); // 렌더링 확인용 로그
    return (
        <>
            <button onClick={onClick}>증가</button>
        </>
    );
}

export default Exam19;