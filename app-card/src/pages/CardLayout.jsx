import React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import { useCallback } from 'react';
import '../assets/css/cardLayout.css';

function CardLayout(props) {

    // 화면에 출력할 카드 5장 리스트
    const [cardList, setCardList] = useState([]);
    // NPC가 가져갈 카드 2장 리스트
    const [comList, setComList] = useState([]);
    // 결과를 넣을 변수
    const [winner, setWinner] = useState('');
    // npc 카드 합
    const [comResult, setComResult] = useState(0);
    // 플레이어 카드 합
    const [myResult, setMyResult] = useState(0);
    // 시작 변수
    const [startGame, setStartGame] = useState(false);
    // 선택된 카드 저장
    const [selectedCards, setSelectedCards] = useState([]);
    // 선택 불가
    const [selectedDisabled, setSelectedDisabled] = useState(false);
    // 버튼 사용가능 유무
    const [btnDisabled, setBtnDisabled] = useState(false);
    
    // 카드 생성
    const makeCard = (count)=>{   
        const cardSet = Array.from({length: 20}, (_, index)=> index + 1);  // _ 를 사용하면 첫번째 인자를 사용하지 않는다는 뜻
        
        // Fisher-Yate 알고리즘
        for (let i = cardSet.length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardSet[i], cardSet[j]] = [cardSet[j], cardSet[i]];  // 구조분해할당을 이용한 자리 스위칭
        }

        return cardSet.slice(0, count);  // 첫번째 인덱스부터 count 인덱스 전까지 잘라서 돌려주기
    }

    // 버튼 이벤트 대응 함수
    const gameSelection = (action)=>{
        if (action ==='start') {  // 시작 버튼을 누른 경우
            settingGame();
        } else if (action === 'compare') {  // 선택 버튼을 누른 경우
            makeResult();
        } else { // 초기화 버튼을 누른 경우
            initGame();
        }
    }

    // 세팅 함수
    const settingGame = useCallback(()=>{
        setComList(makeCard(2));  // pc는 2장을 받는다
        setCardList(makeCard(5)); // 플레이어는 5장을 받는다
        setSelectedCards([]);  // 선택 초기화

        setBtnDisabled(true);
        setSelectedDisabled(false);
        setStartGame(true);
        setComResult(0);
        setMyResult(0);
        setWinner('');
    }, []);

    // 초기화 함수
    const initGame = useCallback(()=>{
        setComList([]);  
        setCardList([]); 
        setSelectedCards([]); 
        
        setBtnDisabled(false);
        setSelectedDisabled(false);
        setStartGame(false);
        setComResult(0);
        setMyResult(0);
        setWinner('');
    }, []);

    const updateCardSelect = (e)=>{
        const {value, checked} = e.target;

        if (checked) {
            if (!selectedDisabled || selectedCards.length < 2) {
                setSelectedCards((prev)=>[...prev, Number(value)]);
            }
        } else {
            setSelectedCards((prev)=> prev.filter(num => num !== Number(value)));
        }
    }

    // 결과 보기 함수
    const makeResult = ()=>{
        const comScore = comList.reduce((sum, num)=> sum + num);
        const myScore = selectedCards.reduce((sum, num)=> sum + num);

        setComResult(comScore);
        setMyResult(myScore);

        if (comScore > myScore) {
            setWinner('PC');
        } else if (comScore < myScore) {
            setWinner('Player');
        } else {
            setWinner('무승부');
        }

        // 종료되었으니 시작을 다시 누를 수 있도록 함
        setBtnDisabled(false);
        setSelectedDisabled(true);
    }

    return (
        <div>
            <main className='container'>
                <section className='contents'>
                    {
                        startGame || <div className='tx-start'>게임을 시작하십시오.</div>
                    }
                    {
                        startGame && cardList?.map((number, index)=>(
                            <Card key={index} 
                                number={number}
                                isChecked={selectedCards.includes(number)}
                                isDisabled={selectedDisabled || 
                                    (selectedCards.length >= 2 && !selectedCards.includes(number))} 
                                selectedCard={updateCardSelect}/>
                        ))
                    }
                </section>
                <section className='btn-box'>
                        <button type='button' className='btn' 
                            onClick={(e)=>gameSelection('start')}
                            disabled={btnDisabled}>시작</button>
                        <button type='button' className='btn' 
                            onClick={(e)=>gameSelection('compare')}
                            disabled={!btnDisabled}>선택</button>
                        <button type='button' className='btn' 
                            onClick={(e)=>gameSelection('init')}>초기화</button>
                </section>
                <section className='score-box'>
                    <p>결과. 플레이어 : {myResult}, PC : {comResult}</p>
                    <p>승자 : {winner}</p>
                </section>
            </main>
        </div>
    );
}

export default CardLayout;