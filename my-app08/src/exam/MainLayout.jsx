import React, { useState } from 'react';
import { SumContext } from './SumContext';
import SubLayout from './SubLayout';

function MainLayout(props) {

    const [result, setResult] = useState(0);

    return (
        <div>
            <p>합: {result}</p>
            <SumContext.Provider value={{setResult}}>
                <SubLayout/>
            </SumContext.Provider>
        </div>
    );
}

export default MainLayout;