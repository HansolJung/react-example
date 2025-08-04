import React from 'react';
import '../assets/css/useReducer2.css';
import { useRef } from 'react';
import { useReducer } from 'react';
import Box from '../components/Box';

function UseReducerExam02(props) {

    const idx = useRef(0);
    const boxReducer = (state, action)=>{
        let newBoxList = [];  // case 문 안에는 선언이 불가능하다. 밖에서 선언해야함.
        switch(action.type) {
            case 'create':
                return [...state, {id:(++idx.current), bgColor: action.payload}];
            case 'delete': 
                newBoxList = state.filter(obj=>obj.id !== idx.current);   // 밖에서 선언한 newBoxList 사용
                idx.current--;
                return newBoxList;
            case 'init':
                idx.current = 0;
                return [];
            default:
                return state;
        }
    }

    const [boxList, dispatch] = useReducer(boxReducer, []);
    
    function makeColor() {
        const colors = [];
        colors.push('#');

        for (let i = 0; i < 3; i++) {
            // 0 ~ 255 사이 값을 16 진수로 변경
            let color = Math.floor(Math.random() * 256).toString(16);
            if (color.length === 1) {
                color = '0' + color;
            }
            colors.push(color);
        }

        return colors.join('');
    }

    const updatedBox = (action)=>{
        dispatch({type: action, payload: makeColor()});
    }
    
    return (
        <>
            <main className='container'>
                <section className='contents'>
                    <section className='canvas'>
                        {
                            boxList?.map(obj=>(
                                <Box key={`key_${obj.id}`} bgColor={obj.bgColor}/>
                            ))
                        }
                    </section>
                    <section className='btn-box'>
                        <button type='button' className='btn' onClick={()=>updatedBox('create')}>Box 생성</button>
                        <button type='button' className='btn' onClick={()=>updatedBox('delete')}>Box 삭제</button>
                        <button type='button' className='btn' onClick={()=>updatedBox('init')}>초기화</button>
                    </section>
                </section>
            </main>
        </>
    );
}

export default UseReducerExam02;