import React from 'react';


// React.memo 사용해서 컴포넌트 메모이제이션하기
// 이때는 function ChildComponent 가 아니라 const ChildComponent 로 만든다.
const ChildComponent = React.memo(({name}) => {
    console.log('child component');
    return (
        <div>
            <p>안녕 나는 {name} 이다.</p>
        </div>
    );
});

export default ChildComponent;