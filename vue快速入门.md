[TOC]

# 1 Vue基础

**(1) Vue简介：**

>   一个Javascript框架
>
>   官方文档传送门：
>
>   [https://cn.vuejs.org]: https://cn.vuejs.org

**(2) 优点：**

>   简化Dom操作

**(3) 特点：**

>   响应式数据驱动

**(4) 入门demo：**

实现步骤：

1.  导入开发版本的Vue.js

2.  创建Vue实例对象，设置el属性和data属性
3.  使用简洁的模板语法把数据渲染到页面上

代码实例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vue基础</title>
</head>

<body>
    <div id="app">
        {{ message }}
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                message: "hello vue!"
            }
        })
    </script>
</body>

</html>
```

注意：1.引入Vue.js根据==开发环境版本==/==生产环境版本==选择对应的版本。

## 1.1 el挂载点

**(1) Vue实例的作用范围**

>   Vue会管理e选项命中的元素及其内部的后代元素

**(2) 是否可以使用其他的选择器？**

>   可以使用其他的选择器，但是建议使用ID选择器

**(3) 是否可以设置其他的dom元素呢？**

>   可以使用其他的双标签，不能使用`HTML`和`BODY`

## 1.2 data数据对象

**数据对象介绍:**

>   (1) Vue中用到的数据定义在data中
>
>   (2) data中可以写复杂类型的数据
>
>   (3) 渲染复杂类型数据时，遵守js的语法即可
>
>   (4) 可用的数据类型例如：数字，字符串，数组，列表，对象等等。

代码实例:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>data数据对象</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        {{message}}
        <h3>{{person}} </h3>
        <h3>{{person.name}} {{person.age}} </h3>
        <ul>
            <li>{{fruit[0]}} </li>
            <li>{{fruit[1]}} </li>
            <li>{{fruit[2]}} </li>
            <li>{{fruit[3]}} </li>
            <li>{{fruit[4]}} </li>

        </ul>
    </div>

    <script>
        var app = new Vue({
            el: "#app",
            data: {
                message: "hello vue!",
                person:{
                    name:"张三",
                    age:18
                },
                fruit:["香蕉","苹果","蓝莓","葡萄","李子"]
            }
        })
    </script>
</body>

</html>
```

# 2 本地应用

## 2.1 内容绑定，事件绑定

### 2.1.1 v-text指令

简介：

>   设置标签的内容（textContent）
>
>   默认写法会替换全部内容，使用差值表达式（}可以替换指定内容

代码实例：

```html
 <div id="app">
        <h2 v-text="message"></h2>
        <h3 v-text="info+'???'"></h3>
        {{message+"!!!"}}

    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                message: "hello vue!",
                info: "what does the fox say?"
            }
        })
    </script>
```

### 2.1.2 v-html指令

简介：

>   设置元素的innerHTML
>   内容中有html结构会被解析为标签
>   v-text指令无论内容是什么，只会解析为文本
>   解析文本使用v-text，需要解析html结构使用v-html

代码实例：

```html
 <div id="app">
        <h2 v-text="content"></h2>
        <h3 v-html="content"></h3>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                content: "<a href='http://www.baidu.com'>baidu</a>"
            }
        })
    </script>
```

### 2.1.3 v-on指令

简介：

>   为元素绑定事件
>
>   事件名不需要写on
>
>   指令可以简写为@

代码实例：

```html
<div id="app">
        <input type="button" value="v-on指令" v-on:click="doIt">
        <input type="button" value="v-on简写" @click="doIt">
        <input type="button" value="双击事件" @dblclick="doIt">
        <p @click="addContent">{{food}} </p>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="./js/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                food: "青椒炒肉"
            },
            methods: {
                doIt: function () {
                    alert("做厨师!");
                },
                addContent: function () {
                    this.food += "超好吃!"
                }
            }
        })
    </script>
```

v-on补充

传递自定义参数，事件修饰符

