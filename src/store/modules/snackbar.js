const state = {
    opened: false,
    message: '',
    color: 'success'
  };
  
  const getters = {
    isSnackbarOpened(state) {
      console.log(state.opened)
      return state.opened;
    },
    getSnackbarMessage(state) {
      return state.message;
    },
    getSnackbarColor(state) {
      return state.color;
    }
  };
  
  const mutations = {
    showMessage(state, { message, color='success' }) {
      console.log(state)
      state.opened = true;
      state.message = message;
      state.color = color;
      console.log(state)
    },
    hideMessage(state) {
      state.opened = false;
      state.message = '';
      state.color = 'success';
    }
  };
  
  export default {
    state,
    getters,
    mutations
  };
  