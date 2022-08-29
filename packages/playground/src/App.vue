
<style scoped>
  .chatbox-wrapper {
    width: 500px;
    height: 600px;
    background-color: rgb(207, 219, 231);
    border-radius: 4px;
    overflow: hidden;
  }
  
  .record-wrapper {
    width: 500px;
    height: 550px;
    display: flex;
    flex-direction: column;
    color: #000;
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 20px;
    box-sizing: border-box;
  }
  
  .record {
    margin-top: 18px;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 8px;
    max-width: 400px;
    text-align: left;
  }
  
  .record-robot {
    background-color: #fff;
    align-self: flex-start;
    margin-left: 12px;
  }
  
  .record-user {
    background-color: rgb(171, 233, 171);
    align-self: flex-end;
    margin-right: 12px;
  }
  
  .post-input {
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: black 1px solid;
    height: 50px;
  }
  </style>
  
  <template>
    <div class="chatbox-wrapper">
      <div class="record-wrapper">
        <div v-for="item in chatRecord" :key="item.time" class="record"
          :class="item.type === 'robot' ? 'record-robot' : 'record-user'">
          {{ item.content }}
        </div>
      </div>
      <input class="post-input" type="text" placeholder="试着打个招呼吧！" @keydown.enter="submit" />
    </div>
  </template>
  
  <script setup>
  import { reactive } from "vue"
  import { ask } from "my-chatter-bot"
  
  const chatRecord = reactive([])
  async function submit(e) {
    const words = e.target.value
    e.target.value=''
    pushChatRecord(words, 'user')
    const reply = await ask(words);
    pushChatRecord(reply, 'robot')
  }
  function pushChatRecord(content, type) {
    chatRecord.push({ content, type, time: new Date().toString() })
  }
  </script>