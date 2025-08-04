import React from 'react';
import '../assets/css/dashboard.css';
import { Link, NavLink, Outlet } from 'react-router';

function DashBoard(props) {
    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li>
                        {/* Link 는 내부적으로 a 태그를 사용한다. 
                            NavLink 는 내부적으로 isActive 를 가지고 있는데 그것의 값에 따라서 active 효과를 줄 수 있다.
                            콜백함수로 넘어오는 객체를 구조분해 할당하여 isActive 값만 필터링해서 받아온다.  */}
                        <NavLink to="/dash/board"
                            className={({isActive})=> isActive ? 'active' : ''}>게시판</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dash/gall"
                            className={({isActive})=> isActive ? 'active' : ''}>갤러리</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                {/* 자식 컴포넌트가 렌더링 되는 위치 */}
                <Outlet/>
            </div>
        </div>
    );
}

export default DashBoard;