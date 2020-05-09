import { request } from "../../request/index.js";
// import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsObj: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getGoodsDetail(options.goods_id)
    },

    getGoodsDetail(id) {
        request({ url: "goods/detail", data: { goods_id: id } }).then(res => {
            console.log(res)
            let { goods_price, goods_name, pics, goods_introduce } = res.data.message;

            this.setData({
                goodsObj: {
                    goods_price,
                    goods_name,
                    pics,
                    goods_introduce: goods_introduce.replace(/\.webp/g, '.jpg')
                }
            })
        });
    },
    previewImage(e) {
        console.log(e);
        const index = e.currentTarget.dataset.index;
        const urls = this.data.goodsObj.pics.map(i => i.pics_mid)

        wx.previewImage({
            urls: urls,
            current: urls[index]
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