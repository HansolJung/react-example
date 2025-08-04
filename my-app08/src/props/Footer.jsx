import React from 'react';

function Footer({isDark, setIsDark}) {

    const toggleTheme = ()=>{
        setIsDark(!isDark);
    }

    const footerCss = {
        backgroundColor : isDark ? 'black' : 'lightgray',
    }

    return (
        <div>
            <footer className='footer' style={footerCss}>
                <button type='button' className='button' onClick={toggleTheme}>
                    Change Theme
                </button>
            </footer>
        </div>
    );
}

export default Footer;