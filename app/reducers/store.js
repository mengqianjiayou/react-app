import * as Types from '../action-types/store';
let initState=[];
export function store(state=initState,action) {
    switch (action.type){
        case Types.ADD_STORE:
            return [...state,action.data];
        case Types.REMOVE_STORE:
            //通过传入的id将数组中的某一项删掉
            return state.filter(item=>item !== action.data);
        default:
            return state;
    }
}