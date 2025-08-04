import React, { useRef, useState } from 'react';
import TextInput from '../components/TextInput';
import TextList from '../components/TextList';

function Exam(props) {

    const myId = useRef(1);

    const [list, setList] = useState([]);

    return (
        <div>
            <TextInput setList={setList} myId={myId}/>
            <br />
            <TextList list={list}/>
        </div>
    );
}

export default Exam;