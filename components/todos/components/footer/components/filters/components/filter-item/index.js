import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

export const FilterItem = ({
  selected,
  children,
  to
}) => (
  <li className={styles["filter-item"]}>
    <Link href={to} className={selected ? 'selected' : ''}>
      {children}
    </Link>
  </li>
);

export default FilterItem;
