import { useReducer, useState } from "react";




// reducer 는 보통 리렌더링 되지 않게 하려고 컴포넌트 함수 위에 만든다.
const bankReducer = (state, action) => {
    switch(action.type) {
        case 'deposit':
            return state + action.payload;
        case 'withdraw':
            return state - action.payload;
        default:
            return state;
    }
}

function UseReducerExam(props) {

    // CRUD 가 빈번하게 일어나는 상태에 한해서 useReducer 를 사용한다.
    // 이 예제에선 balance (잔액) 의 상태가 빈번하게 바뀌기 때문에 balance 에 useReducer 를 사용한다.
    const [balance, dispatch] = useReducer(bankReducer, 10000);
    const [money, setMoney] = useState(0);

    const updateBalance = (action)=>{
        if (action === 'withdraw' && (balance < money)) {
            alert('잔액보다 큰 돈은 출금이 어렵습니다.');
            return false;
        }
        dispatch({type: action,  payload: money});
    }

    return (
        <div>
            <p>잔액 : {balance}</p>
            <div>
                <label htmlFor="money">금액 : </label>
                <input type="number" id="money" value={money} onChange={(e)=>setMoney(Number(e.target.value))} />
            </div>
            <div>
                <button type="button" onClick={()=>updateBalance('deposit')}>입금</button>
                <button type="button" onClick={()=>updateBalance('withdraw')}>출금</button>
            </div>
        </div>
    );
}

export default UseReducerExam;