import React, { Component } from "react";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from "./style.js";
import { CSSTransition } from "react-transition-group";

export default class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            focused: false
        };
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    handleInputFocus () {
        this.setState((preState) => {
            return {
                focused: true
            }
        })
    }

    handleInputBlur () {
        this.setState((preState) => {
            return {
                focused: false
            }
        })
    }

    render () {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right"><i className='iconfont'>&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={ this.state.focused }
                            timeout={500}
                            classNames="slide"
                        >
                        <NavSearch
                            className={ this.state.focused ? 'focused' : ''}
                            onFocus={ this.handleInputFocus }
                            onBlur={ this.handleInputBlur }
                        />
                        </CSSTransition>
                        <i className={ this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting"><i className="iconfont">&#xe608;</i>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}