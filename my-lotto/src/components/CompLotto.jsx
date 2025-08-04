import React from 'react';
import '../assets/css/compLotto.css';
import Ball from './Ball';

function CompLotto({compLotto}) {
    return (
        <>
            <div className='lotto-table'>
                {
                    compLotto.lotto?.map((lotto, index)=>(
                        <Ball key={index} number={lotto.number} />
                    ))
                }
                {
                    compLotto.lotto &&
                        (
                            <>
                                <h3>+</h3>
                                <Ball number={compLotto.bonusNum}/>
                            </>
                        )
                }
            </div>
        </>
    );
}

export default CompLotto;