import React, { Component } from "react";
import { connect } from "react-redux";
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
import { actionCreator } from "./store/index.js";

class Header extends Component {

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
                            in={ this.props.focused }
                            timeout={500}
                            classNames="slide"
                        >
                        <NavSearch
                            className={ this.props.focused ? 'focused' : ''}
                            onFocus={ this.props.handleInputFocus }
                            onBlur={ this.props.handleInputBlur }
                        />
                        </CSSTransition>
                        <i className={ this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
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

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus () {
            const action = actionCreator.searchFocus();
            dispatch(action);
        },

        handleInputBlur () {
            const action = actionCreator.searchBlur();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);