import React from 'react';
import '../assets/css/bookList.css';
import { useState } from 'react';

function BookList({bookList, logUser, addNewBook, deleteBooks, rentalBookEvt}) {

    const [checkList, setCheckList] = useState([]);
    const [bookName, setBookName] = useState('');

    const checkBooks = (e)=>{
        const {value, checked} = e.target;
        
        if (checked) {
            setCheckList((prev)=>[...prev, Number(value)]);
        } else {
            setCheckList((prev)=>prev.filter(bookId => bookId !== Number(value)));
        }
    }

    const eventHandler = (type)=>{
        if (type === 'add') {
            addNewBook(bookName);
        } else if (type === 'del') {
            deleteBooks(checkList);
            setCheckList([]); 
        } else if (type === 'rental') {
            if (checkList.length === 0) {
                alert('대여할 책을 선택하십시오.');
                return false;
            }

            rentalBookEvt(checkList);
            setCheckList([]);  // 체크 리스트 초기화
        }
    }

    const enterEvent = (e)=>{
        if (e.key === 'Enter') {
            eventHandler('add');
        }
    }

    return (
        <div className='book-list'>
            <div>
                <h4>도서 리스트</h4>
            </div>
            <section className='mb-3'>
                <label htmlFor="bookName">책 이름 : </label>
                <div className='row'>
                    <div className='col-8'>
                        <input type="text" id='bookName' name='bookName'
                            className='form-control'
                            onChange={(e)=>setBookName(e.target.value)} 
                            onKeyDown={enterEvent}/>
                    </div>
                    <div className='col-4 text-end'>
                        <button type='button' 
                            className='btn btn-primary me-2'
                            onClick={()=>eventHandler('add')}>추가</button>
                        <button type='button'
                            className='btn btn-success me-2'
                            disabled={logUser === '' ? true : false}
                            onClick={()=>eventHandler('rental')}
                            >대여</button>
                        <button type='button'
                            className='btn btn-danger'
                            onClick={()=>eventHandler('del')}>삭제</button>
                    </div>
                </div>
            </section>
            <section className='item-list'>
                {
                    bookList?.map((book)=>(
                        <div className='mx-2' key={book.id}>
                            <input type="checkbox" checked={checkList.includes(book.id) || book.isAbsent}
                                disabled={book.isAbsent}
                                onChange={checkBooks}
                                value={book.id}/>
                            <span className='ms-1'>{book.name}</span>
                            {book.isAbsent && <span>(대여 중)</span>}
                        </div>
                    ))
                }
            </section>
        </div>
    );
}

export default BookList;