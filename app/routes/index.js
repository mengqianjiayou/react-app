//路由有两种 HashRouter BrowserRouter
import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,//单独路由
    Switch//只匹配一个
} from 'react-router-dom';
import Home from '../containers/Home';
import Detail from "../containers/Detail/index";
import Login from "../containers/Login/index";
import User from "../containers/User/index";
import City from "../containers/City/index";
import Search from "../containers/Search/index";

export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        {/*只有当路径为/的时候才匹配路由 exact*/}
                        <Route exact path="/" component={Home}/>
                        <Route path="/detail/:id" component={Detail}/>
                        {/*点击先跳转到登录页,登录后再回到登录之前的页面,在login路径后保存上一个路径.如果登录过在登录页跳转到用户页*/}
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/city" component={City}/>
                        <Route path="/search/:kind/:keyword?" component={Search}/>

                    </Switch>
                </Router>
            </div>
        )
    }
}