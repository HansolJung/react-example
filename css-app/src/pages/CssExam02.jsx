import React from 'react';

/**
 * css 적용 방법 
 * 2. css-in-js)
 *  자바 스크립트 객체를 이용해서 css를 적용하는 방식
 *  렌더링 문제나 속도 관련하여 이슈가 있어서 잘 사용하지는 않는다
 */

function CssExam02(props) {
    
    const mainCss = {
        backgroundColor : '#eeaaee',
        width : '700px',
        height : '600px',
        border : '1px solid black'
    }

    return (
        <>
            <div style={mainCss}>

            </div>
        </>
    );
}

export default CssExam02;