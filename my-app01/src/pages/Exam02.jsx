import React from 'react';

function Exam02(props) {
    const temp = Math.floor(Math.random() * 26) + 20;  // 20 ~ 45 까지 랜덤 숫자 뽑기 
    const style = {
        backgroundColor: 'red',
        fontSize: 12,
        color: 'white',
    }

    return (
        <>
            {
                temp >= 35 ? <div style={style}>폭염주의!!!</div> : <div>덥지만 살만함</div>
            }
        </>
    );
}

export default Exam02;