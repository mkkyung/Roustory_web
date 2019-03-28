import React, {Component} from "react";
import classNames from 'classnames/bind';
import styles from "./styles.scss";


const cx = classNames.bind(styles);

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            prettyRoute: 'number'
        };

        this.isSameRoute.bind(this);
    }

    isSameRoute (uri) {
        return (this.state.prettyRoute === uri) ? `${uri}--is-activate` : '';             
    }
    

    Numbering = () => {
        return (
            this.state.number.map((i) => {
                return (
                    <div className={cx('number', `${this.isSameRoute('number')}`)}>
                        <div className={cx('number-box')}>
                            {i}
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        return(
            <div className={cx('pagination-border-box')}>
                <div className={cx('left-box')}>
                    <div className={cx('left-icon-box')}>
                        <i  className={cx('fas fa-angle-left', 'left-icon')}></i>
                    </div>  
                </div>              
                {this.Numbering()}                                                          
                <div className={cx('right-box')}>
                    <div className={cx('right-icon-box')}>
                        <i  className={cx('fas fa-angle-right', 'right-icon')}></i>
                    </div>
                </div>
            </div>
        )
    }
}





export default Pagination;