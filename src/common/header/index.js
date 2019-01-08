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
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style.js";
import { CSSTransition } from "react-transition-group";
import { actionCreator } from "./store/index.js";



class Header extends Component {

    getListArea = (show) => {
        if (show) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {/*<SearchInfoItem>区块链</SearchInfoItem>*/}
                        {/*<SearchInfoItem>小程序</SearchInfoItem>*/}
                        {/*<SearchInfoItem>Vue</SearchInfoItem>*/}
                        {/*<SearchInfoItem>毕业</SearchInfoItem>*/}
                        {/*<SearchInfoItem>PHP</SearchInfoItem>*/}
                        {/*<SearchInfoItem>故事</SearchInfoItem>*/}
                        {/*<SearchInfoItem>flutter</SearchInfoItem>*/}
                        {/*<SearchInfoItem>理财</SearchInfoItem>*/}
                        {/*<SearchInfoItem>美食</SearchInfoItem>*/}
                        {/*<SearchInfoItem>投稿</SearchInfoItem>*/}
                        {
                            this.props.list.map(item => (
                                <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            ))
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    };

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
                        {
                            this.getListArea(this.props.focused)
                        }
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
    // return {
    //     focused: state.get("header").get("focused")  // for immutable
    // }
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.get("header").get("list")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus () {
            const action1 = actionCreator.searchFocus();
            dispatch(action1);
            const action2 = actionCreator.getList();
            dispatch(action2);
        },

        handleInputBlur () {
            const action = actionCreator.searchBlur();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);