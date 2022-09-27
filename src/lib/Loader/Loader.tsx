import React from 'react';

import Flex from '../Flex/Flex';

import { LoaderType } from './types';

import styles from './styles.module.css';

/**
 *Loader component
 *
 * @param {*} { color }
 * @return {*}
 */

const Loader: React.FC<LoaderType> = ({ color }) => {
  return (
    <Flex className={styles.loaderWrapper}>
      <div className={styles.ldsDefault}>
        {new Array(12).map((el) => (
          <div style={{ background: color || 'rgb(10, 160, 10)' }} key={el} />
        ))}
        <div />
      </div>
    </Flex>
  );
};

export default Loader;
