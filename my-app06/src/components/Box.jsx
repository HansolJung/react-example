import React from 'react';
import {styled} from 'styled-components';

const Square = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #eeeeee;
`;

function Box({bgColor}) {
    return (
        <>
            <Square $bgColor={bgColor}/>
        </>
    );
}

export default Box;