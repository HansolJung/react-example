import React from 'react';

function CardListComponent({accountList, updateChecked}) {
    return (
        <>
            
            {
                accountList?.map((account, index)=>(
                    <div className='card mb-2' key={index}>
                        <div>
                            <input type="radio" value="account" name="account" 
                                id={account.accountNum} 
                                checked={account.isChecked}
                                onChange={()=>updateChecked(account.accountNum)}/>
                        </div>
                        <div className="card-body p-2">
                            <div><strong>예금주</strong>: {account.name}</div>
                            <div className="select-account" data-account={JSON.stringify(account)}><strong>예금타입</strong>: {account.type}</div>
                            <div className="select-account" data-account={JSON.stringify(account)}><strong>잔액</strong>: {account.balance} 원</div>
                        </div>
                    </div>
                ))
            }

        </>
    );
}

export default CardListComponent;