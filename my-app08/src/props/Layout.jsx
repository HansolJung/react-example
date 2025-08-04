import React, { Fragment, useState } from 'react';
import Pages from './Pages';
import '../assets/css/common.css';

function Layout(props) {

    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <Pages isDark={isDark} setIsDark={setIsDark}/>
        </>
    );
}

export default Layout;