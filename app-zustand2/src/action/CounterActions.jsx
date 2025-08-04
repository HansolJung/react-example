
export const CounterActions =  ((set, get)=>({
    addCount : ()=>set((state)=>{state.count += 1}),
    minusCount : ()=>set((state)=>{state.count -= 1}),
}));