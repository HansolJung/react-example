import React, { useRef, useState } from 'react';

function Exam13(props) {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    console.log('재렌더링');

    return (
        <div style={{ margin: '2em' }}>
            <div>{count}</div>
            <button onClick={()=>setCount(count + 1)}>Count 증가</button>
            <div>{countRef.current}</div>  
            <button onClick={()=>countRef.current++}>Count2 증가</button>
            {/* Count2 증가 버튼을 클릭하면 실제로는 값이 증가하지만 브라우저에선 멈춰있는 것 처럼 보인다.
                Count 증가 버튼을 다시 클릭해야만 Count2 값이 브라우저에 갱신되면서 나타난다.
                즉, ref 변수는 컴포넌트 리렌더링과 상관없이 독자적으로 존재한다는 것을 알 수 있다.
            */}
        </div>
    );
}

export default Exam13;