<template>
  <div>
    <ul>
      <li v-for="(message) in messages" :key="message.id">
        <!-- <a href="???">{{message.title}}</a> -->
        <router-link :to="`/home/message/messagedetail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    //一开始messages是没有显示的
    return {
      messages: []
    };
  },

  methods: {
    pushShow(id) {
      this.$router.push(`/home/message/messagedetail/${id}`);
    },
    replaceShow(id) {
      this.$router.replace(`/home/message/messagedetail/${id}`);
    }
  },
  mounted() {
    //异步
    //模拟ajax请求从后台获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: "message001"
        },
        {
          id: 2,
          title: "message002"
        },
        {
          id: 3,
          title: "message003"
        }
      ];
      this.messages = messages; //这一步不可以忘记，修改值
    }, 1000);
  }
};
</script>

<style>
</style>