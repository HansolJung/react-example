import React, { Fragment, useState } from 'react';
import '../assets/css/common.css';
import ContextPages from './ContextPages';
import { ThemeContext } from './ThemeContext';

function ContextLayout(props) {

    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <ThemeContext.Provider value={{isDark, setIsDark}} >
                <ContextPages />
            </ThemeContext.Provider>
        </>
    );
}

export default ContextLayout;