import React from 'react';
import './test.css'

function Exam01(props) {

    const name = 'react';
    const style = {
        backgroundColor : 'black',
        color: 'aqua',
        fontSize: 24,   // 기본 단위 픽셀
        padding: '1rem'  // 다른 단위 사용 시 문자열로 설정
    }

    return (
        <>
            <div style={style}>{name}</div>
            <div className='gray-box'></div>
        </>
    );
}

export default Exam01;