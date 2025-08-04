import React from 'react';
import { useState } from 'react';
import {styled} from 'styled-components';


const Box = styled.div`
    width: ${(props) => props.$width ? `${props.$width}px` : '0px'};
    height: ${(props) => props.$height ? `${props.$height}px` : '0px'};
    background-color: ${(props) => props.$color || 'white'};
`;

function MakeBoxExam(props) {

    const [data, setData] = useState({width: '', height: '', color: ''});
    const [boxData, setBoxData] = useState(null);

    const handleInput = (e) => {
        const {id, value} = e.target;

        if (boxData != null) {
            setBoxData(null);
        }

        setData((prev)=>({...prev, [id] : value}))
    }

    const makeBoxEvent = (e) => {
        e.preventDefault();
        if ( !data.width || !data.height || !data.color) {
            alert('값을 정확하게 입력하십시오.');
            return false;
        }
        setBoxData({width: data.width, height: data.height, color: data.color});
    }

    return (
        <div>
            <div>
                <label htmlFor="width">너비 : </label>
                <input type="text" id='width' onChange={handleInput} /><br />
                <label htmlFor="height">높이 : </label>
                <input type="text" id='height' onChange={handleInput} /><br />
                <label htmlFor="color">색상 : </label>
                <input type="text" id='color' onChange={handleInput} 
                    onKeyDown={(e)=>{
                        if(e.key === 'Enter') {
                            makeBoxEvent(e);
                        }
                    }}/>
            </div>
            <div>
                <button type='button' onClick={makeBoxEvent}>생성</button>
            </div>
            <div>
                결과 : { boxData && 
                <Box $width={boxData.width} $height={boxData.height} $color={boxData.color}/>
                } 
            </div>
        </div>
    );
}

export default MakeBoxExam;