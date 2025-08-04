import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';

function UseReducerExam01(props) {

    // reducer 로부터 매개변수로 상태값과 액션을 받는다.
    const accountReducer = (state, action)=>{
        console.log('===== 계좌 처리 프로세스 =====');

        // return 을 하는 것 자체가 balance 의 상태 변경
        // 즉, setBalance 를 호출한 것과 동일한 효과를 얻는다
        switch(action.type) {
            case 'deposit': // 입금일 경우
                return state + Number(action.payload);
            case 'withdraw': // 출금일 경우
                return state - Number(action.payload);
            default:
                return state;
        }
    }

    // const [관리하고 싶은 상태, dispatch] =  useReducer(처리할 함수, 초기값);
    // dispatch 는 임의로 바꾸면 안된다. 고정되어 있는 명칭임.
    const [balance, dispatch] = useReducer(accountReducer, 10000);
    const [money, setMoney] = useState(10000);

    const manageAccount = (action)=>{
        
        // type, payload 의 명칭 자체는 바꿀수 있음.
        // 나중에 action 에서 꺼내쓸 때 명칭만 일치시키면 된다.
        dispatch({ type: action, payload: money });
    }

    return (
        <div>
            <main>
                <header>
                    <h2>계좌 입출금</h2>
                </header>
                <section>
                    <p>잔액 : {balance}</p>
                </section>
                <section>
                    <label htmlFor="money">금액 : </label>
                    <input type="number" id='money' value={money} onChange={(e)=>setMoney(e.target.value)}/>
                </section>
                <div>
                    <button type='button' onClick={()=>manageAccount('deposit')}>입금</button>
                    <button type='button' onClick={()=>manageAccount('withdraw')}>출금</button>
                </div>
            </main>
        </div>
    );
}

export default UseReducerExam01;