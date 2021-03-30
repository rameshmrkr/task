<template>
 <div class="github github-details">  
    <div class="cards wrapper">
       <div class="card j-container container m-30">
         <md-card class="job-header">
              <md-card-content>    
                <div class="logo">
                  <img v-bind:src="items.company_logo"/>
                </div>
                <div class="title">
                   <h4> {{ items.company}} </h4>
                   <p> {{ items.company_url}} </p>
                </div>
                 <div class="action">
                   <md-button class="md-raised md-primary">Company Site</md-button>
                 </div>               
              </md-card-content>    
          </md-card>
        </div>
      </div>
    <div class="cards wrapper">
       <div class="card j-container container">
          <md-card>
              <md-card-content>    
                <div class="card-title">
                  <div class="card-t-body">
                    <p>{{getDay(items.created_at)}}  {{items.type}}</p>
                    <h4> {{ items.title}} </h4>
                     <p> {{ items.location}} </p>
                  </div>
                  <div class="card-t-action">
                   <md-button class="md-raised md-primary">Apply Now</md-button>
                  </div>
                </div>
               
                <p v-html="items.description">/p>
                <p v-html="items.how_to_apply"></p>
                </md-card-content>    
          </md-card>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import axios from 'axios';
import AxiosPlugin from 'vue-axios-cors';

Vue.use(AxiosPlugin)
Vue.use(VueMaterial)

export default {
  name: 'JobDetails',
  props: {
    msg: String
  },
   methods: {
    getDay:function(date){
      let today = new Date().getDate() - new Date(date).getDate();
      if(today==0){
        return '';
      }
      else{
        return today+'d'+' > ';
      }
    }
  },
  data () {
    return {
      items: []
    }
  },
  
  mounted () {
  console.log("$route.params.id",this.$route.params.id);
  let id = this.$route.params.id;
    axios
      .get(`http://localhost:3000/positions/${id}.json`)
      .then(response => {
        console.log("response",response.data);
        this.items = response.data;
      })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

