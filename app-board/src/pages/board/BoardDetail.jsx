import React, { useEffect } from 'react';
import '../../assets/css/boardDetail.css';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { useState } from 'react';
import useBoardStore from '../../store/useBoardStore';

function BoardDetail(props) {

    // 경로에 있는 parameter 를 가져오기 위해선 useParams() 훅을 사용해야 한다. (react-router 에서 제공하는 훅)
    // router 에서 사용하는 path 의 이름과 같아야한다.
    const { id } = useParams();  

    //const [detail, setDetail] = useState({title: '', contents: ''});
    const {detail, fetchDetail, inputDetail, setBoId} = useBoardStore();  // zustand 사용하는 경우

    // 페이지 이동을 위한 네비게이션
    const navigate = useNavigate();

    // 처음에만 실행되고 update 나 unmount 시에는 실행 안됨
    // useEffect(()=>{
        
    //     async function getBoard() {
    //         const response = await axios(`/api/board/${id}`);
    //         setDetail(response.data.data);  // api 호출 결과를 detail 에 저장
    //     }

    //     getBoard();
    // }, []);

    // zustand 사용하는 경우
    useEffect(()=>{
        setBoId(id);
        fetchDetail();
    }, [id, fetchDetail]);

    const inputHandler = (e)=>{
        const {name, value} = e.target;

        //setDetail((prev)=>({...prev, [name]: value}));
        inputDetail(name, value); // zustand 사용하는 경우
    }

    const validate = ()=>{
        if (detail.title.trim().length === 0) {
            alert('제목을 입력하십시오');
            return false;
        } 

        if (detail.contents.trim().length === 0) {
            alert('내용을 입력하십시오');
            return false;
        }

        return true;
    }

    // form 데이터 전송
    const handleSubmit = async (e)=>{
        // 이상 동작 방지   
        // 하나의 이벤트가 끝나기 전까지 새로운 이벤트 발생 막음
        e.preventDefault(); 

        const header = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        if (validate()) {
            // PUT 방식 사용
            const res = await axios.put(`/api/board/${id}`, detail, header);
            console.log(res.data);

            let msg = '';
            msg = res.data.resultMsg === 'OK' ? "수정 완료!" : "수정 실패...";
            alert(msg);

            // 페이지 이동
            navigate('/board');
        }
    }

    return (
        <>
            <section className='detail'>
                <div className='detail-form'>
                    <header className='my-3 text-center'>
                        <h3>게시글 상세</h3>
                    </header>
                    <main className='detail-contents'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="title">제목 : </label>
                                <input type="text" id='title' 
                                    name='title' 
                                    className='form-control' 
                                    value={detail.title}
                                    onChange={inputHandler} />
                            </div>  
                            <div className='mb-4'>
                                <label htmlFor="contents">내용 : </label>
                                <textarea className='form-control' id='contents' 
                                    name='contents' 
                                    value={detail.contents}
                                    onChange={inputHandler}></textarea>
                            </div>
                            <div className='text-center'>
                                {/* 버튼이 form 안에 있는데 type 을 지정을 안하면 자동으로 submit 타입으로 된다. */}
                                <button type='submit' className='btn btn-primary mx-2'>수정</button>
                                <button type='button' className='btn btn-secondary'>취소</button>
                            </div>
                        </form>
                    </main>
                </div>
            </section>
        </>
    );
}

export default BoardDetail;