import React ,{Component}from 'react';
import {HomeWrap,HomeLeft,HomeRight,ScrollBlock} from './style'
import ImgBox from './components/imgbox'
import Topic from './components/topic'
import Recommend from './components/recommend'
class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {isScroll:false};
  }
 
    
    render(){
        return <HomeWrap>
              <HomeLeft>
                <ImgBox>
                </ImgBox>
                <Topic/>
              </HomeLeft>      
              <HomeRight>
                <Recommend></Recommend>
              </HomeRight>
              {this.state.isScroll?<ScrollBlock onClick={this.handTop}>回到顶部</ScrollBlock>:null}
              
        </HomeWrap>
    }



}
export default Home 