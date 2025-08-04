import React from 'react';
import {styled} from 'styled-components';


/**
 * css 적용 방법 
 * 3. styled-components 사용)
 *  css 컴포넌트를 사용하는 방식
 *  npm install --save styled-components 명령어를 입력해서 먼저 설치를 해야한다
 */
function CssExam03(props) {

    const Main = styled.div`
        background-color : #eeaaee;
        width: 300px;
        height: 300px;
        border: solid 1px black;
    `;

    return (
        <>
            <Main>1</Main>
        </>
    );
}

export default CssExam03;