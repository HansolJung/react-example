import React from 'react';

function NumberList({list}) {
    return (
        <>
            {
                list?.map((num, index)=>(
                    <p key={index}>{index+1}: {num}</p>
                ))
            }
        </>
    );
}

export default NumberList;