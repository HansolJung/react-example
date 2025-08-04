import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ListExam01(props) {

    class Student {
        constructor(myName, grade, gender) {
            this.myName = myName;
            this.grade = grade;
            this.gender = gender;
        }
    }

    const list = [
        new Student('홍길동', 1, '남자'),
        new Student('이성진', 1, '남자'),
        new Student('고길동', 1, '남자'),
        new Student('김민구', 2, '남자'),
        new Student('성시언', 2, '남자'),
        new Student('김수지', 2, '여자')
    ];

    return (
        <>
            <main className='container d-flex justify-content-center align-items-center vh-100'>
                <section className='w-50'>
                    <table className='table'>
                        <colgroup>
                            <col style={{width: '60%'}}/>
                            <col style={{width: '20%'}}/>
                            <col style={{width: '20%'}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>이름</th>
                                <th>학년</th>
                                <th>성별</th>
                            </tr>
                        </thead>
                        <tbody>
                            {    
                                // 리스트를 순회해서 화면에 뿌리기 위해선 forEach 가 아니라 map 함수를 사용해야한다. (map 함수는 리턴해주기 때문)
                                // 루프를 돌릴때 안전을 위해서 ? 를 넣어야 한다. null 일수가 있기 때문
                                // html 을 루프를 돌리면서 그릴때 루프 대상에 key 속성을 넣어야 한다
                                // 없어도 화면엔 그려지지만 react 문법상에는 맞지 않는다
                                // key 속성이 루프 대상을 식별하는 값이기 때문에 중복되면 안된다
                                // 이 예제에선 key 값으로 index 를 넣었다.
                                list?.map((obj, index)=>
                                    (<tr key={index}>
                                        <td>{obj.myName}</td>
                                        <td>{obj.grade}</td>
                                        <td>{obj.gender}</td>
                                    </tr>)
                                )
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}

export default ListExam01;