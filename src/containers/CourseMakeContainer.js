import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import Map from '../components/courseMake/Map';
import Basket from '../components/courseMake/Basket';
import Info from '../components/courseMake/Info';
import Setting from '../components/courseMake/Setting';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as mapActions from '../store/modules/map';
import { Transform } from 'stream';

var mapIndex

class HomeContainer extends Component {

    componentDidMount = () => {
        this.getTourDB()
    }

    getTourDB = () => {
        const { MapActions, courseDB } = this.props;
        MapActions.tourDB();
    }

    mapToggle = (index) => {
        mapIndex = index
        const { MapActions, courseDB } = this.props
        MapActions.selectCourse({ index })
    }

    close = (index) => {
        const { MapActions, courseDB } = this.props
        MapActions.closeCourse({ index })
    }

    selectItem = (index) => {
        const { MapActions, testDB } = this.props
        testDB.toJS().forEach((item,i)=>{
            let bool = index === i ? true : false;
            let selected = item.Course_selected
            MapActions.selectBasket({ selected, index, bool, i})
        })
    }

    render() {
        console.log(this.props.testDB.toJS())
        return (
            <Fragment>
                <Map onMapData={this.props.mapDB} onCourseData={this.props.testDB} onMapToggle={this.mapToggle} ></Map>
                <div style={{ width: '100%' }}>
                    <div style={{ width: '1200px', marginTop: '30px', left: '50%', transform: 'translate(-50%,0)' }} >
                        <Basket onCourseData={this.props.testDB} index={mapIndex} onMapToggle={this.mapToggle} onSelectItem={this.selectItem} ></Basket>
                        <Info onCourseData={this.props.testDB} onMapToggle={this.mapToggle} index={mapIndex}  ></Info>
                        {/* <Setting></Setting> */}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({
        mapDB: state.map.getIn(['mapData']),
        courseDB: state.map.getIn(['courseData']),
        testDB: state.map.getIn(['test'])
    }),
    (dispatch) => ({
        MapActions: bindActionCreators(mapActions, dispatch)
    })
)(HomeContainer)