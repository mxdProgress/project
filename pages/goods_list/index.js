// pages/goods_list/index.js
import { request } from "../../request/index.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
            id: 0,
            name: '综合',
            isActive: true
        }, {
            id: 1,
            name: '销量',
            isActive: false
        }, {
            id: 2,
            name: '价格',
            isActive: false
        }],
        goods_list: []
    },
    queryParams: {
        query: '',
        cid: '',
        pagenum: 1,
        pagesize: 10
    },
    totalPages: 1,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.queryParams.cid = options.cid
        this.getGoodsList();
    },

    tabsItemChangeHandle(e) {
        let { index } = e.detail;
        let { tabs } = this.data
        tabs.forEach((e, i) => i === index ? e.isActive = true : e.isActive = false)
        this.setData({
            tabs: tabs
        })
    },

    getGoodsList() {
        wx.showLoading({
            title: '1111'
        });
        request({ url: 'goods/search', data: this.queryParams }).then(res => {
            let { goods } = res.data.message
            let total = res.data.message.total;
            this.totalPages = Math.ceil(total / this.queryParams.pagesize);

            this.setData({
                goods_list: [...this.data.goods_list, ...goods]
            })
        }).catch();
        wx.stopPullDownRefresh();
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        this.setData({
            goods_list: []
        });
        this.queryParams.pagenum = 1;
        this.getGoodsList();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        if (this.queryParams.pagenum >= this.totalPages) {
            wx.showToast({
                title: '没有更多了...',
                icon: 'none'
            });
        } else {
            this.queryParams.pagenum++;
            this.getGoodsList();
        }

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})