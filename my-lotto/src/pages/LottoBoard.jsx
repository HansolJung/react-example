import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/lottoBoard.css';
import CompLotto from '../components/CompLotto';
import UserLottoTable from '../components/UserLottoTable';

function LottoBoard(props) {

    const [compLotto, setCompLotto] = useState([]);
    const [userLotto, setUserLotto] = useState([]);

    const getNumbers = useCallback((isBonus)=>{
        const balls = [];
        let count = 0;
        const loopCount = isBonus ? 7 : 6;
        let bonusNum = 0;

        while (count < loopCount) {
            const rand = Math.floor(Math.random() * 45) + 1;

            // 중복 처리
            if (balls.length > 0 && balls.some(ball => ball.number === rand)) {
                continue;
            }

            if (count === 6 && isBonus) { // 보너스 번호가 있는 경우
                bonusNum = rand;
                break;
            } else { // 보너스 번호가 없는 경우
                const newBall = {number: rand, match: false};
                balls.push(newBall);
                count++;
            }
        }
        
        // 로또 1 게임을 객체로 반환. {로또 배열, 보너스 번호, 등수}
        return {lotto: balls, bonusNum: bonusNum, rank: ''};

    }, []);

    // 시스템 로또 생성 이벤트
    const createCompLotto = ()=>{
        setCompLotto(getNumbers(true));
    }

    // 사용자 로또 생성 이벤트
    const createUserLotto = ()=>{
        // Array.from 을 이용해서 길이가 5인 배열을 만드는데, 각 행에 로또 1 게임씩 저장
        const userLotto = Array.from({length: 5}, ()=>getNumbers(false));
        setUserLotto(userLotto);
    }

    // 등수 비교 이벤트
    const compareLotto = ()=>{

        const updated = [];
        let count = 0;
        let bonus = 0;
        // 사용자 로또를 loop
        for (let users of userLotto) {  // 게임 5개 루프 시작
            count = 0;

            // 게임당 선택된 로또 번호 비교
            for (let myLotto of users.lotto) {
                // 로또 번호가 system 번호와 매치하는지 찾는다.
                if (compLotto.lotto.some(x => x.number === myLotto.number)) {
                    // 매치되면 match 값을 true 로 준다.
                    myLotto.match = true;
                    // 카운트 증가
                    count++;
                }
            }

            // 5개 맞았을 경우 보너스 번호가 필요. 2등과 3등을 비교할 때 사용함.
            if (count === 5) {
                // find 에서 못찾으면 undefined 가 뜨기 때문에 못찾았을 경우 -1 로 세팅
                bonus = users.lotto.find(x => x.number === compLotto.bonusNum) ?? -1;
            }
            // 등수
            let rank = '';
            if (count === 6) {
                rank = '1등';
            } else if (count === 5 && bonus > 0) {
                rank = '2등';
            } else if (count === 5) {
                rank = '3등';
            } else if (count === 4) {
                rank = '4등';
            } else if (count === 3) {
                rank = '5등';
            } else {
                rank = '꼴등';
            }

            users.bonusNum = bonus;
            users.rank = rank;
            // 갱신된 로또 게임을 새로운 배열에 저장
            //updated.push({lotto: users.lotto, bonusNum: bonus, rank: rank});
        }
        
        // 사용자 로또 상태 업데이트
        setUserLotto([...userLotto]);
    }

    return (
        <>
            <main className='container'>
                <header className='header'>
                    <h2>로또 시스템</h2>
                </header>
                <section className='contents'>
                    <section className='evt-button'>
                        <button type='button' 
                            className='btn btn-primary me-2'
                            onClick={createCompLotto}>로또 생성</button>
                        <button type='button' 
                            className='btn btn-success me-2'
                            disabled={compLotto.length === 0}
                            onClick={createUserLotto}>사용자 생성</button>
                        <button type='button' 
                            className='btn btn-warning me-2'
                            disabled={userLotto.length === 0}
                            onClick={compareLotto}>로또 비교</button>
                    </section>
                    <section>
                        <CompLotto compLotto={compLotto}/>
                    </section>
                    <section>
                        <UserLottoTable userLotto={userLotto}/>
                    </section>
                </section>
            </main>
        </>
    );
}

export default LottoBoard;