import { createStore } from 'vuex';
import home from './modules/home';
import detail from './modules/detail';

export default createStore({
  modules: {
    home,
    detail
  }
});
