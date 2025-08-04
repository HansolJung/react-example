import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/todoLayout.css';
import InputEditor from '../components/InputEditor';
import { useState } from 'react';
import { useRef } from 'react';
import Todo from '../components/Todo';
import { useReducer } from 'react';
import TodoList from '../components/TodoList';
import { TodoContext } from '../context/TodoContext';
import AllCheckButton from '../components/AllCheckButton';
import { useCallback } from 'react';
import { useEffect } from 'react';

function TodoLayout(props) {

    const todoReducer = (state, action)=>{
        
        switch(action.type) {
            case 'insert':
                return [...state, action.payload];

            case 'check':
                return state.map(todo=> (
                    todo.id === action.payload.id ?
                        {...todo, checked : !todo.checked} : todo
                    )
                );

            case 'todoDone':
                return state.map(todo=> (
                    todo.id === action.payload.id ?
                        {...todo, isDone : true} : todo
                    )
                );

            case 'todoDel':
                return state.filter(todo=> todo.id !== action.payload.id );

            case 'allCheck':
                return state.map(todo=> action.payload.isChecked ? {...todo, checked : true} : {...todo, checked : false});
            
            case 'allDone':
                return state.map(todo=> todo.checked ? {...todo, isDone : true, checked : false} : todo);

            case 'allDel':
                return state.filter(todo=> !todo.checked);

            default:
                return state;
        }
    }
    
    const todoId = useRef(1);
    const [inputText, setInputText] = useState('');
    const [todoList, dispatch] = useReducer(todoReducer, []);
    const [todoCount, setTodoCount] = useState(0);
    const [doneCount, setDoneCount] = useState(0);
    const [doneRate, setDoneRate] = useState(0);

    const createTodo = ()=>{
        const todo = new Todo(todoId.current++, inputText, false, false);

        dispatch({type: 'insert', payload: todo});
        console.log(todoList);
    }

    const updatedChecked = (id)=>{
        dispatch({type: 'check', payload: {id}});  // payload : { id: id} 와 같다. 키와 밸류의 이름이 똑같으면 축약해서 사용 가능.
        console.log(todoList);
    }

    const doneTodoBtn = (id)=>{
        dispatch({type: 'todoDone', payload: {id}});
        console.log(todoList);
    }

    const delTodoBtn = (id)=>{
        const isConfirm = confirm('정말 삭제하겠습니까?');

        if (isConfirm) {
            dispatch({type: 'todoDel', payload: {id}});
        }
    }

    const allCheckTodo = (isChecked)=>{
        dispatch({type: 'allCheck', payload: {isChecked}});
        console.log(todoList);
    }

    const allDoneTodo = useCallback((target)=>{
        const todos = todoList?.filter(todo=> !todo.isDone && todo.checked);   // 완료되지 않은 todo 들 중에 체크된 것들만 필터링 한다.

        if (todos.length === 0) {
            alert('일괄 완료할 일들을 체크해주십시오.');
            return false;
        }

        target.checked = false;  // 최상단 체크박스 해제

        dispatch({type: 'allDone'});
        console.log(todoList);
    }, [todoList]);

    const allDelTodo = useCallback((target)=>{
        const todos = todoList?.filter(todo=> todo.checked);   
        
        if (todos.length === 0) {
            alert('일괄 삭제할 일들을 체크해주십시오.');
            return false;
        }

        const isConfirm = confirm('정말 삭제하겠습니까?');

        if (isConfirm) {
            target.checked = false;  // 최상단 체크박스 해제
            dispatch({type: 'allDel'});
        }
        console.log(todoList);
    }, [todoList]);

    useEffect(()=>{
        const totalSize = todoList.length;
        const doneCount = todoList.filter(todo=> todo.isDone).length;
        const todoCount = totalSize - doneCount;
        const doneRate = totalSize === 0 ? 0 : parseFloat(((doneCount / totalSize) * 100).toFixed(2));

        setDoneCount(doneCount);
        setTodoCount(todoCount);
        setDoneRate(doneRate);
    }, [todoList]);

    return (
        <div>
            {/* depth 가 1인 컴포넌트들은 그냥 props 로 전달하고, 그 이상인 컴포넌트들에게는 Provider 를 이용해서 전달 */}
            <TodoContext.Provider value={{updatedChecked, doneTodoBtn, delTodoBtn}}>
                <main className='container'>
                    <section className='contents'>
                        <header className='text-center'>
                            <h2>Todo List</h2>
                        </header>
                        <section className='text-end'>
                            <p>할 일 : {todoCount} 건</p>
                            <p>한 일 : {doneCount} 건</p>
                            <p>달성률 : {doneRate} %</p>
                        </section>
                        { /* 할 일 등록할 editor */}
                        <InputEditor 
                            inputText={inputText}
                            setInputText={setInputText}
                            createTodo={createTodo}/>
                        <AllCheckButton allCheckTodo={allCheckTodo} allDoneTodo={allDoneTodo} allDelTodo={allDelTodo}/>
                        <TodoList todoList={todoList}/>
                    </section>
                    
                </main>
            </TodoContext.Provider>
        </div>
    );
}

export default TodoLayout;