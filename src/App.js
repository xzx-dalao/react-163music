import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom'

import { BackTop } from 'antd';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import routes from './router';
import store from './store';

import XZXAppHeader from '@/components/app-header';
import XZXAppFooter from '@/components/app-footer';
import XZXAppPlayerBar from './pages/player/app-player-bar'


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
export default memo(function App() {

  return (
    <Provider store={store}>
      <HashRouter>
        <XZXAppHeader />
        <Suspense fallback={<div><Spin indicator={antIcon} /></div>}>
          {renderRoutes(routes)}
        </Suspense>
        <XZXAppFooter />
        <XZXAppPlayerBar />
        <BackTop />
      </HashRouter>
    </Provider>

  )
})
