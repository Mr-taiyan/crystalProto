// pages/category/category.js
Page({
  /**
   * Page initial data
   */
  data: {
    productInfo: {},
    currentCategory: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    this.setData({
      productInfo: [
        {
          typeName: "水晶茶具",
          products: []
        },
        {
          typeName: "水晶家私",
          products: []
        },
        {
          typeName: "水晶首饰",
          products: []
        }
      ]
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
  onShareAppMessage: function() {},

  clickTap(event) {
    let target = event.currentTarget;
    let dataset = target.dataset;
    let index = dataset.ind;

    this.setData({
      currentCategory: index
    });
    console.log(this.data.currentCategory);
  }
});
