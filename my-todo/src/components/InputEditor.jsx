import React from 'react';
import '../assets/css/inputEditor.css';
import { useRef } from 'react';

function InputEditor({inputText, setInputText, createTodo}) {

    const inputRef = useRef(null);

    const keyEnter = (e)=>{
        if (e.keyCode === 13) {
            createNewTodo();
        }
    }

    const createNewTodo = ()=>{
        if (inputText.trim().length === 0) {
            alert('할 일을 입력하십시오.');
            inputRef.current.focus();
            return false;
        }
        createTodo();
    }

    return (
        <>
            <section className='editor'>
                <div className='in-txt'>
                    <input type="text" placeholder='할 일 입력'
                        className='form-control'
                        onChange={(e)=>setInputText(e.target.value)} 
                        onKeyDown={keyEnter}
                        ref={inputRef}
                        name='inputText'
                        value={inputText}/>
                </div>
                <div className='input-btn'>
                    <button type='button' 
                    className='btn btn-success'
                    onClick={createNewTodo}>
                        등록
                    </button>
                </div>
            </section>
        </>
    );
}

export default InputEditor;