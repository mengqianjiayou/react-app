import {createStore} from 'redux';
import reducers from '../reducers/index';

export function configStore(initState) {
    return createStore(reducers,initState)
}

//redux-tools 可以看当前store的所有状态,需要在浏览器,翻墙下载