import * as types from '../action-types/userinfo';
//actionCreator 是一个函数,创建action

export function update(data) {//修改动作
    return {
        type:types.UPDATE_CITY,
        data
    }
}