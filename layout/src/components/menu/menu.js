import { Component } from "react";
import { Icon } from "snowy";

import * as styles from "./menu.m.less";
import data from "./data";
import MenuGroup from "./menuGroup";
import MenuItem from "./menuItem";

import * as icoPath from "../icoPath";

export default class Menu extends Component {
  render() {
    const menuData = [];
    for (let [key, value] of Object.entries(data)) {
      if (!value.children) {
        menuData.push(<MenuItem key={key} data={value} />);
      }
      menuData.push(<MenuGroup key={key} data={value} />);
    }

    return (
      <div className={styles.root}>
        <div className={styles.logo}>logo</div>
        <div className={styles.btnExpand}>
          <Icon type={icoPath.dehaze} className={styles.icon} fill="#a0abbf" />
        </div>
        <div className={styles.menu}>{menuData}</div>
      </div>
    );
  }
}
