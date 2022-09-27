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
  const bgColor = color || 'rgb(10, 160, 10)';

  return (
    <Flex className={styles.loaderWrapper}>
      <div className={styles.ldsDefault}>
        <div style={{ background: bgColor }} />
        <div style={{ background: bgColor }} />
        <div style={{ background: bgColor }} />
        <div style={{ background: bgColor }} />
        <div style={{ background: bgColor }} />
        <div style={{ background: bgColor }} />
        <div style={{ background: bgColor }} />
        <div style={{ background: bgColor }} />
        <div style={{ background: bgColor }} />
        <div style={{ background: bgColor }} />
        <div style={{ background: bgColor }} />
        <div style={{ background: bgColor }} />
      </div>
    </Flex>
  );
};

export default Loader;
