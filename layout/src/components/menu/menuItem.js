import { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "snowy";
import classNames from "classnames/bind";

import * as styles from "./menuItem.m.less";

const cxStyle = classNames.bind(styles);

export default class MenuItem extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  onClick = () => {
    const { data } = this.props;
    window.singleSpaNavigate(data.to);
  };

  render() {
    const { data } = this.props;
    return (
      <div
        className={cxStyle({
          name: true,
          ripple: true
        })}
        onClick={this.onClick}
      >
        {data.icoPath && (
          <Icon type={data.icoPath} className={styles.textIco} />
        )}
        <span className={cxStyle({ text: true, notIco: !data.icoPath })}>
          {data.text}
        </span>
      </div>
    );
  }
}
