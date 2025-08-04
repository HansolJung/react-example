import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { CounterActions } from '../action/CounterActions';


const useCounterStore = create( immer ((set, get)=>({
    count : 0,
    ...CounterActions(set, get)  // 미리 만들어놓은 CounterActions 함수 펼치기
})));


export default useCounterStore;