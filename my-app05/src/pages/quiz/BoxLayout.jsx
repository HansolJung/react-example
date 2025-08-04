import React from 'react';
import { useState } from 'react';
import BoxList from './BoxList';

function BoxLayout(props) {

    const [boxList, setBoxList] = useState([]);  // 빈 배열로 초기화
    const [boxData, setBoxData] = useState( {boxWidth: '100px', boxHeight: '100px', boxColor: 'white'} );   // boxData 객체의 기본값 설정

    const addBox = () => {
        setBoxList((prev) => [...prev, boxData]);   // 기존 boxList (prev) 에 새로 만든 box 추가. 구조분해할당.
    }

    const inputChange = (e) => {
        const {name, value} = e.target;  

        setBoxData((prev)=>({...prev, [name]: value}));
    }

    return (
        <div>
            <label htmlFor="boxWidth">width: </label>
            <input type="text" name='boxWidth'  onChange={inputChange}/>
            <label htmlFor="boxHeight">height: </label>
            <input type="text" name='boxHeight' onChange={inputChange}/>
            <label htmlFor="boxColor">color: </label>
            <input type="text" name='boxColor' onChange={inputChange}/>
            <button type='button' onClick={addBox}>생성</button>
            <BoxList boxList={boxList}/>
        </div>
    );
}

export default BoxLayout;