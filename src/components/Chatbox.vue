<template>
  <div class="chatbox">
    <div class="container-fluid">
      <!--<div class="message_list">
        <ul class="list-group">
          <ChatMessage
            v-for="msg in messages"
            v-bind:message="msg"
            v-bind:key="msg.id"
          ></ChatMessage>
        </ul>
      </div>
      <form v-on:submit.prevent="sendMessage">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter message..."
            aria-label="Enter message..."
            aria-describedby="basic-addon2"
            v-model="message"
          >
          <div class="input-group-append">
            <input class="btn btn-dark" type="submit" value="Send">
          </div>
        </div>
      </form>-->
      <!--<iframe
        allow="microphone;"
        width="350"
        height="600"
        src="https://console.dialogflow.com/api-client/demo/embedded/b4d178a6-5390-4af6-8c9a-3e3354041cc6"
      ></iframe>-->
      <div>
        <beautiful-chat
          :participants="participants"
          :titleImageUrl="titleImageUrl"
          :onMessageWasSent="onMessageWasSent"
          :messageList="messageList"
          :newMessagesCount="newMessagesCount"
          :isOpen="isChatOpen"
          :close="closeChat"
          :open="openChat"
          :showEmoji="false"
          :showFile="false"
          :showTypingIndicator="showTypingIndicator"
          :colors="colors"
          :alwaysScrollToBottom="alwaysScrollToBottom"
          :messageStyling="messageStyling"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Chat from 'vue-beautiful-chat';

import queryDialogflow from '../api/api';

Vue.use(Chat);

export default {
  name: 'chatbox',
  data() {
    return {
      participants: [
        {
          id: 'krypto',
          name: 'Krypto',
          imageUrl:
            'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4',
        },
      ],
      titleImageUrl:
        'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      // messageList: [
      /* {
          type: "text",
          author: "me",
          data: { text: "Why don't they have salsa on the table?" }
        },
        {
          type: "text",
          author: "me",
          data: { text: "What do you need salsa for?" }
        },
        {
          type: "text",
          author: "me",
          data: { text: "What about suggestions?" },
          suggestions: [
            "Looks good!",
            "It's OK.",
            "Uhh.. Do I really have to say something?"
          ]
        } */
      // ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff',
        },
        launcher: {
          bg: '#4e8cff',
        },
        messageList: {
          bg: '#ffffff',
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff',
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222',
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867',
        },
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: true,
      messageStyling: false,
    };
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1;
        const userMessage = {
          author: 'me',
          type: 'text',
          data: { text },
        };
        this.onMessageWasSent(userMessage);
      }
    },
    onMessageWasSent(message) {
      this.$store.dispatch('sendMessage', { message: message.data.text });
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
  },
  computed: {
    messageList() {
      return this.$store.state.messages.messages;
    },
  },
};
</script>


<!--<script>
import ChatMessage from './ChatMessage.vue';

export default {
  name: 'Chatbox',
  data() {
    return {
      message: '',
      messages: [],
    };
  },
  methods: {
    sendMessage() {
      if (this.message) {
        const newMessage = { id: this.messages.length, text: this.message };
        this.messages.push(newMessage);
        this.message = '';
      }
    },
  },
  components: {
    ChatMessage,
  },
};
</script>-->

<style scoped>
.message_list {
  align-items: baseline;
  height: 80vh;
  overflow: scroll;
}
</style>
