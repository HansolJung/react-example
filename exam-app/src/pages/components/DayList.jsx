import React from 'react';
import dummy from '../data/data.json';

function DayList(props) {
    console.log(dummy);

    return (
        <>
            <ul className='day-list'>
                {
                    dummy.days.map(obj=>
                        (
                            <li key={obj.id}>Day {obj.day}</li>
                        )
                    )
                }
            </ul>
        </>
    );
}

export default DayList;