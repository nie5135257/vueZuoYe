<template>
	<div>
		<div class="top">
      <span>厦门</span>
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
      </el-input>
      <span></span>
    </div>
    <el-carousel>
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{  }}</h3>
        </el-carousel-item>
    </el-carousel>

    <div class="itemsOne">
      <div  v-for='item in 10'>
        <div class='itemOne'>

        </div>
        <span>{{item}}</span>
      </div>

    </div>

    <div class="jingXuans">
      <p class="sizeTop">为您精选</p>
      <div class="jingXuan">

          <div class="itemTwo" v-for='item in 4'>
            <div>

            </div>
            <p class="size">{{ item }}</p>
            <p>{{ item }}</p>
          </div>
      </div>
    </div>

    <div id='top5Con'>


      <div class="top5Con">
        <h2>本周最受欢迎TOP5</h2>
        <ul class="top5list">
          <li v-for="(item,index) in top5Arr">
            <router-link :to="'/item/'+item.pro_id">
              <div class="top5_img"><img :src="item.pro_img[0].url" /></div>
              <div class="top5_text">
                <div>{{item.pro_name}}</div>
                <div>{{item.pro_Joiner}}人已参加</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div id='footer'></div>
	</div>
</template>

<script>
	//引入 axios
	import axios from 'axios';
	export default {
		name:'Mymain',
		data:function(){
			return {
				top5Arr:[]
			}
		},
		//挂载的函数
		mounted:function(){
			//获取数据
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res)=>{
				console.log(res);
				this.top5Arr = res.data.data.CourseTop5;
			})
		}

	}
</script>

<!--lang="scss" 以下使用的是 scss语法
scoped="scoped" 该样式只在本页面起作用
-->
<style scoped="scoped" lang="less">
  #footer{
    height: 70px;
  }
  #top5Con{
    background-color: #fff;
    padding: 2px 0 10px 0;
  }
	.top5Con{
		width: 90%; height:400px; background: #004b9e; border-radius: 10px; margin: auto;
		margin-top:20px;
	}
	.top5Con h2{color:#fff; padding:20px;}
	.top5list{background: #fff; margin:10px; height:300px;border-radius: 10px;}
	.top5list li a{display: flex; flex-direction: row; flex-wrap: nowrap; height:60px;
	 padding:6px ; border-bottom:1px solid #ddd; }
	.top5list li a .top5_img{width:30%;}
	.top5list li a .top5_img img{width: 80%; height: 50px;}
	.top5list li a .top5_text{width: 70%;}

  .top{
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #004B9E;
    span{
      width: 50px;
      margin-left: 10px;
      margin-right: 15px;
      color: #fff;
    }
    input{
      height: 30px;
    }
  }
  .el-carousel{
    height: 150px;
  }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .itemsOne{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      text-align: center;
      margin: 10px 0;
      background-color: #fff;
    }
    .itemOne{
      width: 50px;
      height: 50px;
      margin: 10px;
      border-radius: 5px;
      background-color: #000066;
    }

    .jingXuans{
      background-color: #FFF;
    }
    p.sizeTop{
        font-size: 24px;
        margin-left: 15px;
    }
    .jingXuan{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin: 15px;
      p.size{
        font-weight: bold;
        font-size: 24px;

      }
      div.itemTwo>div{
        width: 150px;
        height: 100px;
        background-color: #ddd;
      }
    }
</style>
