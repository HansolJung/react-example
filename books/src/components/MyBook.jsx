import React, { useState } from 'react';
import '../assets/css/mybook.css';

function MyBook({rentalBookList, logUser, returnBookEvt}) {

    const [checkList, setCheckList] = useState([]);

    // 체크 이벤트
    const checkBooksEvt = (e)=>{
        const {value, checked} = e.target;

        if (checked) {
            setCheckList((prev)=>[...prev, Number(value)]);
        } else {
            // 체크가 해제된 책들은 제외
            setCheckList((prev)=>prev.filter(brId => brId !== Number(value)));
        }
    }

    // 반납 이벤트
    const returnBooksEvt = ()=>{
        if (checkList.length === 0) {
            alert('반납할 도서를 선택해주십시오.');
            return false;
        }

        returnBookEvt(checkList);

        // 대여 목록 변경 시 체크 풀기
        setCheckList([]);
    }

    return (
        <div className='my-list'>
            <div>
                <h3>대여 목록</h3>
            </div>
            <div className='text-end mb-3'>
                <button type='button' className='btn btn-success me-2'
                    disabled={logUser === ''}
                    onClick={returnBooksEvt}>반납</button>
            </div>
            <div className='borrow-list'>
                {
                    rentalBookList?.filter(book => book.userName === logUser)
                        .map(book => (
                            <div className='mx-2' key={`b_${book.bookId}`}>
                                <input type="checkbox" 
                                    checked={checkList.includes(book.bookId)}
                                    onChange={checkBooksEvt}
                                    value={book.bookId}/>
                                <span>{book.bookName}</span>
                            </div>
                        ))
                }
            </div>
        </div>
    );
}

export default MyBook;