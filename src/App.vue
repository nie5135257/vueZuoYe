<template>
  <div id="app">

    <router-view/>
    <div id="nav">
    	<!--相当于a标签的路由信息-->
      <router-link to="/">
    	  <img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
    	  <div>首页</div>
      </router-link>
      <router-link to="/myfind">
    	  <img src="https://www.jvhv.com/wap/static/images/footer_6_red.png" />
    	  <div>发现</div>
    	  </router-link>
      <router-link to="/mymessage">
    	  <img src="https://www.jvhv.com/wap/static/images/footer_8_red.png" />
    	  <div>消息</div>
    	  </router-link>
      <router-link to="/myme">
    	  <img src="https://www.jvhv.com/wap/static/images/footer_5_red.png" />
    	  <div>我的</div>

    	  </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
 *{
   margin: 0;
   padding: 0;
 }
 #app{
   background-color: #eee;
 }
ul,li{list-style:none;}
a{text-decoration: none;}
#nav {
  background-color: #fff;
	font-size:12px;
  position: fixed;
  bottom:0;
  left:0;
  right:0;
  height:50px;
  border-top:1px solid #ccc;
	//line-height:50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  a{
	color:#000;
	img{width: 27px; height:27px;}
	div{height:23px;}
  }
  a:hover{color:#000; text-decoration: none;}
}
</style>
