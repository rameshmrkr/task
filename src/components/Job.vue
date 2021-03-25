<template>
  <div class="github">
    
    <div class=" wrapper">
      <div class="container">
        <md-card class="filters">
          <md-card-content>   
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-medium-size-33 md-xsmall-size-100">
                <md-field>
                  <label>Filter by Name</label>
                  <md-input v-model="name"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-medium-size-20 md-xsmall-size-100">
                <md-field>
                  <label>Filter b location</label>
                  <md-input v-model="location"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-medium-size-20 md-xsmall-size-100">
                <md-checkbox v-model="fulltime" value="1">Full time only</md-checkbox>
              </div>
              <div class="md-layout-item md-medium-size-10 md-xsmall-size-100">
                <md-button class="md-raised md-primary" @click="getSearch()">Submit</md-button>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <div class="cards wrapper">   
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-medium-size-33 md-xsmall-size-100" v-for="item in items" :key="item.id">
            <div class="card">
              <md-card>
                  <md-card-content>    
                    <div>
                      <div class="md-img">
                        <img v-bind:src="item.company_logo"/>
                      </div>
                      <div class="md-body">
                        <p> {{getDay(item.created_at)}}  {{item.type}} </p>
                        <h3> {{item.title}} </h3>
                        <h4> {{item.location}} </h4>  
                      </div>
                    </div>
                  </md-card-content>    
                  <md-card-actions  md-alignment="left">
                    <router-link :to="item.id">{{item.company}} </router-link>       
                  </md-card-actions>                    
              </md-card>
            </div>
          </div>
        </div>
         <md-button class="md-raised md-primary" @click="getMore()">Load More..</md-button>
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
  name: 'Job',
  props: {
    msg: String
  },
   methods: {
     getJobList:function(pageno,location,fulltime,name){
          let url = "http://jobs.github.com/positions.json?";        
          if(location){
            url=url+`location=${location}`;
          }
          if(name){
            url=url+`&search=${name}`;
          }
          if(fulltime){
            url=url+`&full_time=${!!fulltime}`;
          }
          if(pageno){
            url=url+`&page=${pageno}`;
          }

           axios
          .get(url)
          .then(response => {
            console.log("response",response.data);
            if(pageno>1){
                this.items = [...this.items,...response.data];
            }
            else{
              this.items = response.data;
            }
          })
     },
     getMore:function(){
       this.pageno++;
       this.getJobList(this.pageno)
     },
     getSearch:function(){
       console.log(this.location);
      console.log(this.fulltime);
      console.log(this.name);
      this.getJobList(this.location,this.fulltime,this.name);
     },
    getDay:function(date){
      let today = new Date().getDate() - new Date(date).getDate();
      if(today==0){
        return '';
      }
      else{
        return today+'d'+' - ';
      }
    }
  },
  data () {
    return {
      items: [],
      location:'',
      fulltime:false,
      name:'',
      pageno:1
    }
  },
  
  mounted () {
    this.getJobList();
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


