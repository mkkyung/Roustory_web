import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import Cover from '../components/home/Cover';
import PopularCard from '../components/home/PopularCard';
import RecommendCourse from '../components/home/RecommendCourse';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as categoryActions from '../store/modules/category';

class HomeContainer extends Component {

    componentDidMount = () => {
      this.getCourseDB()
      this.getRecommendDB()
      this.getPopularDB()
    }
    

    getCourseDB = () => {
        const { CategoryActions, coursDB } = this.props;
            CategoryActions.coursDB();
    }

    getRecommendDB = () => {
        const { CategoryActions, recommendCategorys } = this.props;
            CategoryActions.recommendDB();
    }

    getPopularDB = () => {
        const { CategoryActions, recommendCategorys } = this.props;
            CategoryActions.popularDB();
    }

    coverToggle = (index) => {
        const { CategoryActions, coverCategorys, testDB } = this.props;
        coverCategorys.toJS().forEach((item, i) => {
            let bool = index === i ? true : false;
            let selected = item.selected
            CategoryActions.coverSelectCategory({ selected, bool, i });
        });
    }

    popularCardToggle = (index) => {
        const { CategoryActions, reviewCategorys } = this.props
        reviewCategorys.toJS().forEach((item, i) => {
            let bool = index === i ? true : false;
            let selected = item.selected
            CategoryActions.popularCardSelectCategory({ selected, bool, i })
        })
    }

    popularLikeToggle = (first_index, second_index, isLike) => {
        const { CategoryActions, reviewContents } = this.props
        CategoryActions.popularCardSelectLike({ first_index, second_index, isLike })
    }

    recommendToggle = (index) => {
        const { CategoryActions, recommendCategorys } = this.props;
        recommendCategorys.toJS().forEach((item, i) => {
            let bool = index === i ? true : false;
            let selected = item.selected
            CategoryActions.recommendSelectCategory({ selected, bool, i });
        });
    }

    recommendSlide = (num) => {
        const { CategoryActions, recommendCategorys } = this.props;
        recommendCategorys.toJS().forEach((item, i) => {
            if(item.selected){
                CategoryActions.recommendSlide({ i, num });
            }
        });
    }

    recommendInit = (num) => {
        const { CategoryActions, recommendCategorys } = this.props;
        recommendCategorys.toJS().forEach((item, i) => {
            if(item.selected){
                CategoryActions.recommendSlideInit({ i, num });
            }
        });
    }
    
    render() {
        console.log(this.props.recommendCategorys.toJS())
        return (
            <Fragment>
                <Cover onCategory={this.props.courseDB} onToggle={this.coverToggle} >
                </Cover>
                <PopularCard onCategory={this.props.reviewCategorys} onToggle={this.popularCardToggle} onLike={this.popularLikeToggle} >
                </PopularCard>
                <RecommendCourse onCategory={this.props.recommendCategorys} onToggle={this.recommendToggle} 
                onSlide={this.recommendSlide} onSlideInit={this.recommendInit} >
                </RecommendCourse>
            </Fragment>

        );
    }
}

export default connect(
    (state) => ({
        courseDB: state.category.getIn(['coursData']),
        coverCategorys: state.category.getIn(['coursData']),
        reviewCategorys: state.category.getIn(['reviewData']),
        reviewContents: state.category.getIn(['reviewData']),
        recommendCategorys: state.category.getIn(['recommendData']),
        recommendSlide: state.category.getIn(['recommendData']),
        recommendSlideInit: state.category.getIn(['recommendData']),
    }),
    (dispatch) => ({
        CategoryActions: bindActionCreators(categoryActions, dispatch)
    })
)(HomeContainer)