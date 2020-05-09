let ajaxTimes = 0;
export const request = (params) => {
    ajaxTimes++;
    return new Promise((resolve, reject) => {
        let baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1/'
        wx.showLoading({
            title: '加载中'
        });
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result)
            },
            fail: () => {},
            complete: () => {
                ajaxTimes--;
                if (ajaxTimes === 0) {
                    wx.hideLoading();
                }
            }
        });
    })
}