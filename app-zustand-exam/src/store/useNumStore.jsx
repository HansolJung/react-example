import React from 'react';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

const useNumStore = create(persist(immer((set)=>({
    num : 0,
    addNumber : ()=>set((state)=>{ state.num += 1}),
    minusNumber : ()=>set((state)=> { state.num -= 1})
})), {name: 'num-storage'}));

export default useNumStore;