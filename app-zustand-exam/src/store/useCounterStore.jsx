import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";


const useCounterStore = create(persist(immer((set)=>({
    count : 0,
    addCount : ()=>set((state)=>{ state.count += 1}),
    minusCount : ()=>set((state)=> { state.count -= 1})
})), {name: 'count-storage'}));

export default useCounterStore;