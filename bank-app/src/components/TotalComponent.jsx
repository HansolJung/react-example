import React from 'react';

function TotalComponent({totalBalance}) {
    return (
        <>
            <div className='total'>
                <p className="totalBalance"> 총액: {totalBalance} 원</p>
            </div>
        </>
    );
}

export default TotalComponent;