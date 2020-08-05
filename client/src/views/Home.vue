<template>
  <div class="home">
    <ListTweets msg="List tweets" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListTweets from "@/components/ListTweets.vue";

export default {
  name: "home",
  components: {
    ListTweets
  }
};
</script>
