import styled from 'styled-components'
import logoPic from '../../static/logo.png'
export const HeaderWrapper = styled.div `
position:relative;
line-height:58px;
height:58px;
border-bottom:1px solid #eee;
.headerRight{
    position:absolute;
    right:0;
    top:0;
}
`;
export const Logo = styled.a `
display:block;
float:left;
width:100px;
height:56px;
background:url(${logoPic});
background-size:cover;
`;
export const Nav = styled.div `
margin:0 auto;
width:950px;
position:relative;
height:58px;
font-size:16px;
.menu-text{
    color: #ea6f5a;
}
.down{
    margin-left:38px;
    color: #333;
}
.iconfont.left{
    position: absolute
    right:12px;
}
.circle{
    width:30px;
    height:30px;
    margin-top:17px;
    border-radius:50%;
    background:#969696;
    line-height:30px;
    text-align:center;
}
.iconfont.right{
    float:right
    font-weight:800;
    color:#969696;
}
.inputBox{
    display:inline-block;
    position:relative;
}
`;
export const Input = styled.input.attrs({
    placeholder: '搜索'
})
`
display:inline-block;
width:136px;
padding-left:30px;
height:34px;
border: 1px solid #eee;
outline: none;
background:#eee;
border-radius: 40px;
margin-left:38px;
transition:all .4s ease-in;
&.star-enter {
    transition: all .6s ease-out;
}
&.star-enter-active {
    width:240px;
}
&.star-enter-done{
    width:240px;
}
&.star-exit {
    transition: all .6s ease-out; 

}   
&.star-exit-active {
    width:136px;
   
}
&.star-exit-done {
    width:136px;
   
}
`;
export const Login = styled.div`
cursor: pointer;
float:right;
margin:0 38px;
font-weight: 400;
color:#969696;

`
;
export const Reg = styled.a `
cursor: pointer;
display:inline-block;
float:right;
width: 80px;
height: 38px;
border: 1px solid rgba(236,97,73,.7);
border-radius: 20px;
font-size: 15px;
color: #ea6f5a;
margin-top:10px;
text-align:center;
line-height:38px;
`
;
export const Article=styled.a`
cursor: pointer;
display:inline-block;
float:right;
width: 100px;
height: 40px;
margin-top:10px;
text-align:center;
line-height:38px;
background: #ea6f5a;
color: #fff;
border-radius:20px;
font-size:15px;
margin:9px 20px 0;
.iconfont{
    margin-right:8px;
}
`;
export const DropBox=styled.div`
position:absolute;
top:58px;
left:382px;
width:230px;
padding: 20px 20px 10px;
border-bottom: 1px solid #f0f0f0;
background:#fff;
box-shadow: 0 0 8px rgba(0,0,0,.2);

`;
export const DropBoxTop=styled.div `
width:230px;
height:30px;
line-height:20px;
font-size: 14px;
display:flex;
justify-content: space-between;
margin-bottom:6px;
color: #969696;
.search{
    white-space : normal nowrap 
}
.another  {
    white-space : normal nowrap 
}
`;
export const DropBoxBody=styled.div`
width:230px;
line-height:1;
padding-bottom:10px;
`
export const DropItem=styled.a`
    display:inline-block;
    font-size: 12px;
    padding: 2px 6px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-left:4px;
    margin-bottom:4px;
    cursor: pointer;



`

