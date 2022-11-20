<template>
  <div class="body">
    <main class="main">
<RouterView></RouterView>
    </main>
    <div class="footer">
      <FooterMine></FooterMine>
    </div>

  </div>
</template>

<script>
import FooterMine from "../src/components/Footer.vue"

import PageOne from '../src/pages/vote.vue';
export default {
  name: 'App',
  components: {
    FooterMine,
    PageOne
  }
}
</script>

<style>
.body {
  width: 100%;
  height: 667px;
  padding: 0;
  flex: 1;
}

.header {
  width: 100%;
  height: 8%;
  text-align: center;
  background-color: red;
  color: aliceblue;

}

.main {
  width: 100%;
  height: 80%;

}

.footer {

  display: flex;
  text-align: center;
  flex: 1;
}
</style>
