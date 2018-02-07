import React from 'react';

import styles from './testComp.scss';

export class TestComp extends React.Component {
  state = {};

  cos = () => {
    this.setState({
      beka: window.globb,
    });
  }

  render() {
    return (
      <div>Hello aggg
        <div className={styles.amam}>component</div>
        <div className={styles.img}>component</div>
        <button onClick={this.cos}>xyz</button>
        <div>{JSON.stringify(this.state.beka)}</div>
      </div>
    );
  }
}

export default {};
