import React, { Component } from "react";
import classNames from 'classnames/bind';
import styles from "./styles.scss";
import RecommendContentData from "./RecommendContent";
import RecommendListTitle from "./RecommendSelectList/RecommendSelectList";
import Pagination from "../Pagination";

const cx = classNames.bind(styles);

class RecommendList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            prettyRoute: 'selectList',
            id: 'E000'
        };

        this.isSameRoute.bind(this);
        this.selecting.bind(this);
    }


    isSameRoute = (uri) => {          
        return (this.state.prettyRoute === uri) ? `${uri}--is-activate` : '';
    }
    
    selecting = (id) => {
        this.setState({
            id
        });
    }
    
       
    render () { 
        const posts = this.props.posts;
        const titles = this.props.titles;
        const { id } = this.state;
        return(
            <div className={cx('background')}>
                <div className={cx('list-background')}>
                    <div  className={cx('main-title-border')}>
                        <span className={cx('main-title')}>
                            추천 여행
                        </span>
                    </div>
                    <div className={cx('select-list-border')}>                        
                        <div className={cx('selectList')} >
                            <div className={cx( `${this.isSameRoute('selectList')}`)}>
                                <span className={cx('select-list')} onClick={() => this.selecting('E000')}>
                                    전체보기
                                </span>
                            </div>
                            <RecommendListTitle titles={ titles } selecting={this.selecting} isSameRoute={this.isSameRoute} />
                        </div>                                               
                    </div>                    
                    <div className={cx('content-border')}>
                        <RecommendContentData posts={ posts }  id={id} / >
                    </div>                
                    <div className={cx('paging-box')}>
                        <Pagination />
                    </div>                 
                </div>                
            </div>
        );        
    }       
};


export default RecommendList;




