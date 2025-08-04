import React from 'react';
import { useRef } from 'react';

function Exam07(props) {
    const divRef = useRef(null);   // divRef 는 useRef(null)을 통해 div 요소에 대한 참조를 저장

    const scrollToTop = () => {  // 버튼을 클릭하면 divRef.current.scrollIntoView 를 호출하여, div 요소로 스크롤을 이동시킴
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div ref={divRef} style={{ height: '150vh', backgroundColor: '#f5f5f5' }}>
                Scroll to see the button
            </div>
            <button onClick={scrollToTop}>Scroll to top</button>
        </div>
    );
}

export default Exam07;