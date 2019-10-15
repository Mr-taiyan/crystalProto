//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    banners: ["/images/banner.png", "/images/banner.png", "/images/banner.png"],
    images1: [
      "/images/image1-1.png",
      "/images/image1-2.png",
      "/images/image1-3.png",
      "/images/image1-4.png",
      "/images/image1-1.png",
      "/images/image1-2.png",
      "/images/image1-3.png"
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  onLoad: function() {},
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});
