/*
import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export default () => (
  <div className="Header">
    <Link to="/">首页</Link>
    {'  '}
    <Link to="/about">About</Link>
    {'  '}
    <Link to="/counter">Counter</Link>
    {'  '}
    <Link to="/newfeatures">NewFeatures</Link>
    {'  '}
    <Link to="/iifecycle">IifeCycle</Link>
    {'  '}
    <Link to="/hooks">Hooks</Link>
    {'  '}
    <Link to={{
      pathname: '/context/123456',
      search: '?sort=name',
      hash: '#the-hash',
      state: { fromDashboard: true },
    }}
    >
Context
    </Link>
    {'  '}
    <Link to="/0000000000">404</Link>
  </div>
);
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';

export default () => (
  <div className="Header">
    {/* https://www.jianshu.com/p/6a45e2dfc9d9/ */}
    <NavLink exact to="/" activeClassName="selected" activeStyle={{ color: 'red' }}>首页</NavLink>
    {'  '}
    <NavLink exact to="/about" activeClassName="selected" activeStyle={{ color: 'red' }}>About</NavLink>
    {'  '}
    <NavLink exact to="/counter" activeClassName="selected" activeStyle={{ color: 'red' }}>Counter</NavLink>
    {'  '}
    <NavLink exact to="/newfeatures" activeClassName="selected" activeStyle={{ color: 'red' }}>NewFeatures</NavLink>
    {'  '}
    <NavLink exact to="/iifecycle" activeClassName="selected" activeStyle={{ color: 'red' }}>IifeCycle</NavLink>
    {'  '}
    <NavLink exact to="/hooks" activeClassName="selected" activeStyle={{ color: 'red' }}>Hooks</NavLink>
    {'  '}
    <NavLink
      exact
      to={{
        pathname: '/context/123456',
        search: '?sort=name',
        hash: '#the-hash',
        state: { fromDashboard: true },
      }}
      activeClassName="selected"
      activeStyle={{ color: 'red' }}
      // isActive={() => true}
    >
Context
    </NavLink>
    {'  '}
    <NavLink exact to="/pureComponent/demo1" activeClassName="selected" activeStyle={{ color: 'red' }}>pureComponent DEMO1</NavLink>
    {'  '}
    <NavLink exact to="/pureComponent/demo2" activeClassName="selected" activeStyle={{ color: 'red' }}>pureComponent DEMO2</NavLink>
  </div>
);
