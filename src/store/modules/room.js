import SongGuesser from '../../service/song-guesser';

const state = {
  songGuesser: {},
  game: {}
};

const getters = {
  getSongGuesser(state) {
    return state.songGuessers;
  },
};

const mutations = {
  setSongGuesser(state, payload) {
    state.songGuesser = {...state.songGuesser, ...payload};
  },

};

const actions = {
  async fetchSongGuesser({ commit }, params) {
    try {
      commit("setSongGuesser", await SongGuesser.get(params));
    } catch (error) {
      commit("showMessage", {
        message: error.error,
        color: "error",
      });
    }
  },
  async startGame({ commit }, params) {
    try {
      commit("setSongGuesser", await SongGuesser.startGame(params));
      return true
    } catch(error) {
      commit("showMessage", {
        message: error.error,
        color: "error",
      });
      return false
    }
  },
  async startNewRound({ commit }, params) {
    try {
      commit("setSongGuesser", await SongGuesser.startNewRound(params));
      return true
    } catch(error) {
      return false
    }
  },
  async checkAnswer({ commit }, params) {
    try {
      const data = await SongGuesser.checkAnswer(params)
      if (!data.answer) {
        commit("showMessage", {
          message: "Czas minął",
          color: "yellow",
        });
        return false
      }
      if (data.is_won)
        commit("showMessage", {message: "Dobra odpowiedź!", color: "success"});
      else
        commit("showMessage", {message: "Zła odpowiedź!", color: "red"});
    } catch(error) {
      commit("showMessage", {
        message: error.error,
        color: "error",
      });
      return false
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
