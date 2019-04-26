import React from 'react';
/*
创建一对 { Provider, Consumer }。当 React 渲染 context 组件 Consumer 时，
它将从组件树的上层中最接近的匹配的 Provider 读取当前的 context 值。
*/
export const themes = {
  light: {
    color: '#ffffff',
    background: '#222222',
  },
  dark: {
    color: '#000000',
    background: '#eeeeee',
  },
};

export const ThemeContext = React.createContext(
  themes.dark, // 默认值
);
