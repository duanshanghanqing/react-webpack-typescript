import Root from '../containers/Root';
import Home from '../containers/Home';
import CheckboxWithLabel from '../containers/CheckboxWithLabel';
import Counter from '../containers/Counter';

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
        path: '/checkboxWithLabel',
        component: CheckboxWithLabel,
      },
      {
        path: '/counter',
        component: Counter,
      }
    ],
  },
];
