import React, { useState } from 'react';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';

function Exam03(props) {

    const [day, setDay] = useState(1);

    const changeDay = () => {
        day === 3 ? setDay(1) : setDay(day + 1);
    }

    return (
        <div className="App">
            <Header />
            <div>
                <button type='button' onClick={changeDay}>날짜 변경</button>
            </div>
            <DayList />
            <Day day={day} />
        </div>  
    );
}

export default Exam03;