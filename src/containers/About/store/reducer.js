import { SET_USERIOFO, SET_B_COMPONENT } from './actions';

const defaultState = {
  userInfo: {},
  B_Component: null,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERIOFO:
      return {
        ...state,
        userInfo: action.data,
      };
    case SET_B_COMPONENT:
      return {
        ...state,
        B_Component: action.data,
      };
    default:
      return state;
  }
};
