<template>
    <div class="container">
        <div class="holder">
            <form @submit.prevent="addSkill">
            <input type="text" placeholder="Enter your skills..." v-model="skill"
            v-validate="'min:5'" name="skill"/>
            <p class="errorForm" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
            <!-- {{skill}} -->
            <!-- <input type="checkbox" v-model="checked"/> -->
            </form>
            <ul>
                <li v-for="(data, index) in skills" :key='index'>{{data.skill}}</li>
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
                    if(result){
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
</style>