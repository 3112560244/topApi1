<template>
  <div id="main1" >
    <el-card style="width: 100%;margin: 0 auto;text-align: center;margin: 10px">
      {{this.res.update_time}}
      {{this.res.title}}
      {{this.res.subtitle}}


      <el-select v-model="id" filterable  placeholder="请选择">
        <el-option
            v-for="item in list"
            :key="item.id"
            :label="item.value"
            :value="item.id">
        </el-option>
      </el-select>
      <el-button @click="select">查询</el-button>
    </el-card>




    <el-card style="width: 45%;margin: 0 auto">


      <el-table
          :data="res.data"
          height="250"
          border
          style="width: 80%;margin: 0 auto">
        <el-table-column
            prop="index"
            label="序号"
            width="50">
        </el-table-column>
<!--        <el-table-column-->
<!--            prop="link"-->
<!--            label="网址"-->
<!--            width="180">-->
<!--        </el-table-column>-->


        <el-table-column
            label="标题">
          <template slot-scope="scope">
            <el-link v-bind:href=scope.row.link>
              {{scope.row.title}}
            </el-link>
          </template>
        </el-table-column>

      </el-table>
    </el-card>

    
    

  </div>
</template>

<script>
export default {

  name: "TopNews",

  data(){
    return{
      res :[],
      id:'100001',
      list:[
        {id:"100000" ,value:"百度实时热点排行榜"},
        {id:"100001",value: "36氪人气榜"},
        {id:"100002",value: "吾爱破解热度排行榜"},
        {id:"100003",value: "哔哩哔哩全站排行榜"},
        {id:"100004",value: "豆瓣小组"},
        {id:"100005",value: "历史上的今天"},
        {id:"100006",value: "少数派热门文章"},
        {id:"100007",value: "微博热搜榜"},
        {id:"100008",value: "微信搞笑"},
        {id:"100009",value: "微信财经迷"},
        {id:"100010",value: "微信八卦精"},
        {id:"100011",value: "微信热搜词"},
        {id:"100012",value: "微信热门"},
        {id:"100013",value: "微信读书新书榜"},
        {id:"100014",value: "微信读书更新榜"},
        {id:"100015",value: "知乎热度"},
        {id:"100016",value: "电商报7X24h快讯"},
        {id:"100017",value: "什么值得买"},
        {id:"100018",value: "豆瓣电影排行榜"},
        {id:"100019",value: "亿邦动力快讯"},
        {id:"100020",value: "抖音热点榜"},
        {id:"100021",value: "豆瓣即将上映"},
        {id:"100022",value: "知无不言头条"},
        {id:"100023",value: "哔哩哔哩每周必看"},
        {id:"100024",value: "亿恩网最新资讯"},
        {id:"100025",value: "卖家之家头条"},
        {id:"100026",value: "起点中文月票榜"},
        {id:"100027",value: "IT之家资讯热榜"},
        {id:"100028",value: "IT之家最新资讯"},
        {id:"100029",value: "百度贴吧热议榜"},
        {id:"100030",value: "虎扑步行街热帖"},
        {id:"100031",value: "知乎周榜"},
        {id:"100032",value: "知乎日榜"},
        {id:"100033",value: "百度热门小说"},
        {id:"100034",value: "起点中文畅销榜"},
        {id:"100035",value: "起点中文推荐榜-周榜"},
        {id:"100036",value: "哔哩哔哩综合热门"},
        {id:"100037",value: "哔哩哔哩入站必刷"},
        {id:"100038",value: "抖音今日热门视频"},
        {id:"100039",value: "红餐网-By:Ricky"},
        {id:"100040",value: "餐饮杰-餐饮行业资讯-By:Ricky"},
        {id:"100041",value: "美食天下-餐饮行业资讯-By:Ricky"},
        {id:"100042",value: "赢商网-餐饮行业资讯-By:Ricky"},
        {id:"100043",value: "中国产业信息网-By:Ricky"},
        {id:"100044",value: "游戏葡萄"},
        {id:"100045",value: "小红书社区精选"},
        {id:"100046",value: "币安最新活动"},
        {id:"100047",value: "币安最新公告"},
        {id:"100048",value: "金色财经大事件"},
        {id:"100049",value: "知乎小时榜"},
        {id:"100050",value: "币安币币交易"},
        {id:"100051",value: "Gamefi最新资讯"},
        {id:"100052",value: "律动快讯"},
        {id:"100053",value: "知乎最新专题"},
        {id:"100054",value: "亿恩网最新资讯"},
        {id:"100055",value: "知乎圆桌"},
        {id:"100056",value: "优设网最新文章"},
        {id:"100057",value: "优设网电商设计"},
        {id:"100058",value: "致设计经验教程"},
        {id:"100059",value: "致设计电商设计教程"},
        {id:"100060",value: "设计达人最新文章"},
        {id:"100061",value: "UI中国经验观点"},
        {id:"100062",value: "荷塘月色最新精华"},
        {id:"100063",value: "真刷最新热门"},
        {id:"100064",value: "电商运营问答"},
        {id:"100065",value: "COONAV白鲸出海资讯"},
        {id:"100066",value: "COONAV亿欧最新资讯"},
        {id:"100067",value: "COONAV跨境眼热点资讯"},
        {id:"100068",value: "COONAV创蓝论坛最新热门"},
        {id:"100069",value: "百度电影榜"},
        {id:"100070",value: "TMDB热门电影"},
        {id:"100071",value: "钛媒体-By:Ricky"},
        {id:"100072",value: "餐饮老板内参-By:Ricky"},
        {id:"100073",value: "中国会计网-会计资讯-By:Ricky"},
        {id:"100074",value: "中国会计网-税务资讯-By:Ricky"},
        {id:"100075",value: "中国会计网-审计资讯-By:Ricky"},
        {id:"100076",value: "中国会计网-财政资讯-By:Ricky"},
        {id:"100077",value: "中国会计网-财经资讯-By:Ricky"},
        {id:"100078",value: "中国会计网-湖南财税法规-By:Rick"},
        {id:"100079",value: "中国会计网-湖南税务-By:Ricky"},
        {id:"100080",value: "中国会计网-湖南会计信息-By:Rick"},
        {id:"100081",value: "CSDN 全站综合榜"},
        {id:"100082",value: "广西新闻"},
        {id:"100083",value: "贺州新闻"},
        {id:"100084",value: "昭平要闻"},
        {id:"100085",value: "昭平动态"},
        {id:"100086",value: "广西要闻 - 广西人民政府门户网站"},
        {id:"100087",value: "昭平县人民政府 - 通知公告"},
        {id:"100088",value: "昭平县人民政府 - 政府文件"},
        {id:"100089",value: "游戏葡萄-深度"},
        {id:"100090",value: "游言最新文化专栏"},
        {id:"100091",value: "最新Steam高分中文折扣"},
        {id:"100092",value: "政府最新文件 - 广西人民政府门户网站"},
        {id:"100093",value: "政策解读 - 广西人民政府门户网站"},
        {id:"100094",value: "新闻发布 - 广西人民政府门户网站"},
        {id:"100095",value: "谣言曝光 - 广西互联网辟谣平台"},
        {id:"100096",value: "工作动态 - 广西互联网辟谣平台"},
        {id:"100097",value: "法律法规 - 广西互联网辟谣平台"},
        {id:"100098",value: "ebay税务政策"},
        {id:"100099",value: "eBay 合规政策"},
        {id:"100100",value: "eBay公告"},
        {id:"100101",value: "eBay 物流政策"},
        {id:"100102",value: "AMZ123"},
        {id:"100103",value: "亚马逊全球开店 最新资讯"},
        {id:"100104",value: "开发者头条"},
        {id:"100105",value: "餐饮产业智库 - By:Ricky"},
        {id:"100106",value: "开发者头条 最近7天"},
        {id:"100107",value: "开源中国-最新资讯"},
        {id:"100108",value: "开源中国-软件更新"},
        {id:"100109",value: "财经资讯"},
        {id:"100110",value: "中国会计网-审计资讯-By:Ricky"},
        {id:"100111",value: "中国会计网-税务资讯-By:Ricky"},
        {id:"100112",value: "卖家之声"},
        {id:"100113",value: "拜拜设计"},
        {id:"100114",value: "百度热搜"},
        {id:"100115",value: "致设计经验教程"}
      ],
    }
  },
  created() {
    this.load()
  },

  methods:{
    load(){
      this.request.get("/top?id="+this.id).then(res =>{


        this.res = res.data
        console.log(this.res)
      })
    },
    select(){
      console.log('点击触发了')
      this.load()
    }

  }
}

</script>

<style scoped>

</style>