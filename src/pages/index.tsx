import React from 'react';
import styles from './index.less';
import { FormattedMessage } from 'umi';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>{<FormattedMessage id="TITLE" />}</h1>
    </div>
  );
};
