import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import * as Actions from '../../actions/userinfo';//拿到所有actionCreater的对象
import {bindActionCreators} from 'redux';
import LoginComponent from "../../components/LoginComponent/index";
class Login extends Component{
    constructor(){
        super();
        this.state={
            login:false//默认没有登录,写方法校验是否登录
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent title="登录" history={this.props.history}/>
                {/*如果登录过现实登录组件,若果不显示跳转到用户页面*/}
                {this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div></div>}
            </div>
        )
    }
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin(){
        //检查是否登录
        if(this.props.userInfo.username){
            this.props.history.push('/user');
        }else{
            this.setState({
                login:true
            })
        }
    }
    //在这里需要写一个方法,把用户名存入到redux中
    login(username){
        let info = this.props.userInfo;
        info.username = username;
        this.props.userActions.update(info);//更新redux中的状态
        //如果从购买页进入的需要跳回购买页
        if(this.props.match.params.route){
            //提交到login的路径肯定是通过encode方法转译后的,跳转的时候需要解码跳转
            this.props.history.push(decodeURIComponent(this.props.match.params.route));
        }else{
            this.props.history.push('/user');
        }

    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(Login);
