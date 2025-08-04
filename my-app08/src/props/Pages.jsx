import React from 'react';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';

function Pages({isDark, setIsDark}) {
    return (
        <div className='pages'>
            <Header isDark={isDark}/>
            <Contents isDark={isDark}/>
            <Footer isDark={isDark} setIsDark={setIsDark}/>
        </div>
    );
}

export default Pages;