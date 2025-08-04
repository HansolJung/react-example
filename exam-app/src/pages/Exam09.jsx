import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function Exam09(props) {

    const [count, setCount] = useState(0);
    const renderCount = useRef(0); // 컴포넌트가 몇 번 렌더링되었는지 추적

    renderCount.current++; // 렌더링될 때마다 증가 (렌더링에 영향 없음)

    return (
        <div>
        <p>Count: {count}</p>
        <p>Render count: {renderCount.current}</p> {/* 리렌더링되지 않음 */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Exam09;