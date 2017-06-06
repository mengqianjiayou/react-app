import React,{Component} from 'react';
import SearchHeader from "../../components/SearchHeader/index";
//可从轮播图进来/search/jingdian
//输入框进入 search/all
export default class Search extends Component{
    render(){
        return (
            <div>
                <SearchHeader
                    value={this.props.match.params.keyword||''}
                    history={this.props.history}
                    toSearch={this.toSearch.bind(this)}
                />
            </div>
        )
    }
    toSearch(value){
        this.props.history.push('/search/all/'+value);
    }
}