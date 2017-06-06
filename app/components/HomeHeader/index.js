import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
import SearchInput from "../Input/index";
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header back">
                <Link  to="/city">
                    <div className="city">
                        {this.props.cityName}
                        <i className="iconfont icon-xiangxia2"></i>
                    </div>
                </Link>

                <div className="search">
                    {this.props.cityName}
                    <i className="iconfont icon-sousuo-xianxing"></i>
                    {/*这个搜索框需要接受一个函数,当回车时调用传递的函数,将值传递出去/search/all/输入内容*/}
                    <SearchInput value="" toSearch={this.toSearch.bind(this)}/>
                </div>
                <Link to={'/login'}>
                < i className="iconfont icon-yonghufill profile"></i>
                </Link>
            </div>
        )
    }
    toSearch(value){
        //history默认不存在,要通过父级传递
        this.props.history.push('/search/all/'+value);
    }
}