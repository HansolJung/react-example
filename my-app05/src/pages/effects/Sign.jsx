import React from 'react';
import { useEffect } from 'react';

function Sign(props) {

    
    useEffect(()=>{
        console.log('sign mount'); // 컴포넌트가 mount 될 때 실행

        return () => {   // 컴포넌트가 unMount 될 때 실행
            console.log('sign unMount');
        }

    }, []);

    return (
        <div>
            <div>Visible</div>
        </div>
    );
}

export default Sign;