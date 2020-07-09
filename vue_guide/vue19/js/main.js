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