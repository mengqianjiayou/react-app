import React,{Component} from 'react';
import {getList} from '../../../fetch/home/index';
import ListComponent from "../../../components/ListComponent/index";
import LoadMore from "../../../components/loadMore/index";
export default class List extends Component{
    constructor(){
        super();
        this.state = {
            data:[],
            hasMore:true,
            page:0,
            isLoading:true
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?<ListComponent data={this.state.data}/>:<div>正在加载</div>}
                <LoadMore hasMore={this.state.hasMore} isLoading={this.state.isLoading} loadMore={this.loadMore.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,0));

    }
    //处理成功后的逻辑
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }
    loadMore(){
        this.setState({
            page:this.state.page+1,
            isLoading:true //每次加载更多时状态为正在加载
        },()=>{
            //这个函数可以获取最新的页码状态
            this.processData(getList(this.props.cityName,this.state.page));
        })
    }
}