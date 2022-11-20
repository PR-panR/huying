<template>
    <img class="vote_img" src="../images/RC.png">
    <ul>
        <li>
            <img src="../images/shenghuo.png" alt="" />
            <div class="text">运动类</div>
        </li>

        <li>
            <img src="../images/xinqing.png" alt="" />
            <div class="text">生活用品类</div>
        </li>

        <li>
            <img src="../images/user-profile.png" alt="" />
            <div class="text">卡片证件类</div>
        </li>

        <li>
            <img src="../images/dianzi.png" alt="" />
            <div class="text">电子设备类</div>
        </li>

        <li>
            <img src="../images/xuexi.png" alt="" />
            <div class="text">学习用品类</div>
        </li>
        <li>
            <img src="../images/yiwu.png" alt="" />
            <div class="text">衣物鞋子类</div>
        </li>
        <li>
            <img src="../images/shipin.png" alt="" />
            <div class="text">食品外卖类</div>
        </li>
        <li>
            <img src="../images/meizhuang.png" alt="" />
            <div class="text">美妆闲置</div>
        </li>
        <li>
            <img src="../images/qita.png" alt="" />
            <div class="text">其他</div>
        </li>
    </ul>
</template>

<script>
export default {
    setup() {

        return {
        }
    }
}
</script>

<style  scoped>
ul,
li {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

h1,
h2 {
    margin: 0;
}

p {
    margin: 0;
    padding: 0;
}

ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

li {
    width: 33%;
    text-align: center;
    margin-top: 10%;

}

.vote_img {
    width: 24%;
    height: 18%;
    margin-left: 38%;
}

ul li img {
    width: 56%;
    height: 70%;
}
</style>