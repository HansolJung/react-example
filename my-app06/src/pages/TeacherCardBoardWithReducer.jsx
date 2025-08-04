import React, { useReducer } from 'react';
import '../assets/css/teacherCard.css';

import TeacherCard from '../components/TeacherCard';

function TeacherCardBoardWithReducer(props) {

    const actionReducer = (state, action)=>{
        switch(action.type) {
            case 'create':
                return Array.from({length: 5}, ()=>Math.floor(Math.random() * 20) + 1);  // 몇 개 짜리 배열을 만들지 정하고, 콜백함수로 값을 하나씩 리턴받고 배열에 넣는다.
            case 'delete':
                return [];
        }
    }

    const [cardList, dispatch] = useReducer(actionReducer, []);

    const updateCard = (action)=>{
        dispatch({type: action});
    }

    return (
        <div>
            <main className='container'>
                <section className='contents'>
                    {
                        cardList?.map((obj,index)=>(
                            <TeacherCard key={`key_${index}`} number={obj}/>
                        ))
                    }
                </section>
                <section className='btn-box'>
                    <button type='button' className='btn' onClick={()=>updateCard('create')}>생성</button>
                    <button type='button' className='btn' onClick={()=>updateCard('delete')}>삭제</button>
                </section>
            </main>
        </div>
    );
}

export default TeacherCardBoardWithReducer;