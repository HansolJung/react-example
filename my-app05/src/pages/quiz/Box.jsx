import React from 'react';
import {styled} from 'styled-components';

const DivBox = styled.div`
    width: ${(props)=> props.$boxWidth || '100px'};;
    height: ${(props)=> props.$boxHeight || '100px'};;
    background-color: ${(props)=> props.$bgcolor || 'white'};
    border-radius: 5px;
`;


function Box(props) {
    return (
        <div>
            <DivBox $bgcolor={props.boxColor}
                $boxWidth={props.boxWidth}
                $boxHeight={props.boxHeight} />
        </div>
    );
}

export default Box;