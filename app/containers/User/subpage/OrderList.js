import React,{Component} from 'react';
import {getOrderList,postComment} from '../../../fetch/orderList/index';
import OrderListComponent from "../../../components/OrderListComponent/index";
export default class OrderList extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?<OrderListComponent commitComment={this.commitComment.bind(this)} data={this.state.data}/>:<div>正在加载</div>}
            </div>
        )
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        });
    }
//    提交评价内容到后台
    commitComment(id,comment,callback){//内容 商户id callback更改评价状态
        postComment({id,comment}).then(res=>res.json()).then(data=>{
            console.log(data);
            callback()});
        //提交时传入提交的id数据即可;
    }
}