import React from 'react';
import styled from 'styled-components';

const LottoBall = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;  // 원으로 만들기
    border: 1px solid black;
    color : ${(props)=> props.$match ? 'white' : 'black'};
    background-color: ${(props)=> props.$match ? '#e67154' : 'white'};
`;

function Ball({number, match = false}) {
    return (
        <div>
            <LottoBall $match={match}>{number}</LottoBall>
        </div>
    );
}

export default Ball;