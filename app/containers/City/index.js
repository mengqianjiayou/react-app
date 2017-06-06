import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import CurrentCity from "../../components/CurrentCity/index";
import * as Actions from '../../actions/userinfo';
import {bindActionCreators} from 'redux';
import ChooseCity from "../../components/ChooseCity/index";
class City extends Component{
    render(){
        return (
            <div>
                {/*头*/}
                <HeaderComponent title="选择城市" history={this.props.history}/>
                {/*当前城市*/}
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                {/*热门城市*/}
                <ChooseCity changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(cityName){
        let older = this.props.userInfo;
        older.cityName = cityName;
        this.props.userActions.update(older);
        this.props.history.push('/');
    }

}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(City)