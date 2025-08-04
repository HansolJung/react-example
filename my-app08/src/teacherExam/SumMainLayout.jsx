import React, { useState } from 'react';
import { SumContext } from './SumContext';
import AddComponent from './AddComponent';

function SumMainLayout(props) {

    const [result, setResult] = useState(0);

    const add = (num1, num2) => {
        setResult(num1 + num2);
    }

    return (
        <div>
            <p>합: {result}</p>
            <SumContext.Provider value={{add}}>
                <AddComponent/>
            </SumContext.Provider>
        </div>
    );
}

export default SumMainLayout;