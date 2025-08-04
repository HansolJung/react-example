import React from 'react';
import useNumStore from '../store/useNumStore';
import ButtonComp from '../components/ButtonComp';
import useCounterStore from '../store/useCounterStore';

function DefaultMain(props) {

    const {count} = useCounterStore();
    const {num} = useNumStore();
    
    return (
        <div>
            <p>count : {count}</p>
            <p>num : {num}</p>
            <div>
                <ButtonComp/>
            </div>
        </div>
    );
}

export default DefaultMain;