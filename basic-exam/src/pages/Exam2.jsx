import React, { useEffect, useState } from 'react';
import NumberInput from '../components/NumberInput';
import NumberList from '../components/NumberList';

function Exam2(props) {

    const [list, setList] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(()=>{
        if (list.length !== 0) {
            setSum(list.reduce((sum, num)=>sum + num, 0));
        }
    }, [list]);

    return (
        <div>
            <NumberInput setList={setList}/>
            <br />
            <NumberList list={list}/>
            <br />
            <p>합: {sum}</p>
        </div>
    );
}

export default Exam2;