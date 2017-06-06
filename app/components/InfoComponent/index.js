import React,{Component} from 'react';
import './index.less';
import Star from "../Star/index";
export default class InfoComponent extends Component{
    render(){
        let {img,star,subTitle,desc,title,price} = this.props.data;
        return (
            <div className="info-component">
                <div className="info-list">
                    <img src={img} alt=""/>
                    <div >
                        <h3>{title}</h3>

                        <div className="info-star">
                            <Star count={star}/>
                            <span>￥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                <br/>
                <hr/>
                <div dangerouslySetInnerHTML={{__html:desc}}>
                    {/*将内容转化为html插入到页面中*/}
                </div>
            </div>
        )
    }
}