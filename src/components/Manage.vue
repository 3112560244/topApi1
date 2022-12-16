<template>
  <div>
    <el-header style="height: 18vh">
      <el-card style="width: 50%;margin:0 auto">
        <Aside/>
      </el-card>
    </el-header>

    <el-main >
      <router-view/>
    </el-main>

  </div>
</template>

<script>
import Aside from "@/Aside";
import Header from "@/Header";
export default {
  name: "Manage",
  components: {Aside,Header},

}
</script>

<style scoped>

</style>