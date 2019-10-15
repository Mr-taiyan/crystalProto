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
  bindViewTap: function(e) {
    let prefix = "https://gitee.com/cty9388/crystalProto/raw/master";
    let currentImg = prefix + e.currentTarget.dataset.src;
    wx.previewImage({
      current: currentImg,
      urls: [
        prefix + "/images/image1-1.png",
        prefix + "/images/image1-2.png",
        prefix + "/images/image1-3.png",
        prefix + "/images/image1-4.png",
        prefix + "/images/image1-1.png",
        prefix + "/images/image1-2.png",
        prefix + "/images/image1-3.png"
      ],
      success: function(e) {
        console.log(e);
      }
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
