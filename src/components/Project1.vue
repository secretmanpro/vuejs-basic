<template>
  <div class="hello">
      <!-- {{name}} <br>
      {{ btnState?'The button is disabled':'The button is active'}}
      <button v-on:click="btnChangeName" v-bind:disabled="btnState">Change Your Name</button>
       -->
      <div class="holder">
        <ul>
          <!--index là cái ko bắt buộc-->
          <li v-for="(item,index) in skills" :key='index'>{{index}}-{{item.skill}}</li>
        </ul>
        <p v-if="skills.length >=1">You hava more than 1 skill</p>
        <p v-else>You have only 1 skill</p>
        <br>
        <!--v-bind với thuộc tính class là object chứa các class kiểu 1-->
        <div v-bind:class="{alert:showAlert,'another-class':showMess}">Sử dụng thuộc tính class là 1 object kiểu 1</div>
        <!--v-bind với thuộc tính class object chứa các class kiểu 2-->
        <div v-bind:class="objectClass">Sử dụng thuộc tính class là 1 object kiểu 2</div>

        <!--v-bind với thuộc tính style là 1 object-->
        <div v-bind:style="{backgroundColor:bgColorStyle,width:widthStyle,height:heightStyle,border:borderStyle}">Sử dụng thuộc tính style là 1 object</div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Project1',
 
    data(){
      return {
        // name:'Thanh tam',
        // btnState:true
        showAlert:true,
        showMess:true,
        skills:[
          {"skill":"Front-end Dev"},
          {"skill":"Back-end Dev"}
        ],
        objectClass:{
          alert1:true,
          "another-class1":true
        },
        bgColorStyle:"blue",
        widthStyle:"100%",
        heightStyle:"400px",
        borderStyle:"solid 2px yellow"
      }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style src="./skill.css" scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>-->
<style  scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.alert{
  background: yellow;
  width:100%;
  height: 300px;
}
.another-class{
  border:solid 2px black;
}
.alert1{
  background: #42b983;
  width:100%;
  height: 300px;
}
.another-class1{
  border:solid 2px red;
}
</style>