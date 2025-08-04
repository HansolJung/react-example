import React from 'react';
import '../assets/css/exam01.css';  // css 파일 import
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * css 적용 방법 
 * 1. className 을 이용하는 방법)
 *  html 에서 하던대로 클래스 이름, 태그, 태그 이름등을 이용해서 css 를 작성한 후 적용 가능
 *  리액트에서는 이를 css module 방식이라고 한다.
 * 
 */
function CssExam01(props) {
    return (
        <>
            <main className='container vh-100 border border-1 border-black'>  
                
            </main>
        </>
    );
}

export default CssExam01;