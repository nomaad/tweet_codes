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
                <input class="form-control form-control-lg" type="text" placeholder="Enter Code" v-model="tweet.code">
              </div>
              <div class="col-4">
                <button @click.prevent="updateTweet(tweet)" class="btn btn-primary btn-lg float-right">Save &amp; Next</button>
              </div>
            </div>
          </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h5>Coding Scheme:</h5>
        <table class="table table-striped">
          <tr>
            <th scope="row">0</th>
            <td><b>N/A</b></td>
            <td>The tweet content does not match any of the codes.</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td><b>Solutionist</b></td>
            <td>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><b>Covidiot</b></td>
            <td>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tweet: {}
    };
  },
  methods: {
    updateTweet(tweet) {
      let apiURL = `http://localhost:9000/api/update-tweet/${tweet._id}`;
      console.log(tweet)
      axios.post(apiURL, this.tweet).then((res) => {
        console.log(res)
        //this.$router.push('/view')
        }).catch(error => {
          console.log(error)
        });
    }
  },
  mounted() {
    axios.get("http://localhost:9000/api/random-tweet")
      .then(res => {
        this.tweet = res.data;
        this.$set(this.tweet, 'code', 0)
        console.log(this.tweet)
      })
      .catch(error => {
        console.log(error)
        // Manage errors if found any
      })
  }
};
</script>
