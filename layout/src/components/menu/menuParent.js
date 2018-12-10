import { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "snowy";
import classNames from "classnames/bind";

import * as icoPath from "../icoPath";
import MenuItem from "./menuItem";
import * as styles from "./menuParent.m.less";

const cxStyle = classNames.bind(styles);

export default class MenuParent extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const { data } = this.props;

    let menus = [];
    if (data.children) {
      for (let [key, value] of Object.entries(data.children)) {
        menus.push(<MenuItem key={key} data={value} />);
      }
    }

    return (
      <div>
        <div
          className={cxStyle({
            name: true,
            ripple: true
          })}
        >
          <Icon type={data.icoPath} className={styles.textIco} />
          <span>{data.text}</span>
          <Icon type={icoPath.arrow} className={styles.parentIco} />
        </div>
        <div className={styles.childs}>{menus}</div>
      </div>
    );
  }
}
