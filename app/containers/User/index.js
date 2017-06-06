import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import UserInfo from "../../components/Userinfo/index";
import {connect} from 'react-redux';
import OrderList from "./subpage/OrderList";
class User extends Component{
    render(){
        return (
            <div>
                <HeaderComponent title="用户信息" history={this.props.history} back="/" />
                <UserInfo userInfo={this.props.userInfo}/>
                {/*订单列表页*/}
                <OrderList username={this.props.userInfo.username}/>
            </div>
        )
    }

}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)(User);