>   文档传送门：[https://cn.vuejs.org/v2/api/#v-on](https://cn.vuejs.org/v2/api/#v-on)
>
>   事件绑定的方法写成函数调用的形式，可以传入自定义参数
>
>   定义方法时需要定义形参来接收传入的实参
>
>   事件的后面跟上.修饰符可以对事件进行限制
>
>   .enter 可以限制触发的按键为回车

代码实例：

```html
  <div id="app">
        <!-- 函数参数的使用 -->
        <input type="button" value="点我" @click="doIt(555,'你好啊')">
        <!-- 事件修饰符的使用 -->
        <input type="text" @keyup.enter="sayHi">
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="./js/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                content: ""
            },
            methods: {
                doIt: function (p1, p2) {
                    console.log(p1 + p2);
                },
                sayHi: function () {
                    alert("你好啊");
                }
            }
        })
    </script>
```

### 2.1.4 demo-计数器

实现步骤：

(1) data中定义数据：比如num
(2) methods中添加两个方法：比如add（递增），sub（递减）
(3) 使用v-text将num设置给span标签
(4) 使用v-on将add，sub分别绑定给+，-按钮
(5) 累加的逻辑：小于10累加，否则提示
(6) 递减的逻辑：大于0递减，否则提示

案例效果：

![image-20200626165514048](vue快速入门.assets/image-20200626165514048.png)

代码实例：

```html
 <div id="app">
        <input type="button" value="sub" v-on:click="sub">
        <span>{{num}} </span>
        <input type="button" value="add" @click="add">
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="./js/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                num: 1
            },
            methods: {
                sub: function () {
                    if (this.num > 0) {
                        this.num--;
                    } else {
                        alert("别点了,已经最小了!")
                    }
                },
                add: function () {
                    if (this.num < 10) {
                        this.num++;
                    } else {
                        alert("别点了,已经最大了!")
                    }
                }
            }
        })
    </script>
```

## 2.2 显示切换，属性绑定 

### 2.2.1 v-show指令

>   v-show指令的作用是：根据真假切换元素的显示状态
>   原理是修改元素的display，实现显示隐藏指令后面的内容，最终都会解析为布尔值
>   值为true元素显示，值为false元素隐藏
>   数据改变之后，对应元素的显示状态会同步更新

代码实例：

```html
<div id="app">
        <input type="button" value="切换显示状态" @click="changeIsShow">
        <span>{{"现在图片状态:"+isShow}} </span>
        <img src="./img/彩虹.png" v-show="isShow">
        <hr>
        <input type="button" value="增加年龄" @click="addAge">
        <span>{{"现在年龄:"+age}} </span>
        <img src="./img/彩虹.png" v-show="age>=18">
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="./js/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                isShow: false,
                age: 16
            },
            methods: {
                changeIsShow: function () {
                    this.isShow = !this.isShow;
                },
                addAge: function () {
                    this.age += 1;
                }
            }
        })
    </script>
```

### 2.2.2 v-if指令

>   v-if指令的作用是：根据表达式的真假切换元素的显示状态
>
>   本质是通过操纵dom元素来切换显示
>
>   状态表达式的值为true，元素存在于dom树中，为false，从dom树中移除

代码实例：

```html
<div id="app">
        <input type="button" value="切换显示状态" @click="changeIsShow">
        <span>{{"现在图片状态:"+isShow}} </span>
        <img src="./img/彩虹.png" v-show="isShow">
        <hr>
        <input type="button" value="切换显示状态" @click="toggleIsShow">
        <span>{{"现在图片状态:"+isShow}} </span>
        <img src="./img/彩虹.png" v-if="isShow">
        <hr>
        <input type="button" value="增加年龄" @click="addAge">
        <span>{{"现在年龄:"+age}} </span>
        <img src="./img/彩虹.png" v-if="age>=18">
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="./js/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                isShow: false,
                age: 16
            },
            methods: {
                toggleIsShow: function () {
                    this.isShow = !this.isShow;
                },
                changeIsShow: function () {
                    this.isShow = !this.isShow;
                },
                addAge: function () {
                    this.age += 1;
                }
            }
        })
    </script>
```

### 2.2.3 v-bind指令

>   v-bind指令的作用是：为元素绑定属性
>
>   完整写法是v-bind：属性名
>
>   简写的话可以直接省略v-bind，只保留：属性名

代码实例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>v-bind指令</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="./js/vue.js"></script>
    <style>
        .active{
            border: 1px red solid;
        }
        img{
            border: 1px white solid;
        }
    </style>
</head>

<body>
    <div id="app">
        <img v-bind:src="imgSrc" alt="rainbow">
        <hr>
        <!-- 三目运算符 -->
        <img :src="imgSrc" :class="isActive?'active':''" @click="toggleIsActive"  
        :title="imgTitle" alt="rainbow">
        <hr>
        <!-- ....... -->
        <img :src="imgSrc" :class="{active:isActive}" @click="toggleIsActive"  
        :title="imgTitle" alt="rainbow">
    </div>

    <script>
        var app = new Vue({
            el: "#app",
            data: {
                imgSrc:"https://s1.ax1x.com/2020/06/22/NJ2nld.png",
                imgTitle:"彩虹,你值得看见!",
                isActive:false
            },
            methods: {
                toggleIsActive:function(){
                    this.isActive = !this.isActive;
                }
            }
        })
    </script>
</body>

</html>
```

### 2.2.4 demo-图片切换

技术点：

>   图片数组，索引，v-bind，v-on，v-if，v-show
>
>   列表数据使用数组保存
>
>   v-bind指令可以设置元素属性，比如src

案例效果：

![image-20200626165339376](vue快速入门.assets/image-20200626165339376.png)

代码实例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图片切换</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="./js/vue.js"></script>
</head>

<body>
    <div id="mask">
        <img :src="imgArr[index]" :title="imgTitle">
        <br>
        <input type="button" value="上一张" @click="prev" v-show="index!=0">
        <input type="button" value="下一张" @click="next" v-show="index<9">
    </div>
    <script>
        var app = new Vue({
            el: "#mask",
            data: {
                imgTitle: "你的武器",
                imgArr: [
                    "./img/demo-changePic/宝刀.png",
                    "./img/demo-changePic/锤子.png",
                    "./img/demo-changePic/刀-刀架.png",
                    "./img/demo-changePic/飞弹.png",
                    "./img/demo-changePic/弓箭.png",
                    "./img/demo-changePic/计时炸弹.png",
                    "./img/demo-changePic/枪械-ak.png",
                    "./img/demo-changePic/手枪.png",
                    "./img/demo-changePic/双截棍.png",
                    "./img/demo-changePic/原子弹.png"
                ],
                index: 0
            },
            methods: {
                prev: function () {
                    this.index--;
                },
                next: function () {
                    this.index++;
                }
            }
        })
    </script>
</body>
</html>
```

## 2.3 列表循环，表单元素绑定

### 2.3.1 v-for指令

>   v-for指令的作用是：根据数据生成列表结构
>
>   数组经常和v-for结合使用
>
>   语法是（item，index）in 数据
>
>   item和index 可以结合其他指令一起使用
>
>   数组长度的更新会同步到页面上，是响应式的

代码实例：

```html
<div id="app">
        <input type="button" value="添加水果" @click="add">
        <input type="button" value="移除水果" @click="remove">
        <ul>
            <li v-for="(item,index) in arr">
                {{item}}
            </li>
            <p v-for="(item,index) in fruit" v-bind:title="title+'?'">
                {{index+1}}&nbsp;&nbsp;&nbsp;{{item.name}}
            </p>
        </ul>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="./js/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                title: "是不是你最爱的水果",
                arr: [1, 2, 3, 4, 5],
                fruit: [
                    { name: "苹果" },
                    { name: "凤梨" },
                    { name: "桃子" },
                    { name: "橘子" }
                ]
            },
            methods: {
                add: function () {
                    this.fruit.push({ name: "柠檬" });
                },
                remove: function () {
                    this.fruit.shift();
                }
            }
        });
    </script>
```



### 2.3.2 v-model指令

>   v-model指令的作用是便捷的设置和获取表单元素的值
>
>   绑定的数据会和表单元素值相关联
>
>   绑定的数据←→表单元素的值(双向数据绑定)

代码实例：

```html
 <div id="app">
        <input type="button" value="修改msg" @click="setMsg">
        <input type="text" v-model="message" @keyup.enter="getMsg">
        <p> {{message}} </p>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="./js/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                message: "天气很好"
            },
            methods: {
                getMsg: function () {
                    alert(this.message);
                },
                setMsg: function () {
                    this.message = "哈哈哈哈哈";
                }
            }
        })
    </script>
```

### 2.3.3 demo-记事本

技术点：

>   ①新增②删除③统计④清空⑤隐藏

案例效果：

![image-20200626165254940](vue快速入门.assets/image-20200626165254940.png)

代码实例：

```html
<div id="app" style="font-size:14px;width: 240px;">
        <h3 style="text-align: center;">遗忘记事本</h3>
        <input type="text" v-model="note" @keyup.enter="add" style="width: 100%;">
        <div v-for="(item,index) in list">
            <div style="float: left;">
                {{index+1}}  {{item}}
            </div>
            <div style="float: right;" @click="remove(index)">x</div>
            <div style="clear: both;"></div>
        </div>
        <div v-show="list.length!=0">
            <div style="float: left;">
                {{list.length}} items left
            </div>
            <div style="float: right;" @click="clear">
                clear
            </div>
        </div>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="./js/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                list: ["好好学习", "天气很好", "有微风"],
                note: "狗吠不止"
            },
            methods: {
                add: function () {
                    this.list.push(this.note);
                },
                remove: function (start) {
                    this.list.splice(start,1);
                },
                clear:function(){
                    this.list = [];
                }
            }
        })
    </script>
```

# 3 网络应用

Vue结合网络数据开发应用

案例：百度地图API、各种开放使用的API。

## 3.1 axios基本使用

>   axios必须先导入才可以使用
>
>   使用get或post方法即可发送对应的请求
>
>   then方法中的回调函数会在请求成功或失败时触发
>
>   通过回调函数的形参可以获取响应内容，或错误信息
>
>   文档传送门：https://github.com/axios/axios

代码实例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>axios基本使用</title>
</head>

<body>
    <div id="app">
        <input type="button" value="get请求" class="get">
        <input type="button" value="post请求" class="post">
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
        /*
            接口1：随机笑话
            请求地址：https://autumnfish.cn/api/joke/list
            请求方法：get
            请求参数：num(笑话条数，数字类型)
            响应内容：随机笑话
        */
        document.querySelector(".get").onclick = function(){
            axios.get("https://autumnfish.cn/api/joke/lists?num=3")
            .then(function(response){
                console.log(response);
            }).catch(function(error){
                console.log(error);
            })
        }

        /*
            接口2：用户注册
            请求地址：https://autumnfish.cn/api/user/reg
            请求方法：post
            请求参数：username(用户名，字符串类型)
            响应内容：注册成功或者失败
        */
        document.querySelector(".post").onclick = function(){
            axios.post("https://autumnfish.cn/api/user/reg",{username:"汤姆猫"})
            .then(function(response){
                console.log(response);
            }).catch(function(error){
                console.log(error);
            })
        }
    </script>
</body>

</html>
```

## 3.2 axios加vue

>   axios回调函数中的this已经改变，无法访问到data中数据
>
>   把this保存起来，回调函数中直接使用保存的this即可

代码实例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>axios加vue</title>
</head>

<body>
    <div id="app">
        <input type="button" @click="getJoke" value="获取笑话">
        <p> {{joke}} </p>
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="./js/vue.js"></script>
    <!-- axios CDN -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                joke: "一个不好笑的笑话"
            },
            methods: {
                getJoke: function () {
                    var that = this;
                    axios.get("https://autumnfish.cn/api/joke/")
                        .then(function (response) {
                            console.log(response.data);
                            that.joke = response.data;
                        }).catch(function(error){
                            console.log(error);
                        })
                }
            }
        })
    </script>
</body>

</html>
```

## 3.3 demo-在线天气预报

技术点：

>   -   回车查询：
>
>       ​	①按下回车(v-on enter）②查询数据（axios 接口v-model）③渲染数据（v-for数组 that）
>
>   -   点击查询：
>
>       ​	①点击城市（v-on 自定义参数）②查询数据（this.方法（0）)③渲染数据

案例效果：

![image-20200626165206134](vue快速入门.assets/image-20200626165206134.png)

代码实例：

-   html部分：

    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>网络应用-天气查询</title>
    </head>
    
    <body>
        <div id="app" style="width: 750px;margin: 0 auto;text-align: center;font-size: 16px;">
            <h2>在线查询天气</h2>
            <div>
                <input type="text" v-model="city" @keyup.enter="searchWeather" placeholder="请输入城市，按回车查询。" size="33">
            </div>
            <div style="font-size: 14px;">
                <b>热门城市：</b>
                <span @click="changeCity('成都')">成都</span>&nbsp;&nbsp;&nbsp;
                <span @click="changeCity('德阳')">德阳</span>&nbsp;&nbsp;&nbsp;
                <span @click="changeCity('江油')">江油</span>&nbsp;&nbsp;&nbsp;
                <span @click="changeCity('绵阳')">绵阳</span>&nbsp;&nbsp;&nbsp;
            </div>
            <div v-show="weatherList.length!=0" v-for="item in weatherList" style="width: 150px;text-align: center;float: left;font-size: 12px;">
                <h3>{{item.type}} </h3>
                <div>{{item.low}} ~ {{item.high}} </div>
                <div>{{item.date}} </div>
                <div>{{item.fengxiang}}{{item.fengli}} </div>
            </div>
        </div>
        <!-- 开发环境版本，包含了有帮助的命令行警告 -->
        <script src="./js/vue.js"></script>
        <!-- axios CDN -->
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="./js/main.js"></script>
    </body>
    
    </html>
    ```

-   Javascript部分

    ```javascript
    /**
     * 请求地址：http://wthrcdn.etouch.cn/weather_mini
     * 请求方法：get
     * 请求参数：city(城市名)
     * 响应内容：天气信息
     */
    var app = new Vue({
        el: "#app",
        data: {
            city: "",
            weatherList: []
        },
        methods: {
            searchWeather: function () {
                //定义一个变量方便axios内部调用
                var that = this;
                axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
                    .then(function (response) {
                        console.log(response.data.data.forecast);
                        that.weatherList = response.data.data.forecast;
                    })
            },
            changeCity: function (newcity) {
                this.city = newcity;
                this.searchWeather();
            }
        }
    })
    ```

# 4 综合应用

案例名称：在线音乐播放器

功能需求：

>   ①歌曲搜索
>   ②歌曲播放
>   ③歌曲封面
>   ④歌曲评论
>   ⑤播放动画
>   ⑤mv播放

案例效果：

![image-20200626164808435](vue快速入门.assets/image-20200626164808435.png)

代码实例：

-   html部分：

    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>在线音乐播放器</title>
        <style>
            .line {
                width: 33%;
                height: 500px;
                float: left;
            }
    
            .panel {
                width: 840px;
                height: 616px;
                font-size: 14px;
                background-color: antiquewhite;
                margin: 50px auto;
                text-align: center;
    
            }
    
            .music:hover {
                cursor: pointer;
                background-color: bisque;
            }
    
            .mask {
                background-color: #000;
                opacity: 0.5;
                z-index: 1;
                width: 100%;
                height: 100%;
                position: absolute;
            }
    
            /************************************************* 页面滚动条样式 begin */
            /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
            ::-webkit-scrollbar {
                width: 16px;
                height: 16px;
                background-color: #F5F5F5;
            }
    
            /*定义滚动条轨道 内阴影+圆角*/
            ::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                background-color: #F5F5F5;
            }
    
            /*定义滑块 内阴影+圆角*/
            ::-webkit-scrollbar-thumb {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
                background-color: #555;
            }
    
            /************************************************* 页面滚动条样式 end */
    
            /**************************** 歌曲列表、评论滚动条样式 begin **********************/
            .cus-scrollbar {
                overflow-y: auto;
            }
    
            .cus-scrollbar::-webkit-scrollbar {
                width: 4px;
                /*height: 4px;*/
            }
    
            .cus-scrollbar::-webkit-scrollbar-thumb {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                background: rgba(0, 0, 0, 0.2);
            }
    
            .cus-scrollbar::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                border-radius: 0;
                background: rgba(0, 0, 0, 0.1);
    
            }
    
            /**************************** 歌曲列表、评论滚动条样式 end **********************/
        </style>
    </head>
    
    <body>
        <div id="player" class="panel">
            <h2>在线音乐播放器</h2>
            <!-- 歌曲搜索 -->
            <input style="margin-bottom: 10px;" v-model="query" type="text" @keyup.enter="searchMusic"><br>
            <div v-show="musicList.length!=0">
                <!-- 搜索结果列表 -->
                <div class="line cus-scrollbar" style="text-align: left;">
                    <div v-for="item in musicList" class="music">
                        <span @click="playMusic(item.id,item.name)">
                            <img src="./img/musicPlay.png" style="width: 10px;height: 10px;">
                            {{item.name}}
                        </span>
                        <img v-show="item.mvid!=0" @click="playMV(item.mvid)" src="./img/videoPlay.png"
                            style="width: 10px;height: 10px;float: right;">
                    </div>
                </div>
                <!-- 歌曲封面及播放按钮 -->
                <div class="line">
                    <div style="border: 3px solid lightblue;width: 180px;height: 180px;margin: 0 auto;">
                        <img :src="picUrl" width="100%" height="100%">
                    </div>
                    <h4>{{musicName}} </h4>
                </div>
                <!-- 热评列表 -->
                <div class="line cus-scrollbar">
                    <div style="font-weight: 700;">热门评论</div>
                    <div v-for="item in hotComments">
                        <div
                            style="width: 273px;height: 100px;margin-top: 5px;margin-bottom: 5px;border-top: 1px solid lightgray;">
                            <div style="float: left;width: 40px;height: 40px;margin:25px 5px 25px 5px">
                                <img :src="item.user.avatarUrl" style="border-radius: 40px;" width="100%" height="100%">
                            </div>
                            <div
                                style="float:left;width: 223px;height: 97px;overflow: hidden;font-size: 12px;text-align: left;line-height: 14px;margin-top: 5px;">
                                <span style="font-weight: 700; color: blue;">{{item.user.nickname}}: </span>
                                <span>{{item.content}} </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div style="clear:left"></div> -->
                <audio v-bind:src="musicUrl" ref="audio" autoplay="false" controls loop
                    style="width: 840px;height: 40px;"></audio>
            </div>
            <!-- mv播放器 -->
            <div id="" v-if="isShow"
                style="position: absolute;left: 22.5%;top:10px;width: 838px;height: 500px;border: 1px solid red;z-index: 100;">
                <video :src="mvUrl" controls style="width:100%;height: 100%;"></video>
            </div>
        </div>
        <!-- mv播放器遮罩 -->
        <div :class="{mask:isShow}" @click="showMask()" style="">
        </div>
        <!-- 开发环境版本，包含了有帮助的命令行警告 -->
        <script src="./js/vue.js"></script>
        <!-- axios CDN -->
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="./js/main.js"></script>
    </body>
    
    </html>
    ```

-   JavaScript部分

    ```javascript
    /**
     * 接口1：歌曲搜索
     * 请求地址：https://autumnfish.cn/search
     * 请求方式：get
     * 请求参数：keywords(查询关键字)
     * 响应内容：歌曲搜索结果
     */
    
    /**
     * 接口2：获取歌曲url
     * 请求地址：https://autumnfish.cn/song/url
     * 请求方式：get
     * 请求参数：id(歌曲id，musicid)
     * 响应内容：歌曲url地址
     */
    
    /**
    * 接口3：获取歌曲详情
    * 请求地址：https://autumnfish.cn/song/detail
    * 请求方式：get
    * 请求参数：ids(歌曲id，musicid)
    * 响应内容：歌曲详情，封面url地址
    */
    
    /**
    * 接口4：获取歌曲评论
    * 请求地址：https://autumnfish.cn/comment/hot?type=0
    * 请求方式：get
    * 请求参数：id(歌曲id，type固定为0)
    * 响应内容：歌曲的热门评论
    */
    
    /**
    * 接口5：获取mv url
    * 请求地址：https://autumnfish.cn/mv/url
    * 请求方式：get
    * 请求参数：id(mvid，为0说明没有mv)
    * 响应内容：歌曲的mv url
    */
    
    
    var player = new Vue({
        el: "#player",
        data: {
            query: "",
            musicList: [],
            musicUrl: "",
            musicName: "",
            picUrl: "",
            hotComments:[],
            mvUrl:"",
            isShow:false
        },
        methods: {
            //歌曲搜索
            searchMusic: function () {
                var that = this;
                console.log(this.query);
                axios.get("https://autumnfish.cn/search?keywords=" + this.query)
                    .then(function (response) {
                        that.musicList = response.data.result.songs;
                        console.log(response.data.result.songs);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            //歌曲播放
            playMusic: function (musicId, musicName) {
                var that = this;
                console.log(musicName + ":" + musicId);
                that.musicName = musicName;
                //获取歌曲地址
                axios.get("https://autumnfish.cn/song/url?id=" + musicId)
                    .then(function (response) {
                        that.musicUrl = response.data.data[0].url;
                        console.log(response.data.data[0].url);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                //获取歌曲封面
                axios.get("https://autumnfish.cn/song/detail?ids=" + musicId)
                    .then(function (response) {
                        console.log(response.data.songs[0].al.picUrl);
                        that.picUrl = response.data.songs[0].al.picUrl;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                //获取歌曲热评
                axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId)
                    .then(function (response) {
                        console.log(response.data.hotComments);
                        that.hotComments = response.data.hotComments;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            //播放mv
            playMV:function(mvid){
                var that = this;
                axios.get("https://autumnfish.cn/mv/url?id=" + mvid)
                    .then(function (response) {
                        console.log(response.data.data.url);
                        that.mvUrl = response.data.data.url;
                        that.isShow = true;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            //关闭遮罩
            showMask:function(){
                console.log(this.isShow);
                if(this.isShow){
                    this.isShow = !this.isShow;
                }
            }
        }
    })
    
    //http://musicapi.leanapp.cn/search/suggest?keywords=
    ```

    

