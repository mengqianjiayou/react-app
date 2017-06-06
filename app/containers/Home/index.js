import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader/index';
import Slider from '../../components/Slider/index';
import Ad from './Subpage/Ad';
import List from './Subpage/List';
import {connect} from 'react-redux';
class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader history={this.props.history} cityName={this.props.userInfo.cityName}/>
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}
//取出redux中的城市传给HomeHeader组件中
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)(Home);