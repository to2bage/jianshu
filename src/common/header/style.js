import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({href: '/'})`
    position: absolute;
    height: 56px;
    top: 0;
    left: 0;
    width: 100px;
    display: block;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
    height: 100%;
`;

export const NavItem = styled.div`
    color: #333;
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;  
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #777;
    &::placeholder {
        color: #999
    }
    &.focused {
        width: 240px; 
    }
    &.slide-enter {
        width: 160px;
        transition: all .5s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        width: 240px;
        transition: all .5s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        // background: orange;
        text-align: center;
        color: #999;
        &.focused {
            background: orange;     // #777
            color: #fff;
        }
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        background: #ec6149;
        color: #fff;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    //height: 170px;
    padding: 0 20px;
    //background: orangered;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px; 
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 2px;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;