<template>
<div class="row">
  <div class="col-12">
    <div class="row">
      <div class="col-12">
          <div class="shadow p-3 mb-5 mt-5 bg-light rounded">
            <p><i>Tweet:</i></p>
            <h5>{{ tweet.text }}</h5>
            <p class="small">ID: {{ tweet.ID }}| Date: {{tweet.datetime}} </p>
            <div class="row">
              <div class="col-12">
                <hr />
              </div>
              <div class="col-4">
                <!--<button type="button" class="btn btn-primary btn-lg ">Previous</button>-->
              </div>
              <div class="col-4">
                <input @focus="$event.target.select()" ref="code" class="form-control form-control-lg" type="text" placeholder="Enter Code" v-model="tweet.code">
              </div>
              <div class="col-4">
                <button @click.prevent="updateTweet(tweet)" class="btn btn-primary btn-lg float-right">Save &amp; Next</button>
              </div>
            </div>
          </div>
      </div>
    </div>

    <CodeScheme msg="Coding Scheme" />
  </div>
</div>
</template>

<script>
import axios from "axios";
import CodeScheme from "@/components/CodeScheme.vue";

export default {
  data() {
    return {
      tweet: {}
    };
  },
  components: {
    CodeScheme
  },
  methods: {
    loadRandomTweet(){
      axios.get("http://localhost:9000/api/random-tweet")
        .then(res => {
          this.tweet = res.data;
          if(this.tweet.code == null){
            this.$set(this.tweet, 'code', null) //add a new property
          }
          console.log(this.tweet)
          this.$refs.code.focus();
        })
        .catch(error => {
          console.log(error)
          // Manage errors if found any
        })
    },
    updateTweet(tweet) {
      if(tweet.code == null){
        this.$refs.code.focus();
        return;
      }
      let apiURL = `http://localhost:9000/api/update-tweet/${tweet._id}`;
      console.log(tweet)
      axios.post(apiURL, this.tweet).then((res) => {
        console.log(res)
        this.loadRandomTweet() //load a new random tweet
        }).catch(error => {
          console.log(error)
        });
    },
    keystrokeListener(event) {
      if (event.key === "Enter" || event.key === "ArrowRight") {
        this.updateTweet(this.tweet)
      }
    }
  },
  created() {
    window.addEventListener("keydown", this.keystrokeListener);
  },
  // make sure you remove the listener when the component is no longer visible
  destroyed() {
    window.removeEventListener("keydown", this.keystrokeListener);
  },
  mounted() {
    this.loadRandomTweet()
  }
};
</script>
