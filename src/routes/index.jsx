// 基本路由模块
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Loadable from 'react-loadable';
import Loading from '@tbj/wheel/components/loading'

// 页面
// import Index from 'views/index/index';
const Index = Loadable({
  loader: () => import(/* webpackChunkName: "indexcom" */ 'views/index/index'),
  loading () {
    return <Loading show='true' />
  }
});

// import Result from 'views/result/index';
const Result = Loadable({
  moduleName: 'tt',
  loader: () => import(/* webpackChunkName: "resultcom" */ 'views/result/index'),
  loading () {
    return <Loading show='true'/>
  }
});

class Routes extends React.component {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames='fade'
        timeout={300}>
        <Switch localtion={location}>
          <Redirect exact from='/' to='/index' />
          <Route path='/index' component={Index} />
          <Route path='/result' component={Result} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
};

export default RouterConfig;