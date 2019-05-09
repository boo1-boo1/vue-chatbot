import store from '..';
import queryDialogflow from '../../api/api';

export default {
  state: {
    messages: [],
  },
  mutations: {
    addMessage(state, payload) {
      state.messages = [...state.messages, payload.message];
    },
  },
  actions: {
    sendMessage({ commit }, payload) {
      const userMessage = {
        author: 'me',
        type: 'text',
        data: {
          text: payload.message,
        },
      };
      commit('addMessage', { message: userMessage });

      queryDialogflow(payload.message, store.state.auth.uid).then((res) => {
        console.log(res);
        let botReply;
        if (res.data.message === 'text') {
          botReply = {
            author: 'krypto',
            type: 'text',
            data: {
              text: typeof res.data.text.text[0] === 'number' ? res.data.toString(10) : res.data.text.text[0],
            },
          };
        } else if (res.data.message === 'quickReplies') {
          botReply = {
            author: 'krypto',
            type: 'text',
            data: {
              text: 'Choose an option',
            },
            suggestions: res.data.quickReplies.quickReplies,
          };
        }
        commit('addMessage', { message: botReply });
      }).catch((err) => {
        const botReply = {
          author: 'krypto',
          type: 'text',
          data: {
            text: 'There was an error connecting to Dialogflow',
          },
        };
        commit('addMessage', { message: botReply });
      });
    },
  },
};
