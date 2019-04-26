import React from 'react';
import { ThemeContext } from '../ThemeContext';
// 不耦合业务切换主题
export default () => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <button
        type="button"
        onClick={toggleTheme}
        style={{ backgroundColor: theme.background }}
      >
                不耦合业务切换主题
      </button>
    )}
  </ThemeContext.Consumer>
);
