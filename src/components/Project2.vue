
<template>

    <div class="container">
        <div class="holder">
            <form @submit.prevent="addSkill">
            <input type="text" placeholder="Enter your skills..." v-model="skill"
            v-validate="'min:5'" name="skill"/>
        
            <!-- <p class="errorForm" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
            {{skill}} -->
            <!-- <input type="checkbox" v-model="checked"/> -->
            <!--Hiệu ứng cho mess thông báo lỗi, sử dụng tag transition-->
        
            <transition name="errorForm-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                <p class="errorForm" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
            </transition>

            </form>
           
            <ul>
                <transition-group name="list-skill" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                    <li v-for="(data, index) in skills" :key='index'>{{data.skill}}</li>
                </transition-group>
            </ul>
            
            <p>These are the skills that you possess.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Project2',

        data() {
            return {
                // checked:false,
                skill:"",
                skills: [{
                        "skill": "Front-end Dev"
                    },
                    {
                        "skill": "Back-end Dev"
                    }
                ],

            }

        },
        methods:{
            addSkill(){
                this.$validator.validateAll().then((result) =>{
                    if(this.skill == ""){
                        console.log("Your input do not empty");
                    }
                    else if(result){
                        this.skills.push({skill: this.skill});
                        this.skill='';
                    }
                    else{
                        console.log("Not validate");
                    }
                })
               
                // console.log(this.checked);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

    .holder {
        background: #fff;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ul li {
        padding: 20px;
        font-size: 1.3em;
        background-color: #E0EDF4;
        border-left: 5px solid #3EB3F6;
        margin-bottom: 2px;
        color: #3E5252;
    }

    p {
        text-align: center;
        padding: 30px 0;
        color: gray;
    }

    .container {
        box-shadow: 0px 0px 40px lightgray;
    }
   
    input {
        width: calc(100% - 40px);
        border: 0;
        padding: 20px;
        font-size: 1.3em;
        background-color: #323333;
        color: #687F7F;
   
    }
    p.errorForm{
        color: #a94442;
        background-color: #f2dede;
        border-color: #ebccd1;
        padding:10px;
    }
    
    /* tạo transiton, còn tạo animate thì thêm class của vue để sài animate.css dô */ 
    /* p.errorForm-in-enter-active{
        animation: bounce-in .5s;
    }
    p.errorForm-in-enter-leave{
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0%{
            transform: scale(0);
        }
        50%{
            transform: scale(1.5);
        }
        100%{
            transform: scale(1);
        }
    } */
</style>