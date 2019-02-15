import React ,{Component}from 'react';
import {TopicBox,TopicItem,TopicItemLeft,TopicItemRight,TopicTitle,TopicBody,LoaderMore} from '../style'
import {connect} from 'react-redux'
import {Link}from 'react-router-dom'
import {getHomeDatas,getMoreLists} from '../store/actionCreator'
class Topic extends Component{
    render(){
        const {homeList,getMoreList,page}=this.props
        
        return<div> 
        <TopicBox>{
            homeList&&homeList.map((item,index)=>{
                return (
                <Link key={index} to={'/detail/'+item.id}> 
                <TopicItem >
                <TopicItemLeft>
                <TopicTitle>{item.title}</TopicTitle>
                <TopicBody>{item.desc}</TopicBody>
                </TopicItemLeft>
                <TopicItemRight>
                    <img src={item.imgUrl} alt=''></img>
                </TopicItemRight>

                </TopicItem> 
                 </Link>   

                )
            })
        }
        </TopicBox>
        <LoaderMore onClick={()=>{getMoreList(page)}}>点击更多</LoaderMore>

        </div>
    }
    componentDidMount(){
         this.props.getHomeData() 
    }



}
const mapState=(state)=>{
return {
    homeList:state.home.homeList,
    page:state.home.page
}

}
const mapActions=(dispatch)=>{
   return {
    getHomeData(){
        dispatch(getHomeDatas())
    },
    getMoreList(page){
        
        dispatch(getMoreLists(page))
    }

   } 
}
export default connect(mapState,mapActions)(Topic)