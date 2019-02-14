import React ,{Component}from 'react';
import {HomeWrap,HomeLeft,HomeRight} from './style'
import ImgBox from './components/imgbox'
class Home extends Component{
    render(){
        return <HomeWrap>
              <HomeLeft>
                <ImgBox>
                </ImgBox>
              </HomeLeft>      
              <HomeRight></HomeRight>
        </HomeWrap>
    }



}
export default Home 