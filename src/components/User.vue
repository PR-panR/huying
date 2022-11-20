<template>
    <div class="user_info_wrap">
      <!-- 头像 -->
      <div class="user_head">
        <img class="Userhead" src="../images/fox.png"/>
      </div>
      <!-- 个人信息 -->
      <div class="user_info">
          <!-- 更改名字(暂时未写) -->
          <div class="text-xl">优雅永不过时</div>
      </div>
      <!-- 个人简介 -->
      <div class="user_commend">
          <input type="text" class="commend" placeholder="这个人很懒，什么都没留下。。。">
      </div>
    </div>

    <div class="three_button_div">
        <div class="three_button_div_in">
            <div>
                <img src='../images/discuss.png' style='width:30px;height:30px'/>
            </div>
            <div style='margin-top:2px'>评论</div>
        </div>

        <div class="three_button_div_in">
            <div>
                <img src='../images/up.png' style='width:30px;height:30px'/>
            </div>
            <div style='margin-top:2px'>点赞</div>
        </div>

        <div class="three_button_div_in">
            <div>
                <img src='../images/chat.png' style='width:30px;height:30px'/>
            </div>
            <div style='margin-top:2px'>消息</div>
        </div>
    </div>

    <div class="bottom_div" style="margin-top: 15px;">
        <div class="bottom_center_div">
            <div class="bottom_list">
                <div class='list_button_div'>
                    <img src='../images/book.png' style='width:30px;height:30px'/>
                </div>
                <div class='list_button_text'>我的寻物</div>
                <div class='list_button_jiantou'>></div>
            </div>

            <div class="bottom_list" style="position:relative">
                <div class='list_button_div'>
                    <img src='../images/fankui.png' style='width:30px;height:30px'/>
                </div>
                <div class='list_button_text'>反馈建议</div>
                <div class='list_button_jiantou'>></div>
            </div>

            <div style="width:100%;height: 7.5vh;; align-items: center;display: flex;font-size: 2.25vh;;">
                <div class='list_button_div'>
                    <img src='../images/Aboutus.png' style='width:25px;height:25px'/>
                </div>
                <div class='list_button_text' bindtap='ShowAboutus'>关于我们</div>
                <div class='list_button_jiantou'>></div>
            </div>
              
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="css" scoped>
*{
    margin: 0;
    padding: 0;
}
img {
    max-width: 100%;
    display: inline-block;
    position: relative;
    z-index: 0;
}
.user_info_wrap{
    position: relative;
    width: 100%;
    height: 35vh;
    background-color: darksalmon;
}
.user_head{
    text-align: center;
}
.Userhead {
    width: 12vh;
    height: 12vh;
    border-radius: 50%;
    margin-top: 8%;
}
.user_info{
    position: absolute;
    width: 100%;
    margin-top: 10%;
}
.text-xl {
    font-size: 3.6vh;
    width: 100%;
    height: 40px;
    color: snow;
    margin-top: -10%;
    text-align: center;
}
.user_commend{
    position: absolute;
    width: 50%;
    height: 2vh;
    margin-top: 16%;
    font-size: 26rpx;
    margin-left: 12%;
    color: aliceblue;
}
.commend{
    cursor: auto;
    display: block;
    font-family: UICTFontTextStyleBody;
    height: 1.4rem;
    min-height: 1.4rem;
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
}
/* three_button_div */
.three_button_div {
    margin-top: 10px;
    background: white;
    border-bottom: 0.15vh solid #e6e6e6;
    width: 100%;
    height: 10.5vh;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
}
/* bottom_div */
.bottom_div{
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
}
.bottom_center_div{
    background: white;
    width: 90%;
    height: 80%;
    border-radius: 25rpx;
}
.bottom_list{
    width: 100%;
    height: 7.5vh;
    border-bottom: 0.075vh solid #e6e6e6;
    flex-direction: row;
    display: flex;
    font-size: 2.25vh;
    color: rgb(0, 0, 0,0.8);
}
.list_button_div{
    width: 50px;
    height: 50px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 10px;
}
.list_button_text{
    height: 50px;
    display: flex;
    align-items: center;
}
.list_button_jiantou {
    width: 50%;
    height: 100%;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 25px;
    color: rgb(0, 0, 0,0.4);
}
</style>