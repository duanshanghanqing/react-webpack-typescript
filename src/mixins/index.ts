import libs from '../libs';
import plugin from '../plugin';

export default {
  getDefaultProps() {
    return {
      ...libs,
      ...plugin,
      name: 'React',
    };
  },
  setInterval() {

  },
};
