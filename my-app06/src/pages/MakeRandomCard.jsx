import React from 'react';
import '../assets/css/makeRandomCard.css';
import { useRef } from 'react';
import { useReducer } from 'react';
import Card from '../components/Card';

function MakeRandomCard(props) {

    const cardReducer = (state, action)=>{
        switch(action.type) {
            case 'create':
                return action.payload;
            case 'delete': 
                return action.deleteJob(state);  
            case 'init': // 카드 리스트 전부 삭제. 즉, 빈 배열로 리턴
                return [];
        }

        // default: return state 대신 throw 사용.
        // create, delete, init 이 아닌 type 이 넘어왔다는 건 오타라고 봐야 하기 때문.
        throw new Error('잘못된 액션 타입이 reducer 에 전달됐습니다.');
    }

    const [cardList, dispatch] = useReducer(cardReducer, []);
    
    function makeCards() {
        const cards = new Set();  // 숫자 중복 없이 만들기 위해 set 사용

        while (cards.size < 5) {
            // 1 ~ 20 사이의 숫자 랜덤하게 뽑기
            const number = Math.floor(Math.random() * 20) + 1;
            cards.add(number);
        }

        const myCard = Array.from(cards);   // set 을 배열로 바꾸기
        myCard.sort((a,b)=>a-b);  // 오름차순 정렬하기

        return myCard;
    }

    function deleteCards(state) {
        
        const checkedCards = document.querySelectorAll('input[type="checkbox"]:checked'); // 체크된 체크 박스 전부 얻어오기
        if (checkedCards.length === 0) {  // 체크된 체크 박스가 없다면 그냥 리턴
            return state;
        } else {
            const values = Array.from(checkedCards).map(obj => Number(obj.value)); // 체크 박스의 value 만 뽑아서 배열로 만들기 (value 에는 카드의 index 값이 들어있음)
            const newCardList = state.filter((obj, index)=> !values.includes(index)); // values 에 본인의 index 가 들어있지 않은 카드들만 필터링. 즉, 체크하지 않은 카드들만 얻어옴.
            
            checkedCards.forEach((obj)=>{  // 체크됐었던 체크 박스 해제
                obj.checked = false;
            });

            return newCardList;
        }
    }

    const updateCard = (action)=>{
        // payload 에 함수를 넣을 때 소괄호까지 넣는 이유는 payload 에는 함수의 실행 결과(데이터)가 전달되어야 하기 때문이다. 
        // 그렇기 때문에 현 상황에서 payload: makeCards 로 적으면 에러가 발생한다. 
        // payload: makeCards 라고 적기 위해서는 reducer 함수에서 action.payload 가 아니라 action.payload() 식으로 함수를 실행하도록 해야한다.

        // deleteCards 의 경우는 reducer 함수에서 action.deleteJob(state) 식으로 매개변수를 전달해 함수를 실행하기 때문에 이곳에선 함수 이름만 전달해야 한다.
        dispatch({type: action, payload: makeCards(), deleteJob: deleteCards});
    }
    
    return (
        <>
            <main className='container'>
                <section className='contents'>
                    <section className='canvas'>
                        {
                            cardList?.map((obj, index)=>(
                                <div key={`key_${index}`}>
                                    <input type="checkbox" name="cardChk" value={index} />
                                    <Card number={obj}/>
                                </div>
                            ))
                        }
                    </section>
                    <section className='btn-box'>
                        <button type='button' className='btn' onClick={()=>updateCard('create')}>카드 생성</button>
                        <button type='button' className='btn' onClick={()=>updateCard('delete')}>카드 삭제</button>
                        <button type='button' className='btn' onClick={()=>updateCard('init')}>전부 삭제</button>
                    </section>
                </section>
            </main>
        </>
    );
}

export default MakeRandomCard;