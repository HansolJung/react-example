import React, { useRef, useState } from 'react';
import Account from '../js/myAccount';
import Popup from '../js/myPopup';
import '../assets/css/mainLayout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TotalComponent from '../components/TotalComponent';
import CardListComponent from '../components/CardListComponent';
import ButtonComponent from '../components/ButtonComponent';

function BankLayout(props) {

    const inputText = useRef(null);
    const [flag, setFlag] = useState(false);
    const [totalBalance, setTotalBalance] = useState(0);
    const [lastSearchName, setLastSearchName] = useState('');
    const [result, setResult] = useState([]);
    const [accountList, setAccountList] = useState([
        new Account(
            {
                name : '홍길동', // 이름
                accountNum : '001',
                type : '예금',  // 계좌 타입 (예금, 적금)
                balance : 10000,  // 잔액
            }
        ),
        new Account(
            {
                name : '홍길동', 
                accountNum : '002',
                type : '예금',  
                balance : 20000,  
            }
        ),
        new Account(
            {
                name : '홍길동', 
                accountNum : '003',
                type : '적금',  
                balance : 50000, 
            }
        ),
        new Account(
            {
                name : '김철수', 
                accountNum : '004',
                type : '예금',  
                balance : 10000,  
            }
        ),
        new Account(
            {
                name : '김철수',
                accountNum : '005',
                type : '예금',  
                balance : 20000,  
            }
        ),
        new Account(
            {
                name : '김철수',
                accountNum : '006',
                type : '적금',  
                balance : 50000,  
            }
        ),
        new Account(
            {
                name : '금잔디', 
                accountNum : '007',
                type : '예금',  
                balance : 10000,  
            }
        ),
        new Account(
            {
                name : '금잔디',
                accountNum : '008',
                type : '예금',  
                balance : 20000,  
            }
        ),
        new Account(
            {
                name : '금잔디', 
                accountNum : '009',
                type : '적금',
                balance : 50000,
            }
        )
    ]);

    // 계좌 검색시 총합
    const searchAccount = () => {

        if (lastSearchName.length !== 0) {  // 마지막으로 검색한 사람이 있다면...
            result.map((account)=> account.isChecked = false);   // 해당 계좌들 체크 해제해놓기 
        }

        const depositor = inputText.current.value;
        if (depositor.trim().length === 0) {
            alert('검색할 예금주를 입력하세요.');
            return false;
        }
        
        setLastSearchName(depositor.trim())  // 추후 계좌 리스트를 업데이트 하기 위해 마지막으로 검색한 이름을 저장해놓는다.

        const arr = accountList.filter((account) => account.name === depositor.trim());  // 계좌 리스트에서 검색한 예금주와 일치하는 계좌 리스트 추출
    
        if (arr.length === 0) {  // 검색한 이름이 예금주 리스트에 없다면...
            alert('찾으려는 예금주가 없습니다.');
            return false;
        }

        setResult(arr);
        
        let total = 0;

        arr.forEach((account) => {  // 검색 결과 계좌 리스트 순회하기 
            total += account.balance;  // 순회하면서 총액 계산
        });
        
        setTotalBalance(total);
    }

    // 입금 함수
    const deposit=()=> {

        const checkedAccount = result.find((account)=>account.isChecked === true);
 
        if (checkedAccount === undefined) { // 만약 얻어온 계좌가 없다면... return false;
            return false;
        }

        let popup = new Popup(
            {
                onComplete : function(data) {
                    const targetAccount = accountList.find((account)=>account.accountNum === checkedAccount.accountNum);
                    targetAccount.balance += data.deposit;

                    let total = 0;
                    result.forEach((account) => {  // 검색 결과 계좌 리스트 순회하기 
                        total += account.balance;  // 순회하면서 총액 계산
                    });
                    
                    setTotalBalance(total);
                }
            }
        ).open('deposit');
    }

    // 출금 함수
    const withdraw=()=> {
        
        const checkedAccount = result.find((account)=>account.isChecked === true);
        
        if (checkedAccount === undefined) { // 만약 얻어온 계좌가 없다면... return false;
            return false;
        }

        const targetAccount = accountList.find((account)=>account.accountNum === checkedAccount.accountNum);

        if (targetAccount.type === '적금') {  // 적금 계좌일경우 출금 막기
            alert('적금 계좌는 출금이 불가능합니다.');
            return false;
        }

        let popup = new Popup(
            {
                onComplete : function(data) { 
                    
                    if (targetAccount.balance < data.withdraw) {
                        alert('잔액 이상의 금액은 출금할 수 없습니다.');
                    } else {
                        targetAccount.balance -= data.withdraw;
                    }

                    let total = 0;
                    result.forEach((account) => {  // 검색 결과 계좌 리스트 순회하기 
                        total += account.balance;  // 순회하면서 총액 계산
                    });
                    
                    setTotalBalance(total);
                }
            }
        ).open('withdraw');
    }

    // 해지 함수
    const cancel=()=> {
        const checkedAccount = result.find((account)=>account.isChecked === true);

        if (checkedAccount === undefined) { // 만약 얻어온 계좌가 없다면... return false;
            return false;
        }

        if (confirm('정말 해당 계좌를 해지하겠습니까?')) {

            const arr = result.filter((account)=>account.accountNum !== checkedAccount.accountNum); // 해당 계좌를 현재 검색된 계좌 리스트에서 삭제 
            setResult(arr); 
            setAccountList(accountList.filter((account)=>account.accountNum !== checkedAccount.accountNum));  // 해당 계좌를 전체 계좌 리스트에서도 삭제 
            
            let total = 0;

            arr.forEach((account, index) => {  // 검색 결과 계좌 리스트 순회하기 
                total += account.balance;  // 순회하면서 총액 계산
            });
            
            setTotalBalance(total);
            alert('해지가 완료됐습니다.');
        }
    }

    // 계좌 체크버튼을 클릭할 때 마다 해당 계좌의 체크 여부를 바꿔주는 함수
    const updateChecked = (accountNum)=>{

        const arr1 = result.filter((account)=> account.accountNum === accountNum);
        arr1.map((account)=> account.isChecked = true);

        const arr2 = result.filter((account)=> account.accountNum !== accountNum);
        arr2.map((account)=> account.isChecked = false);

        setFlag(!flag);  // 화면을 갱신하기 위해 플래그 변경
    }

    return (
        <div className="main-container">
            <div className="search-area">
                <input type="text" className="form-control" placeholder="예금주 입력" ref={inputText}/>
                <button className="btn btn-primary" onClick={searchAccount}>검색</button>
            </div>

            <TotalComponent totalBalance={totalBalance}/>
            <CardListComponent accountList={result} updateChecked={updateChecked}/>
            {
                result.length !== 0 && (
                    <ButtonComponent deposit={deposit} withdraw={withdraw} cancel={cancel}/>
                )
            }
        </div>
    );
}

export default BankLayout;