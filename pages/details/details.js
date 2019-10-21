// pages/details/details.js
Page({
  /**
   * Page initial data
   */
  data: {
    navTitle: "",
    navBackground: "gray",
    navColor: "",
    navLoading: false,
    imgSrc: "",
    price: 22800,
    priceDiscountPercentage: 50,
    priceDiscount: -11400,
    priceProfitPercentage: 60,
    priceProfit: 11400,
    introduction1: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    let contentImgs = [
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-1.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-2.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-3.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-4.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-5.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-6.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-7.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-8.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-9.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-10.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-11.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-12.png",
      "https://gitee.com/cty9388/crystalProto/raw/master/images/details/1-13.png"
    ];
    let productImg =
      "https://gitee.com/cty9388/crystalProto/raw/master/images/chairs.JPG";
    this.setData({
      imgSrc: productImg,
      introduction1: contentImgs
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {},

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {}
});
