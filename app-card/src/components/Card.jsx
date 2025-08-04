import React from 'react';
import {styled} from 'styled-components';

const MyCard = styled.div`
    width: 120px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 7px;
    background-color: ${(props)=>props.$isDisabled ? 'lightblue' : '#efaaef'};
    border-color: ${(props)=>props.$isDisabled ? '#e4e4e4' : 'black'};
    opacity: ${(props)=>props.$isDisabled ? 0.5 : 1};
`;

function Card({number, isDisabled, isChecked, selectedCard}) {
    return (
        <>
            <MyCard $isDisabled={isDisabled}>
                <input type="checkbox" 
                    onChange={selectedCard} 
                    value={number} 
                    checked={isChecked}
                    disabled={isDisabled}/>
                <p style={{color: 'white'}}>{number}</p>
            </MyCard>
        </>
    );
}

export default Card;