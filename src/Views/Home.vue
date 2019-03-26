<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <!-- <li><a href="#home/news" class="router-link-exact-active activeClass">news</li>
        <li><a href="#home/message" class="">Message</li>-->
        <li>
          <router-link to="/home/news">News</router-link>
          <router-link to="/home/message">Message</router-link>
        </li>
      </ul>
      <div>
        <ul>
          <router-view></router-view>
        </ul>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>