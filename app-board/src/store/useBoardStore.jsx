import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import axios from 'axios';


// get 함수를 사용하면 본인 내부에서 본인의 상태를 사용할 수 있다.
// 여기선 get 함수로 본인의 boId 를 얻어와서 본인이 사용함.
const useBoardStore = create( immer((set, get)=>({
    detail: {boId: '', title: '', contents: '', writer: ''},
    boId : 0,

    fetchDetail : async () => {
        const res = await axios.get(`/api/board/${get().boId}`);
        set((state)=>{
            state.detail.boId = res.data.data.boId;
            state.detail.title = res.data.data.title;
            state.detail.contents = res.data.data.contents;
            state.detail.writer = res.data.data.writer;
        });
    },
    
    setBoId: (id)=>{
        set((state)=> {state.boId = id});
    },

    inputDetail: (name, value)=>{
        set((state)=>{
            state.detail[name] = value;
        });
    }
})));

export default useBoardStore;