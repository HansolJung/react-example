import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function FormExam(props) {
    return (
        <div>
            <main>
                {
                    // bootstrap 컴포넌트를 사용할 때는 variant 로 css 를 줄 수 있다.
                }
                <Button variant='btn btn-success mx-3'>사용자 버튼</Button>  
                <Button variant='btn btn-secondary mx-3'>사용자 버튼</Button>  
                <Button className='btn btn-secondary mx-3'>사용자 버튼</Button>  
            </main>
        </div>
    );
}

export default FormExam;