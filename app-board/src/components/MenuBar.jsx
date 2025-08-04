import React from 'react';
import '../assets/css/menuBar.css';
import { NavLink } from 'react-router';

function MenuBar(props) {
    return (
        <>
            <nav className='nav'>
                <ul className='nav-list'>
                    <li>
                        { /* 콜백 함수에서 NavLink 가 주는 속성 중 isActive 만 사용하기 위해 구조분해 할당한 것 */}
                        <NavLink to="/" className={({isActive}) => 
                            isActive ? 'active' : ''} >Home</NavLink>
                    </li>
                    <li className='nav-board'>
                        <span>Board</span>
                        <ul className='nav-submenu'>
                            <li>
                                <NavLink to="/board" className={({isActive}) => 
                                    isActive ? 'active' : ''} >게시판</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default MenuBar;