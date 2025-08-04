import React, { useRef } from 'react';
import '../assets/css/allCheckButton.css';

function AllCheckButton({allCheckTodo, allDoneTodo, allDelTodo}) {

    const allCheckBox = useRef(null);

    return (
        <>
            <div className='all-check-container'>
                <div className='ms-5'>
                    <input type="checkbox" 
                        onChange={(e)=>allCheckTodo(e.target.checked)}
                        ref={allCheckBox}/>
                </div>
                <div>
                    <button type='button' className='btn btn-success me-2' onClick={()=>allDoneTodo(allCheckBox.current)}>일괄 완료</button>
                    <button type='button' className='btn btn-danger' onClick={()=>allDelTodo(allCheckBox.current)}>일괄 삭제</button>
                </div> 
            </div>
        </>
    );
}

export default React.memo(AllCheckButton);    {/* React.memo 를 사용해서 컴포넌트 메모이제이션 */}