import { HashRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
  loader: () => import(/* webpackChunkName: "resultcom" */ 'views/result/index'),
  loading () {
    return <Loading show='true'/>
  }
});

// 动画加路由配置
const Base = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/index' component={Index} />
        <Route path='/result' component={Result}/>
      </Switch>
    </HashRouter>
  );
};

export default Base;