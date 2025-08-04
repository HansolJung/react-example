import React from 'react';

function Exam01(props) {
    const score = Math.floor(Math.random() * 51) + 50;  // 50 ~ 100 까지 랜덤 숫자 뽑기 

    return (
        <>
            {
                // html 영역에서 중괄호 영역은 스크립트 코드 영역
                // jsx 문법은 별도의 주석이 없어서 주석을 적을 땐 스크립트 영역에서 처리
                // jsx 문법 안에선 if 문 사용이 불가능하다. 그래서 아래와 같이 삼항연산식을 사용해야한다.
                // jsx 문법 안에서 변수를 사용하고 싶으면 {} 만 쓰면 된다. $ 또는 `` 은 필요 없다.

                score >= 70 ? <div>합격, {score}</div> : <div>불합격, {score}</div>

            }
        </>
    );
}

export default Exam01;