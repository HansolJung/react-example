import React from 'react';
import '../assets/css/teacherCard.css';
import { useState } from 'react';
import TeacherCard from '../components/TeacherCard';

function TeacherCardBoard(props) {

    const [cardList, setCardList] = useState([]);

    const createCard = ()=>{
        const numbers = [];
        for(let i = 0; i < 5; i++) {
            const val = Math.floor(Math.random() * 20) + 1;
            numbers.push(val);
        }

        setCardList(numbers);
    }

    const deleteCard = ()=>{
        setCardList([]);
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
                    <button type='button' className='btn' onClick={createCard}>생성</button>
                    <button type='button' className='btn' onClick={deleteCard}>삭제</button>
                </section>
            </main>
        </div>
    );
}

export default TeacherCardBoard;