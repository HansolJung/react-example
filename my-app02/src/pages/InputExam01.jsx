import React from 'react';

function InputExam01(props) {

    // 아래 방식은 전통적인 자바스크립트 방식. 
    // 하지만 리액트에선 이렇게 코딩하지 않는다. (실행은 되지만 리액트 작동원리와 어긋나는 방식임.)

    const inputEvent = () => {
        const text = document.querySelector('#inputText').value;
        document.querySelector('#result').textContent = text;
    }

    return (
        <>
            <div>
                <input type="text" id="inputText"/>
                <button type='button' onClick={inputEvent}>입력</button>
            </div>
            <div>결과 : <span id="result"></span></div>
        </>
    );
}

export default InputExam01;