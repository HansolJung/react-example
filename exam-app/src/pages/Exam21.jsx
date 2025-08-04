import React, { useCallback, useState } from 'react';

function Exam21(props) {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('김철수');

    const upCount = ()=>{
        setCount(count + 1);
    }

    const changeName = useCallback(()=>{
        setName(name === '김철수' ? '유재석' : '김철수');
    }, [name]);

    return (
        <div>
            <p>카운트 : {count}</p>
            <div>
                <button type='button' onClick={upCount}>증가</button>
                <button type='button' onClick={changeName}>이름 변경</button>
                <div>
                    <ChildComponent name={name}/>
                </div>
            </div>
        </div>
    );
}

const ChildComponent = React.memo(({name})=>{
    console.log("child component");
    return (
        <>
            <p>안녕 나는 {name} 이다. </p>
        </>
    );
});



export default Exam21;