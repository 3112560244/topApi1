<template>
  <div id="main">
    <h1>top</h1>
    {{this.data.update_time}}
    {{this.data.title}}
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>

export default {
  name: "TopNews",

  data(){
    return{
      data :[]
    }
  },
  created() {
    this.load()
  },

  methods:{
    load(){
      this.request.get("/top?id=100003").then(res =>{


        this.data = res.data
        console.log(this.data)
      })
    }
  }
}

</script>

<style scoped>

</style>