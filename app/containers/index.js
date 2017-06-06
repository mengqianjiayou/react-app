import React,{Component} from 'react';
import RouterMap from "../routes/index";
import {connect} from 'react-redux';
//绑定actionCreator组成的对象
import {bindActionCreators} from 'redux';
//获取所有actionCreator组成的对象
import * as Actions from '../actions/userinfo';
import {getStorage} from '../local/index';
 class App extends Component{
    constructor(){
        super();
        this.state = {
            done:false
        }
    }
    render(){
        return (
            <div>
                {/*如果当路径为/ RouterMap会变成Home组件*/}
                {this.state.done?<RouterMap/>:<div>正在加载</div>}
            </div>
        )
    }
    componentDidMount(){
        //先去本地查找,是否存储过localstorage名字叫cityName的
        //如果没有,赋予一个默认值,杭州
        //将单钱城市存入到localstorage
        let cityName = getStorage('cityName');
        if(cityName == null) {
            cityName = '杭州';
        }
        this.props.userActions.update({
            cityName
        });

        this.setState({done:true})

    }
}
export default connect(
    state=>{//mapStateToProps
        return{}
        },
    dispatch=>{//mapDispatchToProps
        return {
            userActions:bindActionCreators(Actions,dispatch)
        };
    }
)(App);