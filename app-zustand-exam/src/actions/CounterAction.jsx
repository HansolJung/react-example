

export const CounterAction = ((set, get)=>({
    addNumber : ()=>set((state)=>{ state.count += 1}),
    minusNumber : ()=>set((state)=> { state.count -= 1})
}))