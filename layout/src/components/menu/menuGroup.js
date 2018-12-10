import { Component } from "react";
import PropTypes from "prop-types";

import * as styles from "./menuGroup.m.less";
import MenuParent from "./menuParent";
import MenuItem from "./menuItem";

export default class MenuGroup extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  renderItems() {
    const {
      data: { children }
    } = this.props;

    const menus = [];

    for (let [key, value] of Object.entries(children)) {
      if (value.children) {
        menus.push(<MenuParent key={key} data={value} />);
      } else {
        menus.push(<MenuItem key={key} data={value} />);
      }
    }

    return menus;
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <div className={styles.name}>
          <div className={styles.text}>{data.group}</div>
        </div>
        <div>{this.renderItems()}</div>
      </div>
    );
  }
}
