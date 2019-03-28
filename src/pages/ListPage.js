import React, {Fragment} from 'react';
import ListContainer from 'containers/list/ListContainer';
import HeaderContainer from 'containers/common/HeaderContainer';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import RegisterModalContainer from 'containers/modal/RegisterModalContainer';


const ListPage = () => {
    return(
        <Fragment>
            <ListContainer/>
        </Fragment> 
    )
};

export default ListPage;