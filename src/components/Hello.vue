<template>
  <div class="index">
    <!-- <news-cell
      :newsDate="item"
      :key="key"
      ></news-cell> -->
    <el-table :data="newsListShow" style="width: 100%">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="birthday" label="出生日期"> </el-table-column>
      <el-table-column prop="img" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" />
          <!-- {{scope.row.img}} -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import api from "./../axios/api.js";
import NewsCell from "./NewsCell.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "index",
  data() {
    return {
      newsListShow: [],
    };
  },
  components: {
    NewsCell,
  },
  created() {
    this.setNewsApi();
  },
  methods: {
    ...mapMutations(["saveData", "saveToken"]),
    setNewsApi: function () {
      api.JH_news("/news/index", "type=top&key=123456").then((res) => {
        //地址参数  "type=top&key=123456"=====》params
        // console.log(res);
        let token = "111155999";
        this.saveToken(token);
        this.saveData(res.articles.data);
        this.newsListShow = res.articles.data;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topNav {
  width: 100%;
  background: #ed4040;
  position: fixed;
  top: 0rem;
  left: 0;
  z-index: 10;
}
.simpleNav {
  width: 100%;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  font-size: 0;
  font-family: "微软雅黑";
  white-space: nowrap;
}
.simpleNav::-webkit-scrollbar {
  height: 0px;
}
.simpleNavBar {
  display: inline-block;
  width: 1.2rem;
  color: #fff;
  font-size: 0.3rem;
}
.navActive {
  color: #000;
  border-bottom: 0.05rem solid #000;
}
.placeholder {
  width: 100%;
  height: 1rem;
}
</style>
