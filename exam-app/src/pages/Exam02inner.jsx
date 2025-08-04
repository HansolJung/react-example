import React, { useState } from 'react';

function Exam02inner({age}) {
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인입니다." : "미성년자입니다.";

    const changeName = () => {
        setName(name === 'Mike' ? 'John' : 'Mike');
        
    }

    return (
        <div>
            <h1>state</h1>
            <h2 id='name'>{name} ({age}) : {msg}</h2>
            <button type='button' onClick={changeName}> 이름 변경 </button>
        </div>
    );
}

export default Exam02inner;