import styled from 'styled-components'

export const LoginBox =styled.div`
position: fixed;
top:58px;
left:0;
right:0
bottom:0;
background:#eee;



`
export const LoginFrame=styled.div`
position: absolute
top:36%;
left:50%;
width:360px;
height:200px;
margin-left:-180px;
margin-top:-50px;
background:#fff;
box-sizing:border-box;
padding:30px 0;
box-shadow: 0 0 8px rgba(0,0,0,.1);


`
export const LoginName=styled.input.attrs({placeholder:'账号'})`
display:block;
margin:0 auto 15px;
width:230px;
height:25px;
text-align:center;
`
export const LoginPassword=styled.input.attrs({placeholder:'密码'})`
display:block;
margin:0 auto 15px;
height:25px;
width:230px;
text-align:center;
`
export const LoginButton=styled.button`
display:block;
margin:0 auto;
width:230px;
height:36px;
border:1px solid #eee;
border-radius:30px;
background:cyan;
`