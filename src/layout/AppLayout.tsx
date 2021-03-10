import React, { useCallback, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import PageNotFound from './PageNotFound';
import MainMenu, { flattenRoutes } from './MainMenu';

const { Header, Content, Footer, Sider } = Layout;

const routes = flattenRoutes();

export default function AppLayout(): React.ReactElement {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapseHandler = useCallback((nextCollapsed: boolean) => {
    setCollapsed(nextCollapsed);
  }, [setCollapsed]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapseHandler}>
        <MainMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
              {routes}
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©Copyright Piotr Woloszun</Footer>
      </Layout>
    </Layout>
  );
}
