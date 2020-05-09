// pages/cotegoary/index.js
import { request } from "../../request/index.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        leftMenuArr: [],
        rightContainerArr: [],
        currentIndex: 0,
        scrollTop: 0
    },
    cates: [],

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        request({ url: "categories" }).then(res => {
            this.cates = res.data.message;
            let leftMenuArr = this.cates.map(item => item.cat_name)
            let rightContainerArr = this.cates[0].children
            this.setData({
                leftMenuArr,
                rightContainerArr
            });
        }).catch()
    },

    handleItemTap(e) {
        let { index } = e.currentTarget.dataset;
        let rightContainerArr = this.cates[index].children
        this.setData({
            currentIndex: index,
            rightContainerArr,
            scrollTop: 0
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})