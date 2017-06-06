import React,{Component} from 'react';
import SearchInput from "../Input/index";
import './index.less';
export default class SearchHeader extends Component{
    render(){
        return (
            <div className="back search-header">
                <i className="iconfont icon-fanhui" onClick={this.back.bind(this)}></i>
                <div>
                    <SearchInput toSearch={this.props.toSearch} value={this.props.value} />
                </div>

            </div>
        )
    }
    back(){
        this.props.history.go(-1);
    }
}