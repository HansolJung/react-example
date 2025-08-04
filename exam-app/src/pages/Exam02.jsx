import React, { useState } from 'react';
import Exam02inner from './Exam02inner';

function Exam02() {
    
    return (
        <div className="App">
            <h3>props: properties</h3>
            <Exam02inner age={10}/>
            <Exam02inner age={20}/>
            <Exam02inner age={30}/>
        </div> 
    );
}

export default Exam02;