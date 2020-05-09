Page({
    data: {

    },
    onLoad: function(options) {

    },
    getBindgetuserinfo(e) {
        wx.setStorageSync("userInfo", e.detail.userInfo);
        wx.navigateBack({
            delta: 1
        })
    }
})