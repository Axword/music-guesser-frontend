import RestObject from './rest-object';
import Rest from './rest';

class SongGuesser extends RestObject {
  constructor({ id, ...rest }) {
    super();
    this.id = id;
    Object.assign(this, rest);
  }
  static async startGame(params=null) {
    const rest = new Rest();
    try {
      const response = await rest.post(`start-game/`, params);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async checkAnswer(params=null) {
    const rest = new Rest();
    try {
      const response = await rest.post(`check-answer/`, params);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  static async startNewRound(params=null) {
    const rest = new Rest();
    try {
      const response = await rest.post(`start-new-round/`, params);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}

SongGuesser.URL = 'guesser/';

export default SongGuesser;