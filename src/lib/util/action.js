import Vue from 'vue';

const Action = {
  fullScreen: async () => {
    try {
      await Vue.prototype.$q.fullscreen.toggle();
    } catch (e) {
      try {
        await Vue.prototype.$q.capacitor.fullScreen();
      } catch (e) {
      }
    }
  }
}

Action.install = function (Vue, options) {
  Vue.prototype.$action = Action
};

export default Action;
