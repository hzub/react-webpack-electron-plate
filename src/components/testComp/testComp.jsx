import React from 'react';

import styles from './testComp.scss';

export class TestComp extends React.Component {
  state = {};

  render() {
    return (
      <div>Hello aggg
        <div className={styles.amam}>component</div>
        <div className={styles.img}>component</div>
      </div>
    );
  }
}

export default {};
