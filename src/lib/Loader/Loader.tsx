import React from 'react';

import Flex from '../Flex/Flex';

import styles from './styles.module.css';

const Loader = (color?: 'rgb(10, 160, 10)') => {
  return (
    <Flex className={styles.loaderWrapper}>
      <div className={styles.ldsDefault}>
        {new Array(12).map((el) => (
          <div style={{ background: color }} key={el} />
        ))}
        <div />
      </div>
    </Flex>
  );
};

export default Loader;
