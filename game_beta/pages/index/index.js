//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        message: [
            '恭喜111中奖88880000金币', '恭喜222中奖680000金币', '恭喜333中奖68545600金币'
        ],
        timelist: [
            { 'weak': '星期五', 'num': '21', 'ym': '2018-01-26', 'index': '0' },
            { 'weak': '星期六', 'num': '92', 'ym': '2018-01-27', 'index': '1' },
            { 'weak': '星期日', 'num': '52', 'ym': '2018-01-28', 'index': '2' },
            { 'weak': '星期一', 'num': '12', 'ym': '2018-01-29', 'index': '3' },
            { 'weak': '星期二', 'num': '35', 'ym': '2018-01-30', 'index': '4' },
            { 'weak': '星期三', 'num': '66', 'ym': '2018-01-31', 'index': '5' },
            { 'weak': '星期四', 'num': '77', 'ym': '2018-02-01', 'index': '6' },
        ],
        matchTeam: [
            {
                home_team_ImgUrl: 'https://pic.8win.com/data/image/all/2018/1/29/fb_team_1517193144941.jpg',
                guest_team_ImgUrl: 'https://pic.8win.com/data/image/all/2018/1/29/fb_team_1517193592591.png',
                home_team_name: '波音科特',
                guest_team_name: '老挝丰田',
                league:'球会友谊',
                startTime: '2018-02-02 20:30:00',
                guessCount:'20',
                sourceWay:'猜球'
            },
            {
                home_team_ImgUrl: 'https://pic.8win.com/data/image/all/2016/7/27/fb_team_1469599375054.png',
                guest_team_ImgUrl: 'https://pic.8win.com/data/image/all/2016/5/30/team_3956.png',
                home_team_name: '布拉格斯',
                guest_team_name: '布隆德比',
                league: '亚协杯',
                startTime: '2018-02-05 20:30:00',
                guessCount: '123',
                sourceWay: '滚球'
            },
            {
                home_team_ImgUrl: 'https://pic.8win.com/data/image/all/2016/8/8/fb_team_1470622974769.png',
                guest_team_ImgUrl: 'https://pic.8win.com/data/image/all/2016/8/31/fb_team_1472627933133.png',
                home_team_name: '里斯本竞',
                guest_team_name: '皇家体育',
                league: '土甲',
                startTime: '2018-02-11 20:30:00',
                guessCount: '200',
                sourceWay: '猜球'
            },
        ],
        tbsTeamWarp: [//模块tabs
            {
                tbsIndex: 0,
                textTitle: "赛前"
            },
            {
                tbsIndex: 1,
                textTitle: "滚球"
            },
            {
                tbsIndex: 2,
                textTitle: "我的"
            }
        ],
        classifyTbsTeam: [//分类tabs
            {
                classifyIndex: 0,
                badge: "",
                classifyTextTitle: "按时间"
            },
            {
                classifyIndex: 1,
                badge: "",
                classifyTextTitle: "按联赛"
            },
            {
                classifyIndex: 2,
                badge: 1,
                classifyTextTitle: "我的关注"
            }
        ],
        messageHide: true,//公告的默认显示
        messageHeight: 70,//公告的默认高度
        currentTab: 0,//赛前、滚球、我的效果
        mainTab: 0,//分类的选中效果
        vertical: 0,//左边时间选中效果
        winWidth: 0,
        winHeight: 0,
    },
    onLoad: function (options) {//页面的初始加载数据
        console.log(options);
        let that = this;
        wx.getSystemInfo({
            success: function (res) {
                console.log(res);
                let matr = 750 / res.windowWidth;  //1px换算成rpx (750/屏幕宽度)
                that.setData({ 
                    winWidth: res.windowWidth * matr,
                    winHeight: res.windowHeight * matr
                });
            }
        });
        wx.request({
            url: 'http://127.0.0.1:90/list', //接口地址
            data: {},
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                console.log(res.data)
            }
        })
    },
    messageButton: function () {//公告close
        this.data.messageHide = false;
        this.setData({
            messageHide: this.data.messageHide,
            messageHeight: 0
        })
    },
    swichtab: function (e) {//一级tabs切换赛前、滚球
        console.log('*****', e.target.dataset.current);
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            this.setData({
                currentTab: e.target.dataset.current
            })
        }
    },
    listenSwiper: function (data) {//一级内容页面的change事件
        //console.info(data);
        this.setData({
            currentTab: data.detail.current
        })
    },
    swichmintab: function (e) {//分类切换click
        console.log('++++', e.target.dataset.main);
        if (this.data.mainTab === e.target.dataset.main) {
            return false;
        } else {
            this.setData({
                mainTab: e.target.dataset.main
            })
        }
    },
    classifyListenSwiper: function (data) {//分类切换的change事件
        console.info(data);
        this.setData({
            mainTab: data.detail.current
        })
    },
    leftTimebtn: function (e) {//左边时间点击事件
        console.log(e.currentTarget.dataset.id);
        this.setData({
            vertical: e.currentTarget.dataset.id
        })
    },
});
