import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleLogins }from './store/actionCreator'
import {Redirect} from 'react-router-dom'
import {LoginBox,LoginFrame,LoginName,LoginPassword,LoginButton} from './style'
class Login extends Component {


    render() {
        const {handleLogin,isLogin }=this.props
        if(isLogin){
            return <Redirect to='/'></Redirect> 
        }else{
        return(
           
            <LoginBox>
                <LoginFrame>
                    <LoginName innerRef={(name)=>{this.name=name}}></LoginName>
                    <LoginPassword innerRef={(password)=>{this.password=password}}></LoginPassword>
                    <LoginButton onClick={()=>{handleLogin(this.name,this.password)}}>登陆</LoginButton>
                </LoginFrame>
            </LoginBox>
        )
    }
}

  

1
}
const mapState=(state)=>{
    return {
        isLogin:state.login.isLogin
    }

}
const mapActions=(dispatch)=>{
    return {
        handleLogin(){
            
            dispatch(handleLogins())
        }
    }
};

export default connect(mapState,mapActions)(Login)