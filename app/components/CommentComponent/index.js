import React,{Component} from 'react';
import CommentItem from "./CommentItem/index";
export default class CommentComponent extends Component{
    render(){
        return (
            <div>
                <h3 style={{paddingLeft:10}}>用户点评</h3>
                {
                    this.props.data.map((item,index)=>(
                        <CommentItem key={index} data={item}/>
                    ))
                }
            </div>
        )
    }
}
