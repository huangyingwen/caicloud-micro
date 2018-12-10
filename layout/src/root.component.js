import React from "react";
import { Layout } from "snowy/pro";

import Menu from "./components/menu";
import * as styles from "./root.component.m.less";

const { Sider, Header, Content } = Layout;

export default class Root extends React.Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    let brs = [];
    for (let i = 0; i < 1000; i++) {
      brs.push(<br key={i} />);
    }
    return (
      <Layout className={styles.layout1}>
        <Sider className={styles.sider}>
          <Menu />
        </Sider>
        <Layout className={styles.layout2}>
          <Header className={styles.header}>
            <div className={styles.headerLeft}>
              <span>总览</span>
            </div>
            <div className={styles.headerRight} />
          </Header>
          <Content className={styles.content}>
            <div id="apps" />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
