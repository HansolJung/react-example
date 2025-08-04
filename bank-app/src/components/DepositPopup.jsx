import React from 'react';
import '../assets/css/depositPopup.css';
import { useRef } from 'react';

function DepositPopup(props) {

    const depositText = useRef(null);

    const checkDeposit = ()=>{
        
        const money = depositText.current.value;
         
        if (money.length === 0) {
            alert('입금할 금액을 입력하세요.');
            return false;
        }

        if (money > 1000000) {  // 100 만원 제한
            alert('입금할 금액은 100 만원 이하여야 합니다.');
            return false;
        }

        const data = {
            deposit : Number(money)
        }
                
        sendSelectMessage({type: 'selection', data: data});

        self.close(); // 자기 자신 닫기. 
    } 

    function sendSelectMessage(msg) {
        window.opener.postMessage(msg, "*");  // 부모창으로 메세지 보내기
    }

    return (
        <>
           <div className="pop-container">
                <h1>해당 계좌로 입금할 금액을 입력하세요</h1>
                <div className="search-area">
                    <input type="text" className="form-control" placeholder="입금 금액 입력" id="depositText" 
                        ref={depositText}/>
                    <button id="btnDeposit" className="btn btn-primary" onClick={checkDeposit}>확인</button>
                </div>
            </div>
        </>
    );
}

export default DepositPopup;