import React,{Component} from 'react';
import './index.less';
export default class OrderListItem extends Component{
    constructor(props){
        super(props);
        //将属性转化为自己的装态
        this.state = {
            commentState :props.data.commentState
        }
    }
    render(){
        let {id,commentState,img,title,count,price} = this.props.data;
        return (
            <div>
                <div className="orderList">
                    <img src={img} alt=""/>
                    <div className="orderList-content">
                        <h4>商户:{title}</h4>
                        <span>数量:{count}</span>
                        <span>价格:{price}元</span>
                    </div>
                    <div className="order-button">
                        {
                            this.state.commentState === 0?<button onClick={this.changeCommentState.bind(this)} className="back">评价</button>:this.state.commentState===1?"":this.state.commentState ===2?<button className="unselect">已评价</button>:''
                        }
                    </div>
                </div>
                {/*当正在评价时出现输入框*/}
                {this.state.commentState === 1?<div className="comment-area">
                    <textarea ref={ref=>this.comment=ref}></textarea>
                    <div>
                        <button  onClick={this.sureCommit.bind(this)}>确认评价</button>
                        <button onClick={this.cancel.bind(this)}>取消</button>
                    </div>
                </div>:''}
            </div>
        )
    }
    changeCommentState(){
        this.setState({
            commentState:1
        })
    }
    cancel(){
        this.setState({
            commentState:0
        })
    }
    changeState(){
        this.setState({
            commentState:2
        })
    }
    sureCommit(){
        let {id} = this.props.data;
        this.props.commitComment(id,this.comment.value,this.changeState.bind(this))
    }
}