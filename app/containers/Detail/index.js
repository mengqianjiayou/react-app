import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import Info from "./subpage/Info";
import Comment from "./subpage/Comment";
import Buy from "../../components/Buy/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/store';
//通过路由渲染的组件都会在this.props上增加很多属性,例如:history,match....
class Detail extends Component{
    constructor(){
        super();
        this.state={
            isStore:false
        }
    }
    render(){
        return (
            <div>
                {/*头部*/}
                <HeaderComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买收藏*/}
                <Buy buy={this.buy.bind(this)} isStore={this.state.isStore} store={this.store.bind(this)}/>
                {/*评论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
    componentDidMount(){
        //先从redux中获取所有的收藏列表,如果有显示已收藏,没有显示未收藏
        let id = this.props.match.params.id;
        //数组some,如果数组中有返回true,没有为false
        let flag = this.props.store.some(item=>item===id);
        this.setState({
            isStore:flag
        })
    }
    checkLogin(){
        //登录返回true,没有返回false
        if(this.props.userInfo.username){
            return true;
        }else{
            return false;
        }
    }
    buy(){
        let flag = this.checkLogin();
        if(flag){
            this.props.history.push('/user')
        }else{
            //如果登录成功后还要跳回当前页
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id))
        }
    }
    store(){
        let flag = this.checkLogin();
        let id = this.props.match.params.id;

        if(flag){
            if(this.state.isStore){
                //移除掉
                this.props.StoreActions.remove(id);
            }else{
                //添加到store中
                this.props.StoreActions.add(id);
            }
            this.setState({
                isStore:!this.state.isStore
            })
        }else{
            //如果没有登录则跳转到登录页
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id))
        }
    }
}
export default connect(
    state=>{
        return {
            userInfo:state.userInfo,
            store:state.store
        }
    },
    dispatch=>{
        return {
            StoreActions:bindActionCreators(Actions,dispatch)
        }
    }
)(Detail)