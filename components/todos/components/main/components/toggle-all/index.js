import React from 'react';
import styles from './index.module.scss';

export const ToggleAll = ({ toggleAll }) => (
  <div>
    <input
      id="toggle-all"
      className={styles["toggle-all"]}
      type="checkbox"
      onChange={(e) => toggleAll(e.target.checked)}
    />
    <label htmlFor="toggle-all" />
  </div>
);

export default ToggleAll;
