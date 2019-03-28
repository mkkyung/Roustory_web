import React, { Component } from 'react';
import HomeContainer from '../containers/HomeContainer';
import CourseMakeContainer from '../containers/CourseMakeContainer';
import {Route, Switch} from 'react-router-dom';
import{ RecommendPage, ReviewDetailPage, ReviewPage, HeaderPage } from '../pages';
import MyPage from '../components/MyPage/Modify/index.js';
import Base from 'containers/common/Base';


import * as categoryActions from '../store/modules/category';

class App extends Component {
  render(){
  return (
    <div style={{width:'100%'}}>
      <HeaderPage/> 
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/calendar" component={CourseMakeContainer} />
        <Route path="/besttour" component={RecommendPage}/>
        <Route path="/review" component={ReviewPage}/>
        <Route path="/mypage" component={MyPage}/>
        <Route exact path="/reviewlist" component={ReviewPage}/>
        <Route path="/reviewlist/:course_cd" component={ReviewDetailPage}/>
      </Switch>
      <Base/>
    </div>
  );
}
}

export default App;

// export default class App extends Component {
//   render() {
//     return (
//         <div style={style}>
//             <HeaderContainer></HeaderContainer>
//             {/* <Header>
//               <LoginModalContainer/>
//             </Header>
//             <Switch>
              // <Route exact path="/" component={Home}/>
              // <Route path="/calendar" component={ListPage}/>
              // <Route path="/besttour" component={RecommendPage}/>
              // <Route path="/review" component={ReviewDetailPage}/>
              // <Route path="/mypage" component={myPage}/>
              // <Route path="/reviewlist" component={ReviewPage}/>
//             </Switch>
//             <Switch>

//             </Switch>
//             <HomeContainer>
                
//             </HomeContainer> */}
//           {/* <Header></Header>
//           <Switch>
//             <Route exact path="/" component={Home}/>
//             <Route path="/calendar" component={ListPage}/>
//             <Route path="/besttour" component={RecommendPage}/>
//             <Route path="/review" component={ReviewDetail}/>
//           </Switch>
//           <Switch>

//           </Switch> */}
//         </div>
//     )
//   }
// }
