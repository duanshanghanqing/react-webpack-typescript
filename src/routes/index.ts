import Root from '../containers/Root';
import Home from '../containers/Home';
import Hello from '../containers/Hello';
// import CheckboxWithLabel from '../containers/CheckboxWithLabel';
// import Counter from '../containers/Counter';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/hello',
        exact: true,
        component: Hello,
      },
      // {
      //   path: '/checkboxWithLabel',
      //   component: CheckboxWithLabel,
      // },
      // {
      //   path: '/counter',
      //   component: Counter,
      // }
    ],
  },
];
