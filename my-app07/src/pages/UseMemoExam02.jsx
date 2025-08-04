import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

function UseMemoExam02(props) {
    const [numList, setNumList] = useState([]);
    const [num, setNum] = useState(0);

    /**
     * useMemo 는 함수가 반환하는 값을 메모리에 저장해두고, 
     * 의존성 배열에 명시된 값들이 변경되기 전에는 다시 함수를 실행하여 계산하지 않고, 기존 값을 사용한다.
     * 이런 것을 메모이제이션이라고 한다.
     * 즉, useMemo 는 함수가 아니라 실행된 결과 값을 기억한다.
     * 보통 useMemo 는 함수가 실행된 결과 값을 반환하는 구조일 때 사용 가능하다.
     * 
     * 비즈니스 로직 중에 계산된 결과를 반환하는 함수에서 그 연산이 복잡하거나,
     * 오래 걸리는 함수에 useMemo 를 처리해서 cpu 사용률이나 메모리 사용에 대한 최적화를 기대 할 수 있다.
     */
    const avg = useMemo(()=>{
        console.log("=== 평균값 구하기 ===");
       
        if (numList.length === 0) {
            return 0;
        }
        
        // reduce 함수는 callback 에서 행한 결과 값이 다시 매개변수로 온다.
        // 즉, sum 에 sum + num 의 결과 값이 다시 오기 때문에 누적 값을 구할 수 있다.
        const sum = numList.reduce((sum, num) => sum + num);

        return (sum / numList.length).toFixed(2); // 소수점 둘째자리 까지
    }, [numList]);

    const insertNum = ()=>{
        setNumList((prev) => [...prev, Number(num)]);
        setNum('');
    }

    return (
        <div>
            <p>평균 값: {avg}</p>
            <div>
                <label htmlFor="num">입력 값: </label>
                <input type="number" id='num' value={num} onChange={(e)=>setNum(e.target.value)}/>
                <button type='button' onClick={insertNum}>등록</button>
            </div>
        </div>
    );
}

export default UseMemoExam02;