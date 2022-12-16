<template>
  <div style="text-align: left; font-size: 12px;  line-height: 60px; display: flex">
    <!--        收缩按钮-->
    <div style="flex: 1;font-size: 24px">
      <span :class="collapseBtnClass" style="cursor: pointer; font-size: 18px" @click="collapse"></span>


      <!--   //主页页签显示当前页面的路径-->
      <el-breadcrumb class="ml-5" separator="/" style="display:inline-block">
        <el-breadcrumb-item :to="'/'">主页</el-breadcrumb-item>
        <el-breadcrumb-item>{{pathName}}</el-breadcrumb-item>
      </el-breadcrumb>

    </div>




    <!--        用户信息 text-align: right 设置整体右对齐  width: 300px 设置容器大小 -->
    <el-dropdown style="width: 300px; cursor: pointer;text-align: right">
      <div style="display: inline-block">
        <img :src="user.avatarUrl" alt="" style="width: 30px; border-radius:50%;position: relative; top: 10px; right: 5px">
        <span>{{ user.nickname }}</span>
        <i class="el-icon-setting" style="margin-right: 15px;margin-left: 10px"></i>
      </div>

      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item>
          <span @click="$router.push('person')">个人信息</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span @click="signOut">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      // 收缩按钮动态图表
      collapseBtnClass:"el-icon-s-fold",
      // 菜单是否收缩
      isCollapse:false,
      // 菜单默认宽度
      sideWidth:200,
      //主页文字是否隐藏
      LogoText: true,
      //路由变量
      paths:[],
      pathName : "",
      //用户名
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")):{}


    }
  },
  methods:{
    //导航收缩
    collapse(){
      this.isCollapse = !this.isCollapse;
      if(this.isCollapse){
        this.sideWidth= 64
        this.collapseBtnClass = "el-icon-s-unfold"
        this.LogoText = false
      }else {
        this.sideWidth = 200
        this.collapseBtnClass = "el-icon-s-fold"
        this.LogoText = true
      }
      this.$bus.$emit ('getIsCollapse',this.isCollapse)
      this.$bus.$emit ('getLogoText',this.LogoText)
      this.$bus.$emit ('getSideWidth',this.sideWidth)

    },
    //登出
    signOut(){
      this.$router.push("/login")
      localStorage.removeItem("user")
      this.$message.success("退出成功")
    }

  },
  mounted() {
    this.$bus.$on('getIsCollapse',data =>{
      this.isCollapse = data
      console.log(data)
    })
    this.$bus.$on('getCollapseBtnClass',data =>{
      this.isCollapse = data
      console.log(data)
    })

    this.$bus.$on('getPathName',data =>{
      this.pathName = data
      console.log(data)
    })
    this.$bus.$on('getUser',data =>{
      this.user = data
      console.log(data)
    })

  },




  // props:['collapseBtnClass','collapse']

}
</script>

<style scoped>

</style>