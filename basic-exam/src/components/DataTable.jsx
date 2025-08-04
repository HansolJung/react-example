import 'bootstrap/dist/css/bootstrap.min.css';

// props 는 readonly 다.
// 데이터의 위변조가 일어날 수 있기 때문에 읽기만 가능하고 바꿀수는 없다.

// props 를 구조분해 할당하여 dataList 만 받기
function DataTable({dataList}) {

    return (
        <>
            <table className='table'>
                <thead>
                    <tr className='table-dark'>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>성별</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataList?.map((st, index)=>(
                            <tr key={index}>    
                                <td>{st.id}</td>
                                <td>{st.name}</td>
                                <td>{st.age}</td>
                                <td>{st.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default DataTable;