import React, { useState } from 'react';

function QuizByTeacher(props) {

    const [inputText, setInputText] = useState('');
    const [wordList, setWordList] = useState([]);

    const getNewWords = ()=>{
        setWordList((prev)=> ([...prev, inputText]));

    }

    return (
        <div>
            <div>
                <label htmlFor="inputText">입력 값 : </label>
                <input type="text" id='inputText' onChange={(e)=>setInputText(e.target.value)}/>
                <button type='button' onClick={getNewWords}>입력</button>
            </div>
            <div>
                <ul>
                    {
                        wordList?.map((text, index)=>(
                            <li key={index}>{text}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default QuizByTeacher;