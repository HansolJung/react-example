import React from 'react';

function Exam02(props) {
    const temp = Math.floor(Math.random() * 26) + 20;  // 20 ~ 45 까지 랜덤 숫자 뽑기 

    return (
        <>
            <div>오늘 날씨는 매우 더움</div>
            {
                temp >= 35 && <div>폭염 주의!!!</div>   // 앞 부분이 참이라면 뒤를 실행하라는 뜻. 35도 이상일때만 폭염주의 발령.
            }
        </>
    );
}

export default Exam02;