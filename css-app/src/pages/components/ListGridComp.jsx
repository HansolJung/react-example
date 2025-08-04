import React from 'react';


/**
 * 컴포넌트는 곧 view(화면) 이라고 생각하면 된다
 * 왜냐하면 컴포넌트가 return 하는 것이 html 이기 때문
 * 
 * 리액트에서는 컴포넌트 = 함수 객체이기 때문에 return 타입이 존재하고,
 * return 값으로 html 을 반환하기 때문에 하나의 컴포넌트는 하나의 view 를 가진다고 보면 된다
 * 
 * 이 컴포넌트를 호출하는 이유는 컴포넌트가 가진 화면을 노출시키기 위함이다
 * 리액트는 이 컴포넌트들을 이용하여 화면을 구현한다
 * 실제 화면은 하나의 view 인데 사용자가 원하는 위치에 원하는 컴포넌트로 교체하여 여러 화면이 있는 것처럼 보여준다
 * 이것을 SPA(Single Page Application) 방식이라고 한다
 * 
 * 컴포넌트가 호출되면서 전달받는 매개변수를 props 라고 한다
 * props 는 상위 컴포넌트에서 하위 컴포넌트를 호출 할 때 전달해야하는 데이터를 지니는 객체다
 * 
 */
function ListGrid({listData}) {   // props 객체 안에 있는 listData 만 받겠다는 뜻. 구조분해할당.
    return (
        <>
            <section className='w-100'>
                <table className='table'>
                    <colgroup>
                        <col style={{width: '60%'}}/>
                        <col style={{width: '20%'}}/>
                        <col style={{width: '20%'}}/>
                    </colgroup>
                    <thead className='table-dark'>
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
                            listData?.map((obj, index)=>
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
        </>
    );
}

export default ListGrid;