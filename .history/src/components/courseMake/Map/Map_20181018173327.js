import React, { Component, Fragment } from 'react'
import classNames from 'classnames/bind';
import styles from './Map.scss';
import _ from 'lodash';
import { Map as NaverMap, withNavermaps, loadNavermapsScript, Marker } from 'react-naver-maps'
// import NaverMap from 'react-naver-map'

import Loadable from 'react-loadable'
import $ from 'jquery';
const cx = classNames.bind(styles);

const Map = ({ onMapData, onCourseData, onMapToggle }) => {
    const mapData = onMapData.toJS()
    console.log(mapData)
    const courseData = onCourseData.toJS()
    console.log(courseData)
    return (

        <div className={cx('map-container')}>
            <div className={cx('map-container2')} >
                <NaverMap
                    style={{ width: "100%", height: "100%" }}

                    zoom={mapData[0].zoom}
                    zoomControl = {true}
                    onZoomChanged={(zoom) => { mapData[0].zoom }}

                    center={mapData[0].center}
                    onCenterChanged={(center) => { mapData[0].center }}
                >
                    {courseData.map((course, i) => {
                        return (
                            <Marker
                                key={i}
                                position={new window.naver.maps.LatLng(course.Tour_gps_lat, course.Tour_gps_lon)}
                                title={course.Tour_nm}

                                // infoWindow = {infowindow}
                                // onZoomChanged={(zoom) => { course.zoom }}
                                // onCenterChanged={(center) => { course.center }}
                                onClick={() => {
                                    onMapToggle(i)
                                }}
                            >
                            </Marker>

                        )
                    })}
                </NaverMap>
            </div>
        </div >
    )
}

export default Map