import React from 'react';
import styles from './index.module.scss';

export const Footer = () => (
  <footer className={styles["info"]}>
    <p>Double-click to edit a todo</p>
    <p>Created by <a href="http://github.com/hazmi/TodoMVC">Hazmi</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
);

export default Footer;
