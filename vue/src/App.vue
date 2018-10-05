<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
      console.log("connect");
      let self = this
      setInterval(()=>{
        self.$socket.emit("chat","test body");
      },1000)
    },
    disconnect() {
      this.isConnected = false;
      console.log("disconnect");
    },
    res(data){
      console.log("res:",data);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
