import React, { Component } from 'react';
import style from './App.module.scss';
import {
  Link, Route, Routes,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import WorkDetail from './WorkDetail';
import WorkDetail2 from './WorkDetail2';
import WorkDetail3 from './WorkDetail3';
import WorkDetail4 from './WorkDetail4';

function withRouter(Component) {
  // React router v6不再支持wuthRouter所以用這個func來代替它的功能
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


class App extends Component {


  render() {
    const road = this.props.router;   // 將當前的路由給變數road

    return (
      <div className={style.App}>
        {/* 頭部導航 */}
        <header className={style.Header}>
          <div className={style.navigation_lab}>
            <Link to='/'> <div className={style.navigation_left}>navigation</div>  </Link>
            {/* link to+'導航地址',  "/"為首頁地址  */}
            <div className={style.navigation_right}>
              <Link to='/'><p className={road.location.pathname === '/' ? style.selected : null}>Home</p></Link>
              <Link to='/works'><p className={road.location.pathname === '/works' ? style.selected : null}>Works</p></Link>
            </div>
          </div>

        </header>
        {/* 內容區 */}
        <section className={style.Content}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/personelwebsite' element={<HomePage />} />
            <Route path='/works' element={<WorkPage />} />
            {/*這邊因為沒有使用後端的技能因此不採用動態路由獲取(寫法:works/:id)*/}
            <Route path='works/1' element={<WorkDetail />} />
            <Route path='works/2' element={<WorkDetail2 />} />
            <Route path='works/3' element={<WorkDetail3 />} />
            <Route path='works/4' element={<WorkDetail4 />} />
          </Routes>
        </section>
        {/* 底部 */}
        <footer className={style.Footer}>
          <p>© <b>2022 個人作品網站</b></p>
          <p>work by 吳浩維</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
