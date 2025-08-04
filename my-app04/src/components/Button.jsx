import React from 'react';
import {styled} from 'styled-components';

/**
 * children 은 prop 이 가지는 default 변수
 * 
 * sylted component 선언은 함수 밖에서 한다
 * 이유는 함수가 호출되거나 갱신될 때마다 새로 그려지는데
 * 안에 있으면 같이 다시 그려지기 때문
 * 이는 styled component 를 사용하는 모두에게 영향을 줄 수 있다
 */

const CommonButton = styled.button`
        width: 90px;
        height: 34px;
        border: 0.5px solid #eeeeee;
        border-radius: 7px;
        background-color: white;
        color: white;
    `;

const CustomButton = styled(CommonButton)`
    background-color: ${(props) => props.$bgcolor || 'white'};   // 넘어온 props 매개변수에 bgColor 가 존재하지 않으면 white 를 쓰겠다는 뜻
    color: ${(props) => props.$bgcolor ? 'white' : 'black'};
`;
function Button({bgcolor, clickEvt, children}) {

    
    return (
        <>
            <CustomButton $bgcolor={bgcolor} onClick={clickEvt}>{children}</CustomButton>
        </>
    );
}

export default Button;