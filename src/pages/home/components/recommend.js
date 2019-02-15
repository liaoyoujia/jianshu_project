import React ,{Component}from 'react';
import {RecommendWrap,RecImgBox} from '../style'
import {connect} from 'react-redux'
class Recommend extends Component{
    render(){
        const {recommentData}=this.props
        
        return <RecommendWrap>
            {recommentData.map((item)=>{return <RecImgBox key={item.id}></RecImgBox>})}
            

        </RecommendWrap>
    }
    


}
const mapState=(state)=>{
return {
    recommentData:state.home.homeRecommend,
}

}
const mapActions=(dispatch)=>{
   return {
   
   } 
}
export default connect(mapState,mapActions)(Recommend)