<template>
    <ul>
        <li>
            <RouterLink to="groundback">
                <img src="../images/gc1.png" alt="" />
                <div class="text">广场</div>
            </RouterLink>
        </li>

        <li>
            <RouterLink to="/vote">
                <img src="../images/sousuo_un.png" alt="" />
                <div class="text">发布</div>
            </RouterLink>
        </li>

        <li>
            <RouterLink to="/search">
                <img src="../images/pic_un_fb.png" alt="" />
                <div class="text">寻物</div>
            </RouterLink>
        </li>

        <li>
            <RouterLink to="/user">
                <img src="../images/pic_un_mine.png" alt="" />
                <div class="text">我的</div>
            </RouterLink>

        </li>
    </ul>
</template>

<script>
export default {
    name: "Footer-mine",
    setup() {

        return {

        }
    }
}
</script>

<style lang="css" scoped>
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

/* 浏览器都有自己的默认样式，以上部分为清除浏览器默认样式 */

ul {
    width: 400px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    background: #ffffff;
    padding: 20px 10px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-evenly;
}

/* 注意，每个 li 的宽度不是完全一样的，这个宽度和内部的元素撑开的宽度一样 */
li {
    margin: 0 10px;
    font-size: 14px;
    text-align: center;
    color: #666666;
}

ul li img {
    width: 76%;
    height: 50%;
}
</style>