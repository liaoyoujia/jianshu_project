import  React ,{ Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {HeaderWrapper,DropBoxBody,DropItem,Logo,Nav,Input,Login,Reg,Article,DropBox,DropBoxTop} from './style'
import{searchFocus,searchBlur,getListData,initPages,changeShows,changeFalses,changeLogins} from './store/actionCreator'
import {turnLogins} from '../../pages/login/store/actionCreator'


class Header extends Component{
    getListArea(){
        const {isLong,listData,initPage,page,totalPage,changeShow,isShow,changeFalse}=this.props 
        const newList=[]
        for(var i= (page-1)*10;i<page*10;i++){
            newList.push(listData[i])
        }
        
        if(isLong||isShow){
            return <DropBox onMouseEnter={changeShow} onMouseLeave={changeFalse}>
            <DropBoxTop>
                <span className="search">热门搜索</span>
                <span className="another" onClick={()=>{initPage(page,totalPage)}}>换一批</span>
            </DropBoxTop>   
           <DropBoxBody>
                {newList.map((item,index)=><DropItem key={index}>{item}</DropItem>)} 
           </DropBoxBody>
            </DropBox>
        }else{
            return null
        }
    };
    render(){
    
        const {isLong ,handInputBlur,handInputFocus,listData,isLogin,changeLogin}=this.props

        return <HeaderWrapper>
            <Logo/>
            <Nav>
                <span className="menu-text">首页</span> 
                <span className="down">下载App</span>
                   <div className="inputBox">
                   <CSSTransition
                    in={isLong}
                    timeout={300}
                    classNames="star"
                  >
                <Input onFocus={()=>{handInputFocus(listData)}} onBlur={handInputBlur}/>
                </CSSTransition>
               
                <i className={isLong?'iconfont left circle':'iconfont left'}>&#xe69e;</i>
                </div>
               {
                isLogin?<Login onClick={changeLogin}>退出</Login>:<Link to={'/login'}><Login>登录</Login></Link>
               }
                <i className="iconfont right">&#xe607;</i>
            </Nav>
            <div className="headerRight">

                <Article>
                    <i className='iconfont'>&#xe603;</i>
                    写文章
                </Article>
                <Reg>注册</Reg>
            </div>
           {this.getListArea()}
            
        </HeaderWrapper>

    }

}
const mapState=(state)=>{
    return {
        isLong:state.header.isLong,
        listData:state.header.listData,
        isShow:state.header.isShow,
        page:state.header.page,
        totalPage:state.header.totalPage,
        isLogin:state.login.isLogin
    }

}
const mapActions=(dispatch)=>{
    return {
        handInputBlur(){
            dispatch(searchBlur())
        },
        handInputFocus(listData){
            !listData.length&&dispatch(getListData())
            dispatch(searchFocus())
        },
        changeShow(){
            
            dispatch(changeShows())
        },
        changeFalse(){
            dispatch(changeFalses())

        },
        changeLogin(){
            dispatch(turnLogins())
        },

        initPage(page,totalPage){
            if(page<totalPage){
            dispatch(initPages(page+1))
            }else{
                dispatch(initPages(1))
            }
        }


    }
};

export default connect(mapState,mapActions)(Header)