import React from 'react';

function TextList({list}) {

    return (
        <>
            {
                list?.map((obj)=>(
                    <p key={obj.id}>{obj.id} : {obj.text}</p>
                ))
            }
        </>
    );
}

export default TextList;