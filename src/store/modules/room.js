/* eslint-disable */
import SongGuesser from '../../service/song-guesser';

const state = {
  songGuesser: {},
  game: {},
  socket: null
};

const getters = {
  setSocket(state, socket) {
    state.socket = socket;
  },
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
    initWebSocket({ commit, dispatch }, { url, roomCode }) {
      const socket = new WebSocketConnection();
      socket.connect(url);
  
      socket.onMessage((data) => {
        // Handle the received data here
        console.log("Received data:", data);
        // You can dispatch other actions depending on the received data
        // For example: dispatch("updateGameState", data);
      });
  
      commit("setSocket", socket);
    },
  
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
  async joinOrCreateRoom({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const gameCode = payload.gameCode ? payload.gameCode + '/' : '';
        console.log(gameCode)
        const socket = new WebSocket(`ws://localhost:8000/ws/room/${gameCode}`);
  
        socket.onopen = () => {
          socket.send(JSON.stringify({
            action: 'join_or_create',
            data: { name: payload.name }
          }));
        };
  
        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data.success) {
            // Store the socket instance somewhere in the state or in a Vue instance
            resolve();
          } else {
            reject(data.error);
          }
        };
      } catch (error) {
        reject(error);
      }
    });
  },

  async startGame({ commit, state }, params) {
    // ...
    if (state.socket) {
      // You can send a message to the WebSocket server after starting the game
      state.socket.sendMessage({ type: "start_game", params });
    }
    // ...
  },
  async startNewRound({ commit, state }, params) {
    // ...
    if (state.socket) {
      // You can send a message to the WebSocket server to start a new round
      state.socket.sendMessage({ type: "start_round", params });
    }
    // ...
  },
  async checkAnswer({ commit, state }, params) {
    // ...
    if (state.socket) {
      // You can send a message to the WebSocket server to check the answer
      state.socket.sendMessage({ type: "check_answer", params });
    }
    // ...
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
