import React, { useEffect, useState } from 'react';

function Quiz2ByTeacher(props) {

    const [inputText, setInputText] = useState(0);
    const [numbers, setNumbers] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(()=>{

        // mount 될 때는 배열이 없기 때문에 바로 리턴
        if (numbers.length === 0) {
            return;
        }

        const sum = numbers.reduce((hap, val)=> hap + val);
        setSum(sum);
    }, [numbers]);

    const getNewNumbers = ()=>{
        setNumbers((prev)=>([...prev, Number(inputText)]));
    }

    
    return (
        <div>
            <div>
                <label htmlFor="inputText">입력 값 : </label>
                <input type="text" id='inputText' onChange={(e)=>setInputText(e.target.value)}/>
                <button type='button' onClick={getNewNumbers}>입력</button>
            </div>
            <div>
                <div>
                    <ul>
                        {
                            numbers?.map((num, index)=>(
                                <li key={index}>{num}</li>
                            ))
                        }
                    </ul>
                </div>
                <p>합: {sum}</p>
            </div>
        </div>
    );
}

export default Quiz2ByTeacher;