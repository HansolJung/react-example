import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import DataInput from '../components/DataInput';



function PropsExam(props) {

    const [list, setList] = useState([
        {id : 1, name: '김민수', age: 30, gender: '남자'},
        {id : 2, name: '이영민', age: 31, gender: '남자'},
        {id : 3, name: '정하나', age: 20, gender: '여자'},
        {id : 4, name: '배지수', age: 30, gender: '여자'}
    ]);

    return (
        <div>
            <header>
                <h2>Props 예제</h2>
            </header>
            <section>
                <DataTable dataList={list}/>
            </section>
            <section>
                <DataInput setDataList={setList}/>
            </section>
        </div>
    );
}

export default PropsExam;