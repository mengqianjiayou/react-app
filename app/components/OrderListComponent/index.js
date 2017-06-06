import React,{Component} from 'react';
import OrderListItem from "./OrderListItem/index";
export default class OrderListComponent extends Component{
    render(){
        return (
            <div>
                <h3 style={{margin:10}}>订单列表</h3>
                {this.props.data.map((item,index)=>(
                    <OrderListItem commitComment={this.props.commitComment.bind(this)} key={index} data={item}/>
                ))}
            </div>
        )
    }
}