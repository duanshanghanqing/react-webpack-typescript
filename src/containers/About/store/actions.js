export const SET_USERIOFO = 'SET_USERIOFO';

export const SET_B_COMPONENT = 'SET_B_COMPONENT';

// 同步设置状态
export const setUserInfo = data => ({
  type: SET_USERIOFO,
  data,
});

// 异步设置状态
export const asyncSetUserInfo = data => (dispatch, getState) => {
  const { about } = getState();
  console.log(about);
  // 模拟异步请求
  setTimeout(() => {
    dispatch(setUserInfo(data));
  }, 1000);
};

// 设置B组件到状态管理
export const setBComponent = data => ({
  type: SET_B_COMPONENT,
  data,
});
