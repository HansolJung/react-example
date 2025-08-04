import React, { useRef, useState } from 'react';

function Exam11(props) {
    const inputEl = useRef(null);
    const pEl = useRef(null);
    const [name, setName] = useState("");

    const changeColor = ()=>{
        pEl.current.style.backgroundColor = randColor();
    }

      // 랜덤으로 색 표현
    function randColor() {
        const colors = [];
        let count = 0;

        while(count < 3) {
            const randColor = Math.floor(Math.random() * 256);  // 0 ~ 255 까지 나와야함. RGB 값은 각 색상 마다 0~255 까지 있음.

            // 10 진수를 16 진수로 바꾸기
            let hexColor = randColor.toString(16);   // string 으로 바꿀 때 진수값을 넣으면 바뀐다.
            
            // 비교 == 는 값만 비교. 비교 === 는 값과 타입 둘다 비교.
            if (hexColor.length === 1) {  // 0 ~ 9, A, B C D E F 라면..
                hexColor = '0' + hexColor;      // 만약 16진수 값이 한 자리라면 앞에 0을 붙여준다. (예: a가 나왔다면 0a로 바꾸기) 
            }

            colors.push(hexColor);  // 배열에 넣는다.
            count++;
        }

        return '#' + colors.join('')   // 돌려줄때 앞에 '#' 을 붙이고 배열을 이어 붙인다. 
                                       //(예: 배열이 '0A', '0B', '0C' 라면 #0A0B0C 로 리턴) 
    }

    return (
        <div style={{ margin: "2em" }}>
            <input ref={inputEl} type="text" onChange={(e)=>setName(e.target.value)} />
            <p ref={pEl}>이름: {name}</p>
            <button type='button' onClick={()=>inputEl.current.focus()}>포커스 맞추기</button>
            <button type='button' onClick={changeColor}>색상 변경</button>
        </div>
    );
}

export default Exam11;