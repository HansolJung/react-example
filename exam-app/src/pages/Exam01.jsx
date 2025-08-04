import React, { useState } from 'react';

function Exam01(props) {
    const [name, setName] = useState('Mike');

    const changeName = () => {
        setName(name === 'Mike' ? 'John' : 'Mike');
    }

    return (
        <div>
            <h1>state</h1>
            <h2 id='name'>{name}</h2>
            <button type='button' onClick={changeName}> 이름 변경 </button>
        </div>
    );
}

export default Exam01;