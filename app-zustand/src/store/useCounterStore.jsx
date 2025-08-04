import React from 'react';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

// npm i --save immer
// npm i --save zustand

const useCounterStore = create(persist( immer((set)=>({
    count : 0,
    // addNumber : ()=>set((state)=>({count: state.count + 1})),    // immer 를 사용하지 않는 경우
    // minusNumber : ()=>set((state)=>({count: state.count - 1})),   // ""

    // immer 는 불변값인 state 객체를 받아서 그 안의 상태를 변경한다. 
    addNumber : ()=>set((state)=> { state.count += 1 }),
    minusNumber : ()=>set((state)=>{ state.count -= 1 }),
})), {name: 'count-storage'} ));

export default useCounterStore;