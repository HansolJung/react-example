import React from 'react';
import {styled} from 'styled-components';


const DivBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props)=> props.$bgcolor || 'white'};
    border-radius: 5px;
`;

function Box(props) {

    return (
        <div>
            <DivBox $bgcolor={props.bgcolor} />
        </div>
    );
}

export default Box;