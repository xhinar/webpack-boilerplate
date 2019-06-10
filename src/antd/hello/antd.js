import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from 'antd';
import styles from './antd.less';

class HelloAntD extends React.Component {
  constructor() {
    super();

    this.state = {
      clicks: 0
    };
  }

  render() {
    const { message } = this.props;
    const { clicks } = this.state;

    return (
      <div>
        <h4 className="font_red_30px">{message}</h4>
        <Button
          type="primary"
          icon="check"
          onClick={() => {
            this.setState({
              clicks: clicks + 1
            });
          }}>
            Click me
        </Button>
        <Icon type="paycircle" />
        <br />
        <h5>{clicks} click{clicks == 1 ? '' : 's'}</h5>
      </div>
    );
  }
}

HelloAntD.propTypes = {
  message: PropTypes.string.isRequired
};


export default HelloAntD;
