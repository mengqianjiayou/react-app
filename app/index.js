import React from 'react';
import {render} from 'react-dom';
import App from './containers/index';
import './assets/index.less';//放的公共样式
import {Provider} from 'react-redux';
import {configStore} from './store/index';//创建store实例
let store = configStore();//生成store,可以在里面传入初始状态

render(<Provider store={store}>
    <App/>
</Provider>,document.querySelector('#root'));