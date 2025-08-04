import React from 'react';
import ButtonComp from './ButtonComp';
import useCounterStore from '../store/useCounterStore';


function CounterExam(props) {

    // 필요한 내용만 가져오기
    // 리렌더링 방지
    const count = useCounterStore((s)=>s.count);

    return (
        <div>
            <div>
                {count}
            </div>
            <ButtonComp/>
        </div>
    );
}

export default CounterExam;