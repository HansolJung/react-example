import React from 'react';

function Exam05(props) {

    function Body({children}) {
        return (
            <div className='body'>{children}</div>
        );
    }

    function Zero() {
        return (
            <div className='zero'>제주청귤 아이스티 녹차</div>
        );
    }

    return (
        <div className="App">
            <Body>
                <Zero />
            </Body>
        </div>
    );
}

export default Exam05;