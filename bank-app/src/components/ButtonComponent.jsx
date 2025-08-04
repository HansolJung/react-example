import React from 'react';

function ButtonComponent({deposit, withdraw, cancel}) {
    return (
        <>
            <div className="btn-list">
                <button className="btn btn-primary" onClick={deposit}>입금</button>
                <button className="btn btn-danger" onClick={withdraw}>출금</button>
                <button className="btn btn-secondary" onClick={cancel}>해지</button>
            </div>
        </>
    );
}

export default ButtonComponent;