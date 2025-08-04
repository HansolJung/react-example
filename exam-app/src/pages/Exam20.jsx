import React, { useMemo, useState } from 'react';

function Exam20(props) {

    const [inputValue, setInputValue] = useState(0);


    return (
        <>
            <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
            <MyComponent inputValue={Number(inputValue)} />
        </>
    );
}


function MyComponent({ inputValue }) {

    const [count, setCount] = useState(0);

    // inputValue가 변경될 때만 expensiveCalculation 함수를 실행하고 결과를 memoizedValue에 저장합니다.
    const memoizedValue = useMemo(() => {
        console.log('expensiveCalculation 실행');
        return expensiveCalculation(inputValue);
    }, [inputValue]);

    const handleIncrement = ()=>{
        setCount(count + 1);
    }

    // 비용이 많이 드는 계산을 하는 함수 (예시)
    function expensiveCalculation(input) {
        // 여기서는 간단한 계산을 예시로 사용했지만, 실제로는 더 복잡한 연산이 올 수 있습니다.
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += input;
        }
        return result;
    }

    return (
        <div>
        <p>입력 값: {inputValue}</p>
        <p>메모이제이션된 값: {memoizedValue}</p>
        <button onClick={handleIncrement}>카운트 증가</button>
        <p>카운트: {count}</p>
        </div>
    );
}

export default Exam20